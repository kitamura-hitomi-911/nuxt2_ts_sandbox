import { mount } from '@vue/test-utils'
import PageIndex from '@/pages/index.vue'

describe('PageIndex', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PageIndex)
    expect(wrapper.vm).toBeTruthy()
  })
})
