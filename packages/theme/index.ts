import prismTheme from '@theme-ui/prism/presets/night-owl.json';
import { toTheme } from '@theme-ui/typography';
import merge from 'deepmerge';

const theme = {
  borderStyles: ['solid'],
  borderWidths: ['2px'],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#119',
    accent: '#639',
    gray: '#666',
  },
  fonts: {
    heading: "'Overpass'",
    body: "'Asap'",
    monospace: "'Overpass Mono'",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    code: { fontFamily: 'monospace' },
    pre: {
      fontFamily: 'monospace',
      ...prismTheme,
    },
  },
};

/**
 * @see {@link https://kyleamathews.github.io/typography.js/|Typography.js}
 */
const typography = toTheme({
  baseFontSize: '16px',
  scaleRatio: 2,
});

/**
 * Don't forget to import Asap, Overpass and Overpass Mono to your project.
 *
 * @example
 * import 'typeface-asap';
 * import 'typeface-overpass';
 * import 'typeface-overpass-mono';
 */
export default merge(typography, theme);
