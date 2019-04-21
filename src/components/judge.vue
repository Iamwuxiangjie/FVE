<template>
  <div style="width:980px;" ref="mparent">

    <!--<el-container>
      <el-header>
        <el-row>
          <el-col :span="4" style="line-height: 70px;text-align: left">
            课程评价
          </el-col>
          <el-col :span="4" style="line-height: 70px;text-align: left">
            管理老师: 张建飞
          </el-col>
        </el-row>
      </el-header>

      <hr style="width:96%;border: 1px solid #eee">

      <el-header>
        <el-row style="padding:20px 0px 20px 0px ">
          <el-col :span="24" style="line-height: 60px;text-align: left">
            学习进度
          </el-col>
          <el-col :span="24" style="line-height: 60px;">

            <el-col :span="12" style="padding:20px;border: 1px solid #eee;height:295px">
              <el-col :span="24" style="line-height: 65px;">
                <el-progress type="circle" :percentage="52" status="text">
                  1/2周
                </el-progress>
              </el-col>
              <el-col :span="24" style="line-height: 36px;">
                开课进度
              </el-col>
              <el-col :span="24" style="line-height: 38px;">
                开课时间: 2019-04-18 至 2019-05-01
              </el-col>
            </el-col>


            <el-col :span="12" style="padding:20px;border: 1px solid #eee;height:295px">
              <el-col :span="24" style="line-height: 65px;">
                <el-progress type="circle" :percentage="0" status="text">
                  0%
                </el-progress>
              </el-col>
              <el-col :span="24" style="line-height: 36px;">
                <el-button size="mini">开始学习</el-button>
              </el-col>
            </el-col>
          </el-col>
        </el-row>

        <el-row style="padding:20px 0px 20px 0px ">
          <el-col :span="24" style="line-height: 60px;text-align: left">
            学习统计
          </el-col>
          <el-col :span="24">

            <el-col :span="24" style="border: 1px solid #eee;height:243px">
              <el-col :span="24" style="line-height: 27px;margin:20px">
                学习记录
              </el-col>
              <el-col :span="24" style="padding:20px">
                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已观看视频</el-col>
                  <el-col :span="18">00:00:00</el-col>
                </el-col>
                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已提交考试</el-col>
                  <el-col :span="18">
                    <el-progress :percentage="70"  style="margin-top:15px"></el-progress>
                  </el-col>
                </el-col>

                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已发表帖子</el-col>
                  <el-col :span="18">0条</el-col>
                </el-col>
                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已提交作业</el-col>
                  <el-col :span="18">
                    <el-progress :percentage="70"  style="margin-top:15px"></el-progress>
                  </el-col>
                </el-col>

                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已记录笔记</el-col>
                  <el-col :span="18">0条</el-col>
                </el-col>
                <el-col :span="12" style="line-height: 50px;">
                  <el-col :span="6">已提交测验</el-col>
                  <el-col :span="18">
                    <el-progress :percentage="70"  style="margin-top:15px"></el-progress>
                  </el-col>
                </el-col>
              </el-col>
            </el-col>

            <el-col :span="24" style="border: 1px solid #eee;height:294px">
              <el-col :span="24" style="line-height: 27px;margin:20px;">
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="16">我的成绩</el-col>
                <el-col :span="4" style="font-size: 10px;text-align: left">
                  <a href="#" >查看详情</a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a href="#">考核标准</a>
                </el-col>
              </el-col>
              <el-col :span="24" style="padding:20px">
                <el-col :span="6" style="height: 226px;">
                  <el-progress type="circle" :percentage="0" status="text">0.00分</el-progress>
                </el-col>
                <el-col :span="6" style="height: 226px;">
                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#0b5d91"></i>
                      视频观看
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>

                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#58fffe"></i>
                      作业
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>

                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#53fd85"></i>
                      测验
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>
                </el-col>

                <el-col :span="6" style="height: 226px;">

                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#e1fd53"></i>
                      考试
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>

                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#fd7b43"></i>
                      讨论发帖
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>

                  <el-col :span="24" style="line-height: 55px">
                    <el-col :span="12" style="text-align: left">
                      <i class="el-icon-caret-right" style="color:#fc749d"></i>
                      笔记
                    </el-col>
                    <el-col :span="12">0分</el-col>
                  </el-col>
                </el-col>
                <el-col :span="6" style="height: 226px;">
                  各项成绩得分为当前得分，每天00:00会更新一次，最终成绩，依照教师制定的考核标准为准。
                </el-col>

              </el-col>
            </el-col>


          </el-col>
        </el-row>
      </el-header>

    </el-container>-->
    <plugin_input_number ref="plugin_input_number"></plugin_input_number>
  <el-button @click="debuggerMethod">debugger</el-button>
    <div class="red">
      datetime:{{datetime}}
    </div>
  </div>
</template>

<script>
  import '@/components/css/judge.css'

  import $COMMON_METHODS from '@/components/javascript/common.js'

  import input_number from '@/components/plugin/input_number'

  export default {
      name: "judge",
      data() {
        return {
          name:'judge',
          data_of_plugin_input_number:{

          },
          datetime:'',
        }
      },
      methods:{
        init:function () {
          this.data_of_plugin_input_number=this.$refs.plugin_input_number.$data;
        },
        debuggerMethod:function () {
          this.datetime=$COMMON_METHODS.dateForat(this.datetime);
        }
      },
      components:{
        plugin_input_number:input_number,
      },
      mounted:function () {
        this.init();
      },
  }
</script>

<style scoped>

</style>
