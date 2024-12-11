import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PageHome from '../PageHome.vue'

describe('PageHome', () => {
  it('renders properly', () => {
    const wrapper = mount(PageHome, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
