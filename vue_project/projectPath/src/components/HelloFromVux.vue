<template>
  <div>

    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
      <cell title="test_vux_2" value="Cool" is-link></cell>
    </group>

    <group title="test second cell">
      <cell title="Vux" value="Cool" is-link></cell>
      <cell title="test_vux_2" value="Cool" is-link></cell>
    </group>

    <group>
      <x-switch title="Popup address" v-model="show6"></x-switch>
    </group>
    <group>
      <x-address :title="titleAddress" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="地址占用符"></x-address>
    </group>

    <group>
      <x-address :title="dateAddress" :list="addressData" placeholder="请选择日期"></x-address>
    </group>

    <!-- <group>
      <datetime :title="dateTitle" name='datetime-test'></datetime>
    </group> -->
    <group :title="$t('format display value')">
      <datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" :title="$t('Birthday')">
      </datetime>
    </group>

  </div>
</template>

<i18n>
'default format: YYYY-MM-DD':
  zh-CN: 默认格式：YYYY-MM-DD
'format: YYYY-MM-DD HH:mm':
  zh-CN: 格式：YYYY-MM-DD HH:mm
start time:
  zh-CN: 开始时间
Placeholder:
  zh-CN: 提示文字
Please select:
  zh-CN: 请选择
set min-year and max-year:
  zh-CN: 设置开始和结束年份
years after 2000:
  zh-CN: 2000年以后时间
specified template text in Chinese:
  zh-CN: 自定义中文显示模板
show center button and clear the value:
  zh-CN: 显示中间的清除按钮
show center button to set date to today:
  zh-CN: 显示中间的设置日期为今天的按钮
Birthday:
  zh-CN: 生日
Chinese:
  zh-CN: 中文
Click me:
  zh-CN: 点我
custom trigger slot:
  zh-CN: 自定义触发内容
Limit hours:
  zh-CN: 限定小时范围
09-18:
  zh-CN: 工作时间 09-18
set start-date and end-date:
  zh-CN: 设置开始时间和结束日期
'click to change value to: 2017-11-11':
  zh-CN: 设置时间为 2017-11-11
format display value:
  zh-CN: 格式化显示
</i18n>

<script>

//  在日期中是否也有这种方式呢？
import { Datetime, Popup, Group, Cell, XButton, XSwitch, Scroller, Toast, XAddress, ChinaAddressData,Picker } from 'vux'

let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}

export default {
  components: {
   Popup,
    Group,
    Cell,
    XSwitch,
    Scroller,
    Toast,
    XAddress,
    XButton,
    Datetime,
  },
  data () {
    return {
       value1: '2015-11-12',
        show6: true,
 titleAddress: '输入地址',
  dateAddress: '输入时间',
       value6: [],
  addressData: ChinaAddressData,
     dateData:[1,2,3,4,5], // 这里应该实现对应的长度等等
        years: years,
        year1: [''],
    dateTitle:'',
  formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      },

    }
  },
  methods:{
    change (value) {
      console.log('new Value', value)
    },

  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
