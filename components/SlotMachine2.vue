<template>
  <div :ref="id" class="slot-machine__container" :style="{ backgroundColor: backgroundColor }">
    <div class="slot-machine-list">
      <template v-for="i in items">
        <div
          :key="'item-' + i"
          class="slot-machine-item"
          :style="{ width: boxSize + 'px', height: (boxSize + 24) + 'px', backgroundColor: slotBackground, color: color }"
        >
          <div class="slot-machine-boxes"></div>
        </div>
      </template>
    </div>
    <div v-if="!hideDetails" class="slot-machine__details" :style="{ fontSize: (boxSize * 0.7) + 'px', color: messageColor }">
      {{ visible ? message : '&nbsp;' }}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'SlotMachine',
  props: {
    items: {
      type: Number,
      default: 3
    },
    message: {
      type: String,
      default: '',
    },
    hideDetails: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true,
    },
    messageColor: {
      type: String,
      default: '#000000'
    },
    color: {
      type: String,
      default: '#000000'
    },
    slotBackground: {
      type: String,
      default: '#ffffff'
    },
    backgroundColor: {
      type: String,
      default: '#ffffff00'
    }
  },
  data() {
    return {
      id: null,
      spinning: false,
      boxSize: 10,
      boxItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ro: null,
      audio: null,
    }
  },
  mounted() {
    this.id = 'slot-machine-' + this._uid
    this.roll()
    this.ro = new ResizeObserver(this.onResize)
    this.loadEffect()
    setTimeout(() => {
      this.ro.observe(this.$refs[this.id])
      this.onResize()
    }, 100)
  },
  beforeDestroy() {
    this.ro.unobserve(this.$refs[this.id])
  },
  methods: {
    onResize() {
      const width = this.$refs[this.id].offsetWidth
      const padding = (this.items - 1) * 8
      const size = (width - padding) / this.items
      this.boxSize = size
      const boxes = document.querySelectorAll('.slot-machine-box')
      for (const box of boxes) {
        box.style.width = this.boxSize + 'px'
        box.style.height = this.boxSize + 'px'
        box.style.fontSize = this.boxSize + 'px'
      }
    },
    loadEffect() {
      this.audio = new Audio('/sounds/spinning-eff.mp3')
    },
    resetRoll() {
      this.roll()
    },
    roll(selected, first = true, groups = 100, duration = 1) {
      const items = document.querySelectorAll('.slot-machine-item')
      duration = Math.max(1, duration)
      let row = 0
      for (const item of items) {
        if (first) item.dataset.spinned = '0'
        else if (item.dataset.spinned === '1') return

        const boxes = item.querySelector('.slot-machine-boxes')
        const boxesClone = boxes.cloneNode(false)
        const pool = ['0']
        if (!first) {
          groups = Math.max(1, groups)
          const arr = []
          for (let i = 0; i < groups; i++) {
            arr.push(...this.boxItems)
          }

          pool.push(...this.shuffle(arr))
          pool.push(selected[row])

          boxesClone.addEventListener(
            'transitionstart',
            () => {
              item.dataset.spinned = '1'
              boxes.querySelectorAll('.slot-machine-box').forEach((box) => {
                box.style.filter = 'blur(1px)'
              })
            },
            { once: true }
          )

          boxesClone.addEventListener(
            'transitionend',
            () => {
              boxes.querySelectorAll('.slot-machine-box').forEach((box, index) => {
                box.style.filter = 'blur(0)'
                if (index > 0) boxes.removeChild(box)
              })
            },
            { once: true }
          )
        }

        for (let i = pool.length - 1; i >= 0; i--) {
          const box = document.createElement('div')
          box.classList.add('slot-machine-box')
          box.style.width = this.boxSize + 'px'
          box.style.height = this.boxSize + 'px'
          box.style.fontSize = this.boxSize + 'px'
          box.textContent = pool[i]
          boxesClone.appendChild(box)
        }

        boxesClone.style.transitionDuration = `${duration + (row * 0.5)}s`
        boxesClone.style.transform = `translateY(-${
          (item.clientHeight + 1.8) * (pool.length - 1)
        }px)`
        item.replaceChild(boxesClone, boxes)
        row += 1
      }
    },
    shuffle(items) {
      let current = items.length
      while (current > 0) {
        const rand = Math.floor(Math.random() * current)
        current -= 1
        const temp = items[current]
        items[current] = items[rand]
        items[rand] = temp
      }
      return items
    },
    async spin(code) {
      if (this.spinning) return
      try {
        this.spinning = true
        setTimeout(() => {
          this.audio && this.audio.play()
        }, 400)
        const randpad = ('0'.repeat(this.items) + code).slice(-this.items).split('')
        this.roll(randpad, false, 4, 4)
        const start = dayjs()
        const items = document.querySelectorAll('.slot-machine-item')
        console.log('items', items.length)
        for (const item of items) {
          const boxes = item.querySelector('.slot-machine-boxes')
          const duration = parseInt(boxes.style.transitionDuration)
          console.log('duration', duration)
          boxes.style.transform = 'translateY(0)'
          await new Promise((resolve) => setTimeout(resolve, duration * 20))
        }
        const end = dayjs()
        console.log('start', start.format('HH:mm:ss'), 'end', end.format('HH:mm:ss'), end.diff(start, 'seconds', true))
        await new Promise((resolve) => setTimeout(resolve, 7800))

        this.audio && this.audio.pause()
        this.audio && (this.audio.currentTime = 0)
      } catch (error) {
        console.error(error)
      } finally {
        this.spinning = false
      }
    },
    async show(code) {
      try {
        const randpad = ('0'.repeat(this.items) + code).slice(-this.items).split('')
        this.roll(randpad, false, 1, 0)
        const items = document.querySelectorAll('.slot-machine-item')
        for (const item of items) {
          const boxes = item.querySelector('.slot-machine-boxes')
          const duration = parseInt(boxes.style.transitionDuration)
          boxes.style.transform = 'translateY(0)'
          await new Promise((resolve) => setTimeout(resolve, duration * 100))
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.spinning = false
      }
    }
  }
}
</script>

<style lang="scss">
.slot-machine {
  &-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    font-size: Roboto, 'sans-serif';
    margin-left: -3px;
  }
}
</style>

<style lang="scss" scoped>
.slot-machine {
  &__container {
    width: 100%;
    padding: 16px;
    padding-bottom: 8px;
    border-radius: 4px;
  }

  &-list {
    position: relative;
    width: 100%;
    display: flex;
    user-select: none;

    & * {
      user-select: none;
    }
  }

  &-item {
    // border: thin solid #eee;
    border-radius: 4px;
    overflow: hidden;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #fff;
  }

  &-list > &-item + &-item {
    margin-left: 8px;
  }

  &__boxes {
    transition: transform 5s ease-in-out;
  }

  &__details {
    margin-top: 16px;
    font-size: 5rem;
    text-align: center;
  }
}
</style>
