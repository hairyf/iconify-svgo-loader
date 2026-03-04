import { describe, expect, it } from 'vitest'
import { defaultConfig, defaultPlugins, defineConfig } from '../src/config'

describe('config', () => {
  it('defineConfig returns config', () => {
    const config = defineConfig({ multipass: true })
    expect(config).toEqual({ multipass: true })
  })

  it('defaultPlugins contains expected plugins', () => {
    expect(defaultPlugins).toContain('removeDoctype')
    expect(defaultPlugins).toContain('removeComments')
    expect(defaultPlugins).toContain('cleanupIds')
  })

  it('defaultConfig has multipass and plugins', () => {
    expect(defaultConfig.multipass).toBe(true)
    expect(defaultConfig.plugins).toBe(defaultPlugins)
  })
})
