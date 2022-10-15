import { ref, InjectionKey, computed } from '@nuxtjs/composition-api'
type Modal = {
  name: string
  isOpen: boolean
  resolver?: null | (() => void)
  rejector?: null | (() => void)
}
export default function useModal() {
  const modals = ref<Modal[]>([
    {
      name: 'dialog',
      isOpen: false,
      resolver: null,
    },
  ])
  const modalByName = computed(() =>
    modals.value.reduce<Record<string, Modal>>((ret, modal) => {
      ret[modal.name] = modal
      return ret
    }, {})
  )
  const isOpenByName = computed(() =>
    modals.value.reduce<Record<string, boolean>>((ret, modal) => {
      ret[modal.name] = modal.isOpen
      return ret
    }, {})
  )
  const resolverByName = computed(() =>
    modals.value.reduce<Record<string, null | (() => void)>>((ret, modal) => {
      ret[modal.name] = modal.resolver || null
      return ret
    }, {})
  )
  const open = (name: string) => {
    if (!modalByName.value[name]) {
      modals.value.push({ name, isOpen: true })
      return
    }
    modalByName.value[name].isOpen = true
  }
  const close = (name: string) => {
    if (!modalByName.value[name]) return
    modalByName.value[name].isOpen = false
  }
  const openDialog = () =>
    new Promise((resolve, reject) => {
      modalByName.value['dialog'].resolver = () => {
        console.log('きた？')
        resolve('onOK')
      }
      open('dialog')
    })
  return { isOpenByName, resolverByName, open, close, openDialog }
}
export type UseModal = ReturnType<typeof useModal>
export const UseModalKey: InjectionKey<UseModal> = Symbol('UseModal')
