import Typography from 'typography';

const config = require('../../config/SiteConfig');

const typography = new Typography({
  title: 'devresourcehub',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.66,
  scaleRatio: 3.157,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700']
    },
    {
      name: config.bodyFontFamily,
      styles: ['400']
    }
  ]
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
