## iconify-svgo-loader

Ionify loader optimized using [SVGO](https://github.com/svg/svgo), Works perfectly with [@unocss/preset-icons](https://unocss.dev/presets/icons) or [unplugin-icons](https://github.com/antfu/unplugin-icons).

Normal use: default loading of presets and monochrome icon processing, prefixIds

```ts
import FileSystemSvgoLoader from 'iconify-svgo-loader'
const loader1 = FileSystemSvgoLoader('./src/assets/fonts', {
  /* options */
})
```

Custom Callback mode to obtain name and svg content

```ts
import FileSystemSvgoLoader from 'iconify-svgo-loader'

const loader2 = FileSystemSvgoLoader('./src/assets/fonts', (name, svgContent) => {
  return {
    /* options */
  }
})
```

Complete example：handling monochrome icons, and adding prefixIds

```ts
import FileSystemSvgoLoader, { prefixIds, presetDefault, sortAttrs, convertColors } from 'iconify-svgo-loader'

const loader3 = FileSystemSvgoLoader('./src/assets/fonts', (name, svgContent) => {

  // is single color
  const single = patch('fill', svgContent) + patch('stop-color', svgContent) === 1

  const plugins = [
    // set of built-in plugins enabled by default
    presetDefault(),

    // enable built-in plugins by name
    prefixIds({ prefix: name }),

    // or by expanded notation which allows to configure plugin
    sortAttrs({ xmlnsOrder: 'alphabetical' }),
  ]

  if (single)
    plugins.push(convertColors({ currentColor: true }))

  return {
    multipass: true,
    plugins: plugins
  }
})

function patch(re: string, s: string) {
  return s.split(re).length - 1
}
```
