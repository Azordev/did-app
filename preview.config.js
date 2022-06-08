const { quasar } = require('@quasar/vite-plugin');

module.exports = {
  vite: {
    plugins: [quasar()],
  },
  wrapper: {
    path: 'src/__previewjs__/PreviewWrapper.vue',
    componentName: 'default',
  },
};
