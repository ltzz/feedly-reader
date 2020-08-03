<template>
  <div class="WebView_Wrapper">
    <webview
      id="webview"
      :src="url"
      class="WebView" />
  </div>
</template>

<script>

export default {
  name: 'WebViewWrapper',
  props: {
    url: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      webviewDom: null
    }
  },
  watch: {
    url: function() {
      this.reload()
    }
  },
  mounted() {
    this.webviewDom = document.getElementById('webview')
  },
  methods: {
    reload: function () {
      this.webviewDom.reload()
    }
  }
}
</script>

<style>

.WebView {
    width: 100%;
    height: 100%;
}

.WebView_Wrapper {
    height: 100%;
}

</style>