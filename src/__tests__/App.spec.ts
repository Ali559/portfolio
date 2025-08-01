import { describe, it, expect, beforeEach } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import App from '../App.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue';
import FooterLayout from '@/layouts/FooterLayout.vue';

describe('App', () => {
  let wrapper: ReturnType<typeof mount>;
  beforeEach(async () => {
    wrapper = mount(App, {
      global: {
        stubs: {
          HeaderLayout,
          FooterLayout,
        }
      }
    })
    await flushPromises()
  })
  it('mounts renders properly', () => {
    expect(wrapper.findComponent(HeaderLayout).exists()).toBe(true)
    expect(wrapper.findComponent(FooterLayout).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('handles dark/light and the mode persits in localStorage mode', async () => {
    const header = wrapper.findComponent(HeaderLayout)
    header.vm.$emit('set-theme', true)
    await flushPromises()

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('isDark')).toBe('true')
    header.vm.$emit('set-theme', false)
    await flushPromises()

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('isDark')).toBe('false')
  })


  it('handles menu open/close in mobile view', async () => {
    const header = wrapper.findComponent(HeaderLayout)
    header.vm.$emit('toggle-menu', true)
    await flushPromises()

    expect(header.vm.isMenuOpen).toBe(true)

    header.vm.$emit('toggle-menu', false)
    await flushPromises()

    expect(header.vm.isMenuOpen).toBe(false)
  })

  it('handles scroll to section', async () => {
    const header = wrapper.findComponent(HeaderLayout)
    header.vm.$emit('scroll-to-section', 'about')
    await flushPromises()

    expect(window.scrollY).toBe(0)
  })

})
