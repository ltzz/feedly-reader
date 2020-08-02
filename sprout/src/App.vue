<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div @click="testSend">
      送受信テスト
    </div>
    <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    List
  },
  computed: {

  },
  methods: {
    testSend(){
      // FIXME: 暫定対応 https://github.com/electron/electron/issues/24005#issuecomment-643705734
      const {ipcRenderer} = window.require('electron')
      ipcRenderer.send('asynchronous-message')

      ipcRenderer.on('asynchronous-reply', (e, data) => {
        const responseObject = JSON.parse(data)
        if (responseObject === null) return
        console.log(JSON.parse(data).items.map(item => item.title))
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
