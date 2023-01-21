<template>
  <div>
    <RoundNum />
    <Modal name="aaa"></Modal>
    <a href="#" @click.prevent="openModal('aaa')">開く</a>
    <a href="#" @click.prevent="closeModal('aaa')">閉じる</a>
    <a href="#" @click.prevent="openDialogInLocal">ダイアログ開く</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from '@nuxtjs/composition-api'
import { UseModal, UseModalKey } from '@/composables/useModal'
import RoundNum from '@/components/RoundNum.vue'
import Modal from '@/components/Modal.vue'
export default defineComponent({
  name: 'IndexPage',
  components: { RoundNum, Modal },
  setup() {
    const { open: openModal, close: closeModal, openDialog } = inject(UseModalKey) as UseModal
    const openDialogInLocal = async () => {
      const result = await openDialog()
      console.log('★', result)
    }
    return { openModal, closeModal, openDialogInLocal }
  },
})
</script>
