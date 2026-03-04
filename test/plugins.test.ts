import { describe, expect, it } from 'vitest'
import { prefixIds, presetDefault, removeComments } from '../src/plugins'

describe('plugins', () => {
  it('presetDefault returns plugin config', () => {
    const config = presetDefault()
    expect(config).toHaveProperty('name', 'preset-default')
  })

  it('prefixIds returns plugin config', () => {
    const config = prefixIds({ prefix: 'icon-' })
    expect(config).toHaveProperty('name', 'prefixIds')
    expect(config).toHaveProperty('params')
    expect((config as { params?: { prefix?: string } }).params?.prefix).toBe('icon-')
  })

  it('removeComments returns plugin config', () => {
    const config = removeComments()
    expect(config).toHaveProperty('name', 'removeComments')
  })
})
