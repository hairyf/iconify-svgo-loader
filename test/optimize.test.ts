import { describe, expect, it } from 'vitest'
import { defaultTransform, extract, fillunit, optimize } from '../src/optimize'

describe('extract', () => {
  it('extracts attribute values by key', () => {
    const html = 'fill="red" stroke="blue" fill="green"'
    expect(extract(html, 'fill')).toEqual(['red', 'green'])
    expect(extract(html, 'stroke')).toEqual(['blue'])
  })

  it('returns empty array when no match', () => {
    expect(extract('<svg></svg>', 'fill')).toEqual([])
  })
})

describe('fillunit', () => {
  it('converts numeric width to em when unit is em', () => {
    const html = 'width="16"'
    expect(fillunit(html, 'width', 'em')).toContain('width="1em"')
  })

  it('converts numeric width to px when unit is px', () => {
    const html = 'width="1"'
    expect(fillunit(html, 'width', 'px')).toContain('width="1px"')
  })

  it('returns html unchanged when attr not found', () => {
    const html = '<svg></svg>'
    expect(fillunit(html, 'width', 'px')).toBe(html)
  })
})

describe('optimize', () => {
  it('optimizes SVG string', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect fill="red"/></svg>'
    const result = optimize(svg)
    expect(result).toContain('<svg')
    expect(result.length).toBeLessThanOrEqual(svg.length + 50)
  })

  it('accepts config options', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg"><rect/></svg>'
    const result = optimize(svg, { prefix: 'icon-' })
    expect(result).toContain('<svg')
    expect(typeof result).toBe('string')
  })
})

describe('defaultTransform', () => {
  it('transforms SVG and returns string', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg"><rect/></svg>'
    const result = defaultTransform('my-icon', svg)
    expect(result).toContain('<svg')
    expect(typeof result).toBe('string')
  })
})
