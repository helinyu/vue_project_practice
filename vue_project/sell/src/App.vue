<template>
  <div id="app">

    <div class="mint-btn">
    按钮的测试：
        <mt-button @click.native="handleClick">按钮</mt-button>
        <mt-button @click="handleClick">按钮1</mt-button>
        <!-- 第一个是vue的事件绑定自定，第二个是因为eleme的库里面已经处理了 -->
    </div>
    <div class="whitespace"></div>
   <div class="mint-btn">
    toast：
        <mt-button @click="handleToast">按钮</mt-button>
        <!-- 第一个是vue的事件绑定自定，第二个是因为eleme的库里面已经处理了 -->
    </div>

    <div class="whitespace"></div>
   <div class="mint-btn">
    Indicator
        <mt-button @click="handleIndicator">按钮</mt-button>
        <!-- 第一个是vue的事件绑定自定，第二个是因为eleme的库里面已经处理了 -->
    </div>
    <div class="whitespace"></div>

<!--     <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore> -->

     <div class="whitespace"></div>

   <div class="mint-btn">
    MessageBox
        <mt-button @click="handleMessageBox">按钮</mt-button>
        <!-- 第一个是vue的事件绑定自定，第二个是因为eleme的库里面已经处理了 -->
    </div>
    <div class="whitespace"></div>
   <!--  <div>
     <ul>
        <li v-for="item in list">
          <img v-lazy="item">
        </li>
      </ul>
    </div> -->
     <!-- lazyload 这个是如何进行使用的 -->
<!-- Range -->

    <!-- <mt-progress :value="20" :bar-height="5"></mt-progress> -->
    <div>
      <mt-progress :value="60" :bar-height='5'>
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>
    </div>

     <div class="whitespace"></div>
    <div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      <!-- 这个也没有显示出来  DatetimePicker-->
      <!-- index List -->
    </div>

    <div class="whitespace"></div>
     <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </mt-palette-button>
    <div class="whitespace"></div>

    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>

    <div class="whitespace"></div>

    <mt-header fixed title="固定在顶部"></mt-header>
        <div class="whitespace"></div>

    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
        <div class="whitespace"></div>

    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="whitespace"></div>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/images/Snip20170318_3.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/images/Snip20170318_3.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/images/Snip20170318_3.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/images/Snip20170318_3.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <div class="whitespace"></div>

    <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <div class="whitespace"></div>
    </div>

    <!-- tab-container -->
    <div>

    这个好像有点问题????
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  <div class="whitespace"></div>

  <div>
    button ：<br/>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <br/>
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    <br/>
    <mt-button disabled>disabled</mt-button>
    <br/>
    <mt-button plain>plain</mt-button>
    <br/>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>
    <br/>
    <mt-button>
      <img src="./assets/images/Snip20170318_3.png" height="20" width="20" slot="icon">
      带自定义图标
    </mt-button>

  </div>
    <div class="whitespace"></div>

    <mt-cell title="标题文字"></mt-cell>
    <mt-cell title="标题文字" to="//github.com" is-link value="带链接"></mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon" src="./assets/images/Snip20170318_3.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
  <mt-cell title="标题" label="描述信息" is-link></mt-cell>

  <div class="whitespace"></div>
    cell-swipe 的内容没有显示出来？？
    <mt-cell-swipe
    title="标题文字"
    :right="[
      {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('delete')
      }
    ]"></mt-cell-swipe>
  <div class="whitespace"></div>
      <mt-spinner type="snake"></mt-spinner>
      <mt-spinner type="double-bounce"></mt-spinner>
      <mt-spinner type="triple-bounce"></mt-spinner>
      <mt-spinner type="fading-circle"></mt-spinner>

      <!-- 或者接受传入类型的序号 -->
      <mt-spinner :type="0"></mt-spinner>
      <mt-spinner :type="1"></mt-spinner>
      <mt-spinner :type="2"></mt-spinner>
      <mt-spinner :type="3"></mt-spinner>

      <mt-spinner color="#26a2ff"></mt-spinner>
      <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
    <mt-spinner color="yellow"></mt-spinner>

  <div class="whitespace"></div>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  <div class="whitespace"></div>
  <!-- 搜索 -->
    <!-- <mt-search v-model="value"></mt-search> -->
  <!--   <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索哈哈">
    </mt-search>
    <mt-search v-model="value" :result.sync="result"></mt-search>
      <mt-search v-model="value">
        <mt-cell
          v-for="item in result"
          :title="item.title"
          :value="item.value">
        </mt-cell>
      </mt-search> -->
  <div class="whitespace"></div>
    <mt-switch v-model="value"></mt-switch>
  <div class="whitespace"></div>
    <mt-checklist
      title="复选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']">
    </mt-checklist>
  <div class="whitespace"></div>

  <div class="whitespace"></div>

<mt-radio
  title="单选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</mt-radio>

  <div class="whitespace"></div>
<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
  <div class="whitespace"></div>
<mt-badge size="small">30</mt-badge>
<mt-badge size="normal">10</mt-badge>
<mt-badge size="large">10</mt-badge>
<mt-badge type="primary">30</mt-badge>
<mt-badge type="error">10</mt-badge>
<mt-badge type="success">10</mt-badge>
<mt-badge type="warning">10</mt-badge>
  <div class="whitespace"></div>

  </div>
</template>

<script>

import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { Loadmore } from 'mint-ui'
// Vue.component(Loadmore.name, Loadmore);
// LoadMore 没有成功  和infinite scroll 的内容
import { MessageBox } from 'mint-ui';
// import { Actionsheet } from 'mint-ui';
// Vue.component(Actionsheet.name, Actionsheet);
// import { Popup } from 'mint-ui';
// Vue.component(Popup.name, Popup);
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);

export default {
  name: 'app',
  data(){
   return {
    active:'tab-container1',
     slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]};
  },
  methods:{
    handleClick:function() {
      this.$toast('hello world!')
    },
    handleToast:function() {
      // Toast("提示信息")
      Toast({
        message:'提示',
        position:'bottom',
        duration:5000,
        iconClass:'icon icon-success',
        className:'style-background'
      });
    },
    handleIndicator:function() {
      // Indicator.open();

      // Indicator.open("加载中...");

      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // });

     Indicator.open("加载中...");
      setTimeout(() => {
        Indicator.close();
      },2000);

    },
    handleMessageBox:function() {
      // MessageBox('提示', '操作成功');

      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      });

// 此外，MessageBox 还提供了 alert、confirm 和 prompt 三个方法，它们都返回一个 Promise
        // MessageBox.alert('message', 'title');
        // MessageBox.confirm('message', 'title');
        // MessageBox.prompt('message', 'title');

        // MessageBox.alert('操作成功').then(action => {
        //     // console.log("success");
        // });
        // MessageBox.confirm('确定执行此操作?').then(action => {
        //     // console.log("success");
        // });
        // MessageBox.prompt('请输入姓名').then(({ value, action }) => {
        //   console.log("success");
        // });
        // 这里应该有交互的动作方法

    },
    onValuesChange(picker,values) {
       if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    main_log(val) {
      console.log('main_log', val);
    },
    sub_log(val) {
      console.log('sub_log', val);
      this.$refs.target_1.collapse();
    }

  }
}

</script>

<style>

@import "./assets/css/mint-ui@2.2.1.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.whitespace {
  height: 2px;
  background-color: purple;
}

.style-background {
  background-color: yellow;
  color: red;
}
</style>
