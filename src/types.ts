import type { BuiltinsWithOptionalParams, BuiltinsWithRequiredParams } from 'svgo/plugins/plugins-types'
import type { Plugin } from 'svgo/lib/types'
import type { Config } from 'svgo'

export type Awaitable<T> = T | PromiseLike<T>;

export type CustomIconLoader = (name: string) => Awaitable<string | undefined>

export type PluginsParams = BuiltinsWithOptionalParams & BuiltinsWithRequiredParams

export type ExtendsPluginConfig<K extends keyof PluginsParams> = PluginsParams[K] & { fn?: Plugin<PluginsParams[K]> }

export type CustomPluginFn<T> = (params?: T) => { name: string; fn: Plugin<T>; params?: T }

export type Transform = Config | ((name: string, svg: string) => string)
