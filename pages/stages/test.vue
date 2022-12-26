<template>
  <div class="pa-3 red" >
    <slot-machine ref="slot" message="คุณสวัสดี โชคดี" />

    <div class="py-3">
      <v-btn block @click="$refs.slot.start([0, 8, 5, 7, 8, 6, 2, 10, 10, 10])">Start</v-btn>
      <v-btn class="mt-3" block @click="$refs.slot.reset()">Reset</v-btn>
      <v-btn class="mt-3" block @click="$refs.slot.show([0, 8, 5, 7, 8, 6, 2, 10, 10, 10])">Show</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage'
}
</script>
