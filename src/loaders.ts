import type { Stats } from 'fs'
import type { CustomIconLoader, Transform } from './types'
import { camelize, pascalize, snakelize } from '@iconify/utils/lib'
import { promises as fs } from 'fs'
import { defaultTransform } from './optimize'

export function FileSystemSvgoLoader(dir: string, transform?: Transform): CustomIconLoader {
  return async (name) => {

    if (typeof transform === 'object' || typeof transform === 'undefined')
      transform = (name, svg) => defaultTransform(name, svg, transform as any)

    const paths = [
      `${dir}/${name}.svg`,
      `${dir}/${camelize(name)}.svg`,
      `${dir}/${pascalize(name)}.svg`,
      `${dir}/${snakelize(name)}.svg`,
    ]

    let stat: Stats

    for (const path of paths) {
      try {
        stat = await fs.lstat(path)
      }
      catch (err) {
        continue
      }
      if (stat.isFile()) {
        let svg = await fs.readFile(path, 'utf-8')
        const cleanupIdx = svg.indexOf('<svg')
        if (cleanupIdx > 0)
          svg = svg.slice(cleanupIdx)

        return transform(name, svg)
      }
    }
  }
}