<template>
  <div class="hello">
    <h2> test element</h2>

    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>

    <div id="idtest">
      dkfjksalfdjkalk
    </div>

    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

    <el-form-item label="密码" prop="pass">
      <el-input id="input-test" type="text" v-model="ruleForm2.pass" placeholder="hahah" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="text" v-model="ruleForm2.checkPass" auto-complete="off" class="numberp"></el-input>
    </el-form-item>

    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>

    </el-form>

    <router-link :to="'Css3'">Css3</router-link>

  </div>
</template>
<!--
<script type="text/javascript">

</script> -->

<script>

//  var input = document.querySelector('#idtest');
//  input.innerHTML = '<span>Here is some new text</span>';
// // Add some CSS to make the text red
//   input.innerHTML += '<style>span { color: red; }</style>';

  // var shadow = document.querySelector('#idtest');
  // shadow.htmlContent = '<span>Here is some new text</span>';
  // Add some text to shadow DOM
  // shadow.innerHTML = '<span>Here is some new text</span>';
  // Add some CSS to make the text red
  // shadow.innerHTML += '<style>span { color: red; }</style>';

export default {
  name: 'hello',
    created: function() {
      // var element = document.getElementById('idtest');
      // console.log(element);
      // element.innerHTML = '<span>aajjajaj</span>';
    },
    mounted:function() {
      // var element = document.getElementById('idtest');
      // console.log(element);
      // element.style.color="red";
      // element.innerHTML = '<p>哈哈哈哈</p>'

      // var ele = document.getElementById('input-test');
      var eles = document.getElementsByClassName('el-input__inner');
      console.log(eles);
      // for (var ele in eles) {
      //    console.log(ele);
      //    ele.style.color="red";
      //
        for(var i=0;i<eles.length;i++){
          console.log(eles[i]);
          var ele = eles[i];
          ele.style.border = "none";
        }
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
       labelPosition: 'right',
          formLabelAlign: {
            name: '',
            region: '',
            type: ''
          },
      ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

}
</script>

<style type="text/css" media="screen">

#idtest {
  /*background-color: red;*/
}

</style>

<style scoped>

.hello input {
  border: none;
}

</style>

<style >

.numberp input {
  border: none;
}

</style>


