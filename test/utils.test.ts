import { describe, expect, it } from 'vitest'
import { definePlugin, implementWithPlugin, parsePrefix } from '../src/utils'

describe('utils', () => {
  it('parsePrefix extracts name from path', () => {
    expect(parsePrefix('/path/to/home.svg')).toBe('home')
    expect(parsePrefix('icon.svg')).toBe('icon')
  })

  it('implementWithPlugin returns plugin config', () => {
    const config = implementWithPlugin('removeComments')
    expect(config).toHaveProperty('name', 'removeComments')
  })

  it('definePlugin returns factory function', () => {
    const plugin = definePlugin('custom', () => ({}))
    const config = plugin()
    expect(config).toHaveProperty('name', 'custom')
    expect(config).toHaveProperty('fn')
  })
})
