# theme_base
Base theme for web projects with SASS.

Use Node 8.11.1 (NPM 5.6.0)
If you are using NVM run `nvm install 8.11.1` and `nvm use 8.11.1`

Run `npm intall` to install all packages needed.

For development run `gulp development`
Development generates css and creates sourcemaps and watches the
directory for changes and recompiles at runtime to simplify development process.
Note: You have to manually refresh the browser to see the changes you've made.

For production run `gulp production`
Production generates minified css and minifies all images.
Use this before deployment.