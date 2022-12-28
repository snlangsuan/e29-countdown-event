<template>
  <div :ref="id" class="slot-machine__container" :style="{ backgroundColor: backgroundColor }">
    <div class="slot-machine-list">
      <template v-for="slot, i in slots">
        <div ref="slots" :key="'slot-' + i" class="slot-machine-item" :style="{ backgroundColor: slotBackground }">
          <div class="slot-machine-boxes" :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }">
            <div class="slot-machine-box">
              <template v-for="item, j in slot">
                <div :key="'item-' + i + j" class="slot-machine-box__item" :style="{ width: boxWidth + 'px', height: boxHeight + 'px', fontSize: boxWidth + 'px' }">
                  {{ item }}
                </div>
              </template>
              <div class="slot-machine-box__item slot-machine-box__item--copy" :style="{ width: boxWidth + 'px', height: boxHeight + 'px', fontSize: boxWidth + 'px' }">
                {{ slot[0] }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div  v-if="!hideDetails" class="slot-machine-details"  :style="{ minHeight: (boxWidth * 0.7) + 'px', fontSize: (boxWidth * 0.7) + 'px', color: messageColor }">
      {{ visible || fixed ? message : '&nbsp;' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotMachine',
  props: {
    message: {
      type: String,
      default: '',
    },
    hideDetails: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false,
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
      ro: null,
      boxWidth: 200,
      boxHeight: 200,
      slots: [],
      opts: null,
      startedAt: null,
      visible: false,
    }
  },
  mounted() {
    this.id = 'slot-machine-' + this._uid
    this.ro = new ResizeObserver(this.onResize)
    this.initSlots()
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
      console.log(width)
      const padding = 9 * 8
      const size = (width - padding) / 10
      this.boxWidth = size
      const boxPadding = size * 0.1
      this.boxHeight = size + (boxPadding * 2)
      console.log('update box size', this.boxWidth, this.boxHeight)
    },
    initSlots() {
      this.slots = [...Array(10)].map((x) => [...Array(11)].map((y, i) => i > 9 ? 'X' : i))
    },
    loadEffect() {
      this.audio = new Audio('/sounds/spinning-eff.mp3?d=' + Date.now())
      this.audio.preload = 'auto'
      // this.audio.loop = true
    },
    next() {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (cb) { setTimeout(cb, 1000/60) }
    },
    start(codes = []) {
      console.log(codes)
      if (this.opts || codes.length !== 10) return
      this.visible = false
      this.opts = this.slots.map((data, i) => {
        const slot = this.$refs.slots[i]
        // const choice = Math.floor( Math.random() * data.items.length )
        const choice = codes[i]

        const opts = {
          el: slot.querySelector('.slot-machine-box'),
          finalPos: choice * this.boxHeight,
          startOffset: 2000 + Math.random() * 500 + i * 500,
          height: data.length * this.boxHeight,
          duration: 9000 + i * 700, // milliseconds
          isFinished: false,
        }
        return opts
      })
      this.audio && this.audio.play()
      this.next()(this.animate)
    },
    reset() {
      this.visible = false
      this.opts = null
      this.startedAt = null
      this.audio && (this.audio.currentTime = 0)
      for (const i in this.slots) {
        const slot = this.$refs.slots[i]
        const el = slot.querySelector('.slot-machine-box')
        el.style.transform = 'translateY(0)'
      }
    },
    show(codes) {
      this.visible = true
      for (const i in this.slots) {
        const choice = codes[i]
        const data = this.slots[i]
        const slot = this.$refs.slots[i]
        const finalPos = choice * this.boxHeight
        console.log('all items', data.length, this.boxHeight, data.length * this.boxHeight)
        const height = data.length * this.boxHeight
        const pos = -1 * Math.floor(finalPos % height)
        const el = slot.querySelector('.slot-machine-box')
        console.log(el.style.transform, height, finalPos, typeof(choice))
        el.style.transform = 'translateY(' + pos + 'px)'
      }
    },
    animate(timestamp) {
      if (!this.opts) return
      if (this.startedAt === null) this.startedAt = timestamp
      const timeDiff = timestamp - this.startedAt
      this.opts.forEach((opt) => {
        if (opt.isFinished) return
        const timeRemaining = Math.max(opt.duration - timeDiff, 0)
        const power = 3
        const offset = ( Math.pow(timeRemaining, power) / Math.pow(opt.duration, power) ) * opt.startOffset
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
        opt.el.style.transform = 'translateY(' + pos + 'px)'
        if ( timeDiff > opt.duration ) {
          console.log('finished', opt, pos, opt.finalPost)
        	opt.isFinished = true
        }
      })

      if (this.opts.every( o => o.isFinished )) {
        this.opts = null
        this.startedAt = null
        this.audio && this.audio.pause()
        this.audio && (this.audio.currentTime = 0)
        this.visible = true
        console.log('finished')
        this.$emit('end')
      } else {
        this.next()(this.animate)
      }
    }
  }
}
</script>

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
    margin-bottom: 8px;

    & * {
      user-select: none;
    }
  }

  &-item {
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
  }

  &-list > &-item + &-item {
    margin-left: 8px;
  }

  &-boxes {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }

  &-box {
    display: block;
    margin: 0;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8rem;
      font-size: Roboto, 'sans-serif';
      margin-left: -2px;
    }
  }

  &-details {
    margin-top: 8px;
    font-size: 5rem;
    text-align: center;
  }
}
</style>
