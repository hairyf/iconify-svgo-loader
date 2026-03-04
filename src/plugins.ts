import type { PluginConfig } from 'svgo'
import type { ExtendsPluginConfig } from './types'
import { implementWithPlugin } from './utils'

export function presetDefault(config?: ExtendsPluginConfig<'preset-default'>): PluginConfig {
  return implementWithPlugin('preset-default', config)
}
export function addAttributesToSVGElement(config?: ExtendsPluginConfig<'addAttributesToSVGElement'>): PluginConfig {
  return implementWithPlugin('addAttributesToSVGElement', config)
}
export function addClassesToSVGElement(config?: ExtendsPluginConfig<'addClassesToSVGElement'>): PluginConfig {
  return implementWithPlugin('addClassesToSVGElement', config)
}
export function cleanupAttrs(config?: ExtendsPluginConfig<'cleanupAttrs'>): PluginConfig {
  return implementWithPlugin('cleanupAttrs', config)
}
export function cleanupEnableBackground(config?: ExtendsPluginConfig<'cleanupEnableBackground'>): PluginConfig {
  return implementWithPlugin('cleanupEnableBackground', config)
}
export function cleanupIds(config?: ExtendsPluginConfig<'cleanupIds'>): PluginConfig {
  return implementWithPlugin('cleanupIds', config)
}
export function cleanupListOfValues(config?: ExtendsPluginConfig<'cleanupListOfValues'>): PluginConfig {
  return implementWithPlugin('cleanupListOfValues', config)
}
export function cleanupNumericValues(config?: ExtendsPluginConfig<'cleanupNumericValues'>): PluginConfig {
  return implementWithPlugin('cleanupNumericValues', config)
}
export function collapseGroups(config?: ExtendsPluginConfig<'collapseGroups'>): PluginConfig {
  return implementWithPlugin('collapseGroups', config)
}
export function convertColors(config?: ExtendsPluginConfig<'convertColors'>): PluginConfig {
  return implementWithPlugin('convertColors', config)
}
export function convertEllipseToCircle(config?: ExtendsPluginConfig<'convertEllipseToCircle'>): PluginConfig {
  return implementWithPlugin('convertEllipseToCircle', config)
}
export function convertPathData(config?: ExtendsPluginConfig<'convertPathData'>): PluginConfig {
  return implementWithPlugin('convertPathData', config)
}
export function convertShapeToPath(config?: ExtendsPluginConfig<'convertShapeToPath'>): PluginConfig {
  return implementWithPlugin('convertShapeToPath', config)
}
export function convertStyleToAttrs(config?: ExtendsPluginConfig<'convertStyleToAttrs'>): PluginConfig {
  return implementWithPlugin('convertStyleToAttrs', config)
}
export function convertTransform(config?: ExtendsPluginConfig<'convertTransform'>): PluginConfig {
  return implementWithPlugin('convertTransform', config)
}
export function inlineStyles(config?: ExtendsPluginConfig<'inlineStyles'>): PluginConfig {
  return implementWithPlugin('inlineStyles', config)
}
export function mergePaths(config?: ExtendsPluginConfig<'mergePaths'>): PluginConfig {
  return implementWithPlugin('mergePaths', config)
}
export function mergeStyles(config?: ExtendsPluginConfig<'mergeStyles'>): PluginConfig {
  return implementWithPlugin('mergeStyles', config)
}
export function minifyStyles(config?: ExtendsPluginConfig<'minifyStyles'>): PluginConfig {
  return implementWithPlugin('minifyStyles', config)
}
export function moveElemsAttrsToGroup(config?: ExtendsPluginConfig<'moveElemsAttrsToGroup'>): PluginConfig {
  return implementWithPlugin('moveElemsAttrsToGroup', config)
}
export function moveGroupAttrsToElems(config?: ExtendsPluginConfig<'moveGroupAttrsToElems'>): PluginConfig {
  return implementWithPlugin('moveGroupAttrsToElems', config)
}
export function prefixIds(config?: ExtendsPluginConfig<'prefixIds'>): PluginConfig {
  return implementWithPlugin('prefixIds', config)
}
export function removeAttributesBySelector(config?: ExtendsPluginConfig<'removeAttributesBySelector'>): PluginConfig {
  return implementWithPlugin('removeAttributesBySelector', config)
}
export function removeAttrs(config?: ExtendsPluginConfig<'removeAttrs'>): PluginConfig {
  return implementWithPlugin('removeAttrs', config)
}
export function removeComments(config?: ExtendsPluginConfig<'removeComments'>): PluginConfig {
  return implementWithPlugin('removeComments', config)
}
export function removeDesc(config?: ExtendsPluginConfig<'removeDesc'>): PluginConfig {
  return implementWithPlugin('removeDesc', config)
}
export function removeDimensions(config?: ExtendsPluginConfig<'removeDimensions'>): PluginConfig {
  return implementWithPlugin('removeDimensions', config)
}
export function removeDoctype(config?: ExtendsPluginConfig<'removeDoctype'>): PluginConfig {
  return implementWithPlugin('removeDoctype', config)
}
export function removeEditorsNSData(config?: ExtendsPluginConfig<'removeEditorsNSData'>): PluginConfig {
  return implementWithPlugin('removeEditorsNSData', config)
}
export function removeElementsByAttr(config?: ExtendsPluginConfig<'removeElementsByAttr'>): PluginConfig {
  return implementWithPlugin('removeElementsByAttr', config)
}
export function removeEmptyAttrs(config?: ExtendsPluginConfig<'removeEmptyAttrs'>): PluginConfig {
  return implementWithPlugin('removeEmptyAttrs', config)
}
export function removeEmptyContainers(config?: ExtendsPluginConfig<'removeEmptyContainers'>): PluginConfig {
  return implementWithPlugin('removeEmptyContainers', config)
}
export function removeEmptyText(config?: ExtendsPluginConfig<'removeEmptyText'>): PluginConfig {
  return implementWithPlugin('removeEmptyText', config)
}
export function removeHiddenElems(config?: ExtendsPluginConfig<'removeHiddenElems'>): PluginConfig {
  return implementWithPlugin('removeHiddenElems', config)
}
export function removeMetadata(config?: ExtendsPluginConfig<'removeMetadata'>): PluginConfig {
  return implementWithPlugin('removeMetadata', config)
}
export function removeNonInheritableGroupAttrs(config?: ExtendsPluginConfig<'removeNonInheritableGroupAttrs'>): PluginConfig {
  return implementWithPlugin('removeNonInheritableGroupAttrs', config)
}
export function removeOffCanvasPaths(config?: ExtendsPluginConfig<'removeOffCanvasPaths'>): PluginConfig {
  return implementWithPlugin('removeOffCanvasPaths', config)
}
export function removeRasterImages(config?: ExtendsPluginConfig<'removeRasterImages'>): PluginConfig {
  return implementWithPlugin('removeRasterImages', config)
}
export function removeScriptElement(config?: ExtendsPluginConfig<'removeScriptElement'>): PluginConfig {
  return implementWithPlugin('removeScriptElement', config)
}
export function removeStyleElement(config?: ExtendsPluginConfig<'removeStyleElement'>): PluginConfig {
  return implementWithPlugin('removeStyleElement', config)
}
export function removeTitle(config?: ExtendsPluginConfig<'removeTitle'>): PluginConfig {
  return implementWithPlugin('removeTitle', config)
}
export function removeUnknownsAndDefaults(config?: ExtendsPluginConfig<'removeUnknownsAndDefaults'>): PluginConfig {
  return implementWithPlugin('removeUnknownsAndDefaults', config)
}
export function removeUnusedNS(config?: ExtendsPluginConfig<'removeUnusedNS'>): PluginConfig {
  return implementWithPlugin('removeUnusedNS', config)
}
export function removeUselessDefs(config?: ExtendsPluginConfig<'removeUselessDefs'>): PluginConfig {
  return implementWithPlugin('removeUselessDefs', config)
}
export function removeUselessStrokeAndFill(config?: ExtendsPluginConfig<'removeUselessStrokeAndFill'>): PluginConfig {
  return implementWithPlugin('removeUselessStrokeAndFill', config)
}
export function removeViewBox(config?: ExtendsPluginConfig<'removeViewBox'>): PluginConfig {
  return implementWithPlugin('removeViewBox', config)
}
export function removeXMLNS(config?: ExtendsPluginConfig<'removeXMLNS'>): PluginConfig {
  return implementWithPlugin('removeXMLNS', config)
}
export function removeXMLProcInst(config?: ExtendsPluginConfig<'removeXMLProcInst'>): PluginConfig {
  return implementWithPlugin('removeXMLProcInst', config)
}
export function reusePaths(config?: ExtendsPluginConfig<'reusePaths'>): PluginConfig {
  return implementWithPlugin('reusePaths', config)
}
export function sortAttrs(config?: ExtendsPluginConfig<'sortAttrs'>): PluginConfig {
  return implementWithPlugin('sortAttrs', config)
}
export function sortDefsChildren(config?: ExtendsPluginConfig<'sortDefsChildren'>): PluginConfig {
  return implementWithPlugin('sortDefsChildren', config)
}
