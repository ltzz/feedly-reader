<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div
      class="TestButton_button"
      @click="testSend">
      送受信テストボタン
    </div>
    <List
      v-if="initialized"
      :items="items" />
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
  data() {
    return {
      items: (() => [])(),
      initialized: false
    }
  },
  computed: {
  },
  methods: {
    testSend(){
      // FIXME: 暫定対応 https://github.com/electron/electron/issues/24005#issuecomment-643705734
      const {ipcRenderer} = window.require('electron')
      this.initialized = false
      ipcRenderer.send('asynchronous-message')

      ipcRenderer.on('asynchronous-reply', (e, data) => {
        const responseObject = JSON.parse(data)
        if (responseObject === null) return
        const dataItems = responseObject.items.map(item => {
          return {
            website: item.origin.title,
            title: item.title,
            unread: item.unread
          }
        })
        console.log(responseObject)
        console.log(dataItems)
        this.items = dataItems
        this.initialized = true
      })
    }
  }
}
</script>

<style>

.TestButton_button {
  border: 1px solid #cccccc
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
