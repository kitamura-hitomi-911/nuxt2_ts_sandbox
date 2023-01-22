import { mount } from '@vue/test-utils'
import PageIndex from '@/pages/index.vue'
// import PageIndex from '@/components/RoundNum.vue'
import useModal, { UseModalKey } from '@/composables/useModal'

describe('PageIndex', () => {
  test('is a Vue instance', async () => {
    const wrapper = mount(PageIndex, {
      provide: {
        [UseModalKey as symbol]: useModal(),
      },
    })
    expect(wrapper.vm).toBeTruthy()
    const openModalLink = wrapper.find('.open_modal')
    openModalLink.trigger('click')
    await wrapper.vm.$nextTick()
    const modal = wrapper.find('.modal')
    expect(modal.text()).toMatch('aaaisOpen:true モーダル内OK')
  })
})
