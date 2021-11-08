# theme_base
Base theme for web projects with SASS. 
Created with best practices from SMACSS and BEM for a theme as modular as possible.
Please read about the "frameworks" above to get a basic understanding of used folderstructure and best practices.

For usage you will need Node 8.11.1 (NPM 5.6.0)
If you are using NVM run following commands
`nvm install 8.11.1` and `nvm use 8.11.1`.

Run `npm install` to install all packages needed.

For development run `gulp development`
Development generates css and creates sourcemaps and watches the
directory for changes and recompiles at runtime to simplify development process.
Note: You have to manually refresh the browser to see the changes you've made.

For production run `gulp production`
Production generates minified css and minifies all images.
Use this before deployment.



//
You can take a look at the running project on github pages here: https://bwons.github.io/theme_base/
