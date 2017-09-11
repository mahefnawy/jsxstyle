import factory from './makeReactStyleComponentClass';
import defaults from './defaults';

// default components
export const Box = factory('Box');
export const Block = factory('Block', defaults.Block);
export const InlineBlock = factory('InlineBlock', defaults.InlineBlock);
export const InlineFlex = factory('InlineFlex', defaults.InlineFlex);
export const Table = factory('Table', defaults.Table);
export const TableRow = factory('TableRow', defaults.TableRow);
export const TableCell = factory('TableCell', defaults.TableCell);
export const Inline = factory('Inline', defaults.Inline);
export const Row = factory('Row', defaults.Row);
export const Col = factory('Col', defaults.Col);
export const Grid = factory('Grid', defaults.Grid);

// injections
export { injectAddRule, injectClassNameStrategy } from './styleCache';
export { resetCache } from './styleCache';

// methods used by jsxstyle-loader
export { defaults as _defaults };
export { default as _getStyleKeysForProps } from './getStyleKeysForProps';
export { getClassName as _getClassName } from './styleCache';

// to be removed before 2.0
export * from './deprecated';
