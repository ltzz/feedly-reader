<template>
  <div id="app">
    <div class="ContentWrapper">
      <div
        class="TestButton_button"
        @click="testSend">
        送受信テストボタン
      </div>
      <div class="Conteiner_container">
        <div class="Conteiner_column -width400">
          <List
            v-if="initialized"
            :items="items"
            :set-webview-url="setWebviewUrl" />
        </div>
        <div class="Conteiner_column -webview">
          <WebViewWrapper
            :url="webviewUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import WebViewWrapper from './components/WebViewWrapper.vue'

export default {
  name: 'App',
  components: {
    List,
    WebViewWrapper
  },
  data() {
    return {
      items: (() => [])(),
      initialized: false,
      webviewUrl: 'about:blank'
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
            unread: item.unread,
            url: item.canonicalUrl
          }
        })
        console.log(responseObject)
        console.log(dataItems)
        this.items = dataItems
        this.initialized = true
      })
    },
    setWebviewUrl(url){
      this.webviewUrl = url
    }
  }
}
</script>

<style>

.TestButton_button {
  border: 1px solid #cccccc
}

.ContentWrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.Conteiner_container {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.-width400 {
  width: 400px;
}

.-webview {
  flex-grow: 2;
}

.Conteiner_column {
  flex-direction: column;
  align-items: stretch;
}

@media screen and (max-width: 767px) {
  .Conteiner_column {
    flex-direction: row;
  }
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
