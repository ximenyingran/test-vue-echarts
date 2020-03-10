<style lang='scss' scoped>
    
</style>

<template>
    <div id="login">
        <div class="login-content-main">
            <template>
                <div class="login-content-main__text">登录</div>
                    <el-form ref="loginForm" :model="form" label-width="55px">
                        <el-form-item label="用户名" prop="username" :rules="[{required: true, message: '请输入用户名'}]">
                            <el-input v-model="form.username" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="password"  :rules="[{required: true, message: '请输入密码'}]">
                            <el-input type="password" v-model="form.password" placeholder="密码区分大小写"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="验证码" prop="code">
                            <el-input v-model="form.code" @keyup.enter.native="login">
                                <template slot="append">
                                    <img :src="codeSrc" class="image-verify-code" :title="codeSrc ? '点击刷新' : ''" @click="changeCode" />
                                </template>
                            </el-input>
                        </el-form-item> -->
                    </el-form>
                <el-button type="primary" style="display: block;width: 100%;" @click="login">登 录</el-button>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                username: null,
                password: null
            }
        }
    },
    mounted () {
        
    },
    methods: {
        login() {
            this.$refs.form.validata((isValid) => {
                if(isValid) {
                    console.log(1111)
                }
            })
        }
    }
}
</script>