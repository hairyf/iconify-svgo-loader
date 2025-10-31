import { optimize as _optimize, Config } from 'svgo'
import { defaultPlugins } from './config'

interface TransformConfig {
  prefix?: string
  config?: Config
}

export function optimize(svg: string, options: TransformConfig = {}) {
  let { config = {}, prefix } = options
  config = { plugins: [...defaultPlugins], multipass: true, ...config }

  const colors = new Set<string>([
    ...extract(svg, 'fill'),
    ...extract(svg, 'stop-color'),
    ...extract(svg, 'stroke'),
  ])
  
  colors.delete('none')

  const single = colors.size <= 1

  if (prefix)
    config.plugins?.push({ name: 'prefixIds', params: { prefix } })

  if (single)
    config.plugins?.push({ name: 'convertColors', params: { currentColor: true } })

  svg = _optimize(svg, config).data

  if (config.unit) {
    svg = fillunit(svg, 'width', config.unit)
    svg = fillunit(svg, 'height', config.unit)
  }

  return svg
}


export function defaultTransform(name: string, svg: string, _config: Config = {}) {
  const config = { plugins: [...defaultPlugins], multipass: true, ..._config }
  const colors = new Set<string>([
    ...extract(svg, 'fill'),
    ...extract(svg, 'stop-color'),
    ...extract(svg, 'stroke'),
  ])
  
  colors.delete('none')

  const single = colors.size <= 1

  config.plugins?.push({ name: 'prefixIds', params: { prefix: name } })

  if (single)
    config.plugins?.push({ name: 'convertColors', params: { currentColor: true } })

  svg = _optimize(svg, config).data

  if (config.unit) {
    svg = fillunit(svg, 'width', config.unit)
    svg = fillunit(svg, 'height', config.unit)
  }

  return svg
}


export function extract(html: string, key: string) {
  var regex = new RegExp(key + '="([^"]+)"', "g");
  var matches = html.matchAll(regex);
  return [...matches].map(m => m[1])
}

export function fillunit(html: string, attr: string, unit: 'px' | 'em') {
  const value = extract(html, attr)[0]
  if (!value)
    return html
  const source = value.replace(/[^a-zA-Z]/g, '')
  if (source === unit)
    return html
  let count = +value.replace(/[^0-9.]/g, '')
  if (unit === 'em')
    count = count / 16
  if (unit === 'px' && source === 'em')
    count = count * 16
  const regex = new RegExp(`${attr}="\\d+"`, 'g')
  return html.replace(regex, `${attr}="${count}${unit}"`)
}