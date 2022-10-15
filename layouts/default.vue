<template>
  <div>
    <Nuxt />
    <Modal name="dialog"></Modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import useModal, { UseModalKey } from '@/composables/useModal'

export default defineComponent({
  setup() {
    provide(UseModalKey, useModal())
    return {}
  },
})
</script>
