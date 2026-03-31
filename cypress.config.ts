import webpackPreprocessor from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  allowCypressEnv: false,
  video: false,
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: ['.ts', '.js'],
            },
            module: {
              rules: [
                {
                  test: /\.tsx?$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: 'esbuild-loader',
                      options: {
                        target: 'es2015',
                      },
                    },
                  ],
                },
              ],
            },
          },
        })
      );
    },
  },
});
