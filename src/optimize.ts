import { optimize as _optimize, Config } from 'svgo'
import { defaultPlugins } from './config'

interface TransformConfig {
  prefix?: string
  config?: Config
}

export function optimize(svg: string, options: TransformConfig = {}) {
  let { config = {}, prefix } = options
  config = { plugins: defaultPlugins, multipass: true, ...config }

  const single = patch('fill', svg) + patch('stop-color', svg) === 1

  if (prefix)
    config.plugins?.push({ name: 'prefixIds', params: { prefix } })

  if (single)
    config.plugins?.push({ name: 'convertColors', params: { currentColor: true } })

  return _optimize(svg, config).data
}

export function patch(re: string, s: string) {
  return s.split(re).length - 1
}

export function defaultTransform(name: string, svg: string, _config: Config = {}) {
  const config = { plugins: defaultPlugins, multipass: true, ..._config }
  const single = patch('fill=', svg) + patch('stop-color=', svg) === 1

  config.plugins?.push({ name: 'prefixIds', params: { prefix: name } })

  if (single)
    config.plugins?.push({ name: 'convertColors', params: { currentColor: true } })

  return _optimize(svg, config).data
}