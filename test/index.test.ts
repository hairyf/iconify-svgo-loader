import { describe, expect, it } from 'vitest'
import { IconifySvgoLoader, optimize, presetDefault } from '../src/index'

describe('package exports', () => {
  it('exports IconifySvgoLoader', () => {
    expect(typeof IconifySvgoLoader).toBe('function')
  })

  it('exports optimize', () => {
    expect(typeof optimize).toBe('function')
  })

  it('exports presetDefault', () => {
    expect(typeof presetDefault).toBe('function')
  })

  it('exports default', async () => {
    const mod = await import('../src/index')
    expect(typeof mod.default).toBe('function')
    expect(mod.default).toBe(IconifySvgoLoader)
  })
})
