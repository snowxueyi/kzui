<template>
        <span :tabindex="tabindex" @focus="handlerFocus"  class="kz-input-fit" @click="handlerEdit" v-clickoutside="handlerEnd" >
            <span >{{inputValue}}</span>
            <span class="edits" v-show="eidt">
                <input class="kz-edit-input"  ref="sercheInput" @keyup="handlerKeyup"  @change="handlerChange" @keydown="handlerKeydown" v-model="inputValue"  />
            </span>
        </span>
</template>

<script>
import Clickoutside from "../lib/clickoutside";
export default {
  name: "kz-editable-input",
  data() {
    return {
      eidt: false
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  props: {
    value: {},
    tabindex: {
      type: Number,
      default:0
    }
  },
  components: {},
  directives: { Clickoutside },
  mounted() {},
  methods: {
    handlerFocus(e){
      this.handlerEdit();
    },
    eidtCell(){
      this.handlerEdit();
    },
    handlerEdit() {
      this.eidt = true;
      setTimeout(() => {
        this.$refs.sercheInput.focus();
      }, 1);
    },
    handlerEnd() {
      if(this.eidt){
        this.eidt=false;
        this.$emit("end",this);
      }
    },
    handlerChange(e) {
      this.$emit("change", { e: e, handlerEnd: this.handlerEnd });
    },
    handlerKeyup(e) {
      this.$emit("keyup", { e: e, handlerEnd: this.handlerEnd });
    },
    handlerKeydown(e) {
      if (e.code == "Tab") {
       this.handlerEnd() 
      }
      this.$emit("keydown", { e: e, handlerEnd: this.handlerEnd });
    }
  }
};
</script>

<style>
.kz-input-fit {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.kz-input-fit .edits {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.kz-input-fit .edits .kz-edit-input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px 10px;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-color: #409eff;
  text-align:  inherit;
}
</style>
