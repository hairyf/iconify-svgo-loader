import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { IconifySvgoLoader } from '../src/loaders'

describe('iconifySvgoLoader', () => {
  it('returns loader function', () => {
    const loader = IconifySvgoLoader('/tmp/icons')
    expect(typeof loader).toBe('function')
  })

  it('loads SVG file with exact name', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'iconify-test-'))
    const svgPath = join(dir, 'home.svg')
    await writeFile(svgPath, '<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 0"/></svg>')

    try {
      const loader = IconifySvgoLoader(dir)
      const result = await loader('home')
      expect(result).toBeDefined()
      expect(result).toContain('<svg')
    }
    finally {
      await rm(dir, { recursive: true })
    }
  })

  it('returns undefined for non-existent icon', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'iconify-test-'))
    try {
      const loader = IconifySvgoLoader(dir)
      const result = await loader('nonexistent')
      expect(result).toBeUndefined()
    }
    finally {
      await rm(dir, { recursive: true })
    }
  })
})
