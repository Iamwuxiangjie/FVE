<template>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span v-html="title"></span><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <template v-for="item in showList">
            <el-dropdown-item @click.native="click(item)">
              <span v-html="item[text]"></span>
            </el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
      <slot name="input"></slot>
    </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {isEmpty} from "../js/StringUtils";

  export default {
    name: "dropdown",
    props: {
      text: String,
      list: Array,
      clickChange: Function,
      url: String,
      method: String,
    },
    data() {
      return {
        title: '',
        showList: [],
      }
    },
    methods: {
      init: function () {
        this.tryInitStatic();
        this.tryInitDynamic();
        this.title = this.showList[0][this.text];
      },
      tryInitStatic: function () {
        this.showList = this.list;
      },
      tryInitDynamic: function () {
        if (isEmpty(this.url)) {
          return false;
        }
        if (isEmpty(this.method)) {
          return false;
        }
        console.log('url:' + this.url);
        console.log('method:' + this.method);
        //操作
        this.showList = [{
          text: '请选择远程章节',
          id: -1,
        },
          {
            text: '远程第一章',
            id: 0,
          },
          {
            text: '远程第二章',
            id: 1,
          },];
        const result=this.showList.find(item=>{
          return item.id===1;
        });
        console.log(JSON.stringify(result));
      },
      click: function (item) {
        this.title = item[this.text];
        //this.clickChange(item)
        console.log('publish:'+JSON.stringify(item));
        PubSub.publish('testdropdown',item);
      },
    },
    created: function () {
      this.init();
    }

  }
</script>

<style scoped>

</style>
