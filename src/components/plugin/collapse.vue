<template>
  <Collapse simple>
    <Panel :name="index+''" v-for="(item,index) in list" :key="index">
      {{item.name}}
      <p slot="content">
        <CellGroup>
          <Cell :title="item.content" />
          <Cell :title="item.content" />
        </CellGroup>
      </p>
    </Panel>
  </Collapse>
</template>

<script>
  export default {
    name: "collapse",
    props:{
      list:Array,
    }
  }
</script>

<style scoped>

</style>
