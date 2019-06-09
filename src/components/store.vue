<template>
    <div>
      <el-tag>{{lastItem}}</el-tag>

      <template>
        <el-table
          :data="data"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">

              <el-button @click="del_item(scope.$index)">删除</el-button>
              <el-button @click="add_item(scope.row)">增加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

    </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  import {ADD_ITEM,DEL_ITEM} from '../store/constants'

  export default {
    name: "store",
    data() {
      return {

      }
    },

    methods:{
      ...mapActions([ADD_ITEM,DEL_ITEM]),
    },

    computed:{
      ...mapState(['data']),
      ...mapGetters(['lastItem']),
    }
  }
</script>

<style scoped>

</style>
