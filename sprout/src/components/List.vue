<template>
  <div>
    <div
      v-for="(key, index) in list"
      :key="index"
      class="ListBox_Item">
      {{ list[index] }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  computed: {
    list: () => {
      return ['aaa', 'bbb']
    }
  }
}
</script>

<style>
.ListBox_Item {
    border: solid #cccccc;
    border-width:1px 1px 0px 1px;
    height: 80px;
}
.ListBox_Item:last-child {
    border-width:1px 1px 1px 1px;
}
</style>
