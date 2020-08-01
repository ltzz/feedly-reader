module.exports = {  
  module: {  
    rules: [  
      {  
        test: /\.ts$/,  
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        } 
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]  
  },  
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      // 例えばmain.js内で `import Vue from 'vue';` と記述したときの`from vue`が表すファイルパスを指定
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  // プラグインを列挙
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: {
    // - 'pages': './resources/pages/main.js',【①js→tsへ】
    'pages': './main.ts'
  }
}