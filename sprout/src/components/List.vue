<template>
  <div>
    <div
      v-for="(key, index) in unreadItems"
      :key="index"
      class="ListBox_Item"
      @click="setWebviewUrl(unreadItems[index].url)">
      {{ unreadItems[index].website }} - {{ unreadItems[index].title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    items: {
      required: true,
      type: Array
    },
    setWebviewUrl: {
      required: true,
      type: Function
    }
  },
  computed: { 
    unreadItems(){
      return this.items.filter(
        item => item.unread
      )
    }
  }
}
</script>

<style>
.ListBox_Item {
    border: solid #cccccc;
    border-width:1px 1px 0px 1px;
    height: 50px;
    font-weight: 500;
}
.ListBox_Item:last-child {
    border-width:1px 1px 1px 1px;
}
</style>
