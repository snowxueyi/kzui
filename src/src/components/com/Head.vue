<style scoped>
.lqbui-main-header * {
  list-style: none;
  font-size: 14px;
}
.lqbui-main-header {
  background-color: #0d9ecf;
  height: 50px;
  box-shadow: 12px 3px 5px rgba(1, 1, 1, 0.2);
  position: fixed;
  width: 100%;
  z-index: 667;
  top: 0px;
}

.lqbui-logo {
  display: block;
  float: left;
  padding: 12px 20px;
  background-color: #0d9ecf;
}
.lqbui-nav-list {
  float: left;
  position: relative;
}
.lqbui-nav-list a {
  color: #ffffff;
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
}
.lqbui-nav-list a span {
  padding: 0 0 0 5px;
}
.lqbui-nav-list a cite {
  border: 4px solid red;
  border-radius: 4px;
  position: absolute;
  z-index: 1000;
  margin-top: 15%;
}
.lqbui-nav-list .bottomLine::after {
  content: "";
  bottom: 0;
  position: absolute;
  top: auto;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #0087b4;
}
.lqbui-logo .lqbui-logo-lg img {
  vertical-align: middle;
}
.lqbui-navbar-custom-menu {
  float: right;
}

.lqbui-nav li {
  float: right;
}
.lqbui-user-menu{
  position: relative;
}
.lqbui-nav li.training{
  color: #fff;
  margin-right: 10px;
}
.lqbui-nav li a{
  text-decoration: none;
  cursor: pointer;
}
.lqbui-user-menu a {
  color: #333;
  line-height: 20px;
  cursor: pointer;
  padding: 15px;
  display: block;
  text-decoration: none;
}
.lqbui-user-menu a.loginout{
  color: #fff;
}
.lqbui-user-menu .icon-write {
  color: #fff;
}
.lqbui-user-menu em{
  list-style: none;
  font-style: normal;
}
.lqbui-user-menu .layui-nav-child {
    /* display: none; */
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 999;
    line-height: 36px;
    padding: 5px 0;
    min-width: 100%;
}
.lqbui-user-menu .layui-nav-child dd{
    background-color: #fff;
}
.lqbui-user-image {
  float: left;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: -2px;
}
</style>
<template>
  <header class="lqbui-main-header">
            <a href="/" class="lqbui-logo">
                <span class="lqbui-logo-lg">
                    <img src="http://dgj2test.kzmall.cc/statics/images/dgjlogo.png?ver=1523585724" title="logo">
                </span>
            </a>
            <li :key="index" v-for="(item,index) in navList" class="lqbui-nav-list" :style="navListStyle[index]" :value="item" @click='setListItem(index)' @mouseover='hover(index)' @mouseleave='leave(index)'><a :class="flag[index]=='true' ?'bottomLine':''"><i :class="'lqbui-nav-icon icon iconfont '+icon[index]"></i><span>{{item.content}}</span><cite v-show="item.notice"></cite></a></li>
            <div class="lqbui-navbar-custom-menu">
                  <ul class="lqbui-nav lqbui-navbar-nav">
                      <li class="lqbui-user-menu" @mouseover="loginOver"  @mouseout="loginOut">
                          <a @click="loginout" class="loginout" :style="topStyle">
                              <img src="http://dgj2test.kzmall.cc/statics/images/0.jpg?ver=1524558995" class="lqbui-user-image" alt="User Image" style="margin-right:20px;">
                              <span class="hidden-xs" style="margin-right:10px;">浙江金华服务站</span>
                              <span class="lqbui-nav-icon icon iconfont icon-xiajiantou icon-write"></span>
                          </a>
                          <dl class="layui-nav-child layui-anim layui-anim-upbit" :style="dlStyle" @mouseover="loginOver" @mouseout="loginOut">
                            <dd :style="stationStyle" @mouseleave="stationOut" @mouseenter="stationOver">
						                  <a href="javascript:void(0);" id="message" rel="pageTab" tabid="message" right="MES_QUERY">
							                  <i class="lqbui-nav-icon icon iconfont icon-shezhi" aria-hidden="true"></i>
                                <em>站内信</em><span class="messageNum" style="display: none;"></span>
						                  </a>
					                  </dd>
					                  <dd  :style="exitStyle" @mouseleave="exitOut" @mouseenter="exitOver">
						                  <a href="javascript:;" id="signOut" @click="loginout">
							                  <i class="lqbui-nav-icon icon iconfont icon-shezhi" aria-hidden="true"></i>
							                  <em>退出系统</em>
						                  </a>
					                  </dd>
				                  </dl>
                      </li>
                      <li  class="training" style="line-height: 50px;">
                            <!-- <select class="commonInput" v-model="id" @change="setEnterpriseId">
                                <option  :key="index"  v-for="(item, index) in enterpriseList" :value="item.id ">{{item.enterpriseName}}</option>
                            </select> -->
                          <a>
                              <span class="lqbui-nav-icon icon iconfont icon-shezhi icon-write"></span>
                              <span class="hidden-xs" style="margin-right:10px;">培训专栏</span>
                          </a>
                        </li>
                  </ul>
              </div>
           
    </header>
</template>

<script>
import utils from "../../lib/utils.js";
import fn from "../../lib/fn.js";
import Vue from "vue";
export default {
  name:'kz-head',
  data() {
    return {
      id: "",
      navListStyle: [{ "background-color": "#0087b4" }],
      flag: [],
      icon: [
        "icon-gouwuche",
        "icon-zhuangche1",
        "icon-wodedamaijihuo",
        "icon-shezhi"
      ],
      dlStyle:{display:'none'},
      topStyle:{color:'#fff'},
      exitStyle:{'background-color':'#fff'},
      stationStyle:{'background-color':'#fff'}
    };
  },
  watch: {
    faultCom(val, oval) {
      if (val != oval) {
        this.id = val;
      }
    }
  },
  props: [ "faultCom", "navList"],
  methods: {
    loginout(e) {
      e.preventDefault();
      e.stopPropagation();
      utils.removeItem("userInfo");
      alert("退出登录");
    },
    setEnterpriseId(e) {
      this.$emit("changecompont", e.target.value);
    },
    setListItem(index) {
      // this.$emit=("changestyle", e.target.value)
      this.navListStyle = [];
      Vue.set(this.navListStyle, index, { "background-color": "#0087b4" });
      // this.render();
      this.$emit("tab-change", index);
    },
    hover(i) {
      this.flag = [];
      Vue.set(this.flag, i, "true");
    },
    leave(i) {
      Vue.set(this.flag, i, "false");
    },
    loginOver(){
      this.dlStyle={display:'block',color:'#333'};
      this.topStyle={'background-color':'#fff',color:'#333'}
    },
    loginOut(){
      this.dlStyle={display:'none'};
      this.topStyle={'background-color':'#0d9ecf',color:'#fff'}
    },
    exitOut(){
      this.exitStyle={'background-color':'#fff'}
    },
    exitOver(){
      this.exitStyle={'background-color':'#ecf0f5'}
    },
    stationOut(){
      this.stationStyle={'background-color':'#fff'}
    },
    stationOver(){
      this.stationStyle={'background-color':'#ecf0f5'}
    }   
  },
  mounted() {}
};
</script>


