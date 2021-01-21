import { ScullyConfig } from '@scullyio/scully';
const { registerPlugin } = require('@scullyio/scully');

registerPlugin('router', 'catsPlugin', async() => {
  return [
    {route: '/cats/1'},
    {route: '/cats/2'},
    {route: '/cats/3'}
  ]
})


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-demo",
  outDir: './dist/static',
  routes: {
    "/cats/:catId": {
      type: 'catsPlugin'
    }
  }
};