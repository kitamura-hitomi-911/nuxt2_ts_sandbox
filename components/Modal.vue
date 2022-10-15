<template>
  <div>
    aaa<br />isOpen:{{ isOpen }}<br />

    <a href="#" @click.prevent="onOk">モーダル内OK</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, inject } from '@nuxtjs/composition-api'
import { UseModal, UseModalKey } from '@/composables/useModal'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { isOpenByName, resolverByName } = inject(UseModalKey) as UseModal
    const isOpen = computed(() => isOpenByName.value[props.name] || false)
    const resolver = computed(() => resolverByName.value[props.name] || null)
    const onOk = () => {
      resolver.value && resolver.value()
    }
    return { isOpen, onOk, resolverByName, resolver }
  },
})
</script>
