const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  resolve: {
    alias: {
      'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api'
    }
  }
,  
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json']
    })
  ]
};



