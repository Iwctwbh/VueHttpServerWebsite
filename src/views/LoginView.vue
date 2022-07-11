<template>
    <div class="divLogin" style=" display: flex; flex-direction: column; align-items: center; background-color: #66ccff80">
        <h1>Login</h1>
        <div style="max-width: 90%; width: 500px">
            <el-form id="formLogin" :model="form" label-width="120px">
                <el-form-item label="UserName">
                    <el-input placeholder="Please input username" v-model="form.username" />
                </el-form-item>

                <el-form-item label="Password">
                    <el-input type="password" placeholder="Please input password" v-model="form.password" />
                </el-form-item>

                <el-form-item label="IP">
                    <el-col :span="12">
                        <el-input v-model="form.ipaddress" />
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Port">
                            <el-input v-model="form.port" />
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)" style="flex: 1">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import { login } from '../services/user/index'
    import { sha256 } from '../utils/hash'
    import { useAppStore } from '../stores/app'

    const appStore = useAppStore()

    const loading = ref(false)

    // do not use same name with ref
    const form = reactive({
        username: '',
        password: '',
        port: '',
        ipaddress: ''
    })

    //const submitForm = () => {
    //    let s_Url = 'http://' + form.ipaddress + ':' + form.port + '/vueWebServer'
    //    const res = fetch(s_Url,
    //        {
    //            method: 'POST',
    //            body: JSON.stringify({
    //                'UserName': form.username,
    //                'Password': form.password,
    //                'IPAddress': form.ipaddress,
    //                'Port': form.port
    //            }),
    //            headers: {
    //                'Content-Type': 'application/json'
    //            }
    //        }).then(response => {
    //            if (response.ok) {
    //                return response.json();
    //            } else {
    //                throw new Error('Failed')
    //            }
    //        }).then(data => console.log(data))
    //    if (res.ok) {
    //        console.log("2333")
    //    }
    //}

    const submitForm = async () => {
        loading.value = true

        try {
            //const token = await executeRecaptcha!('login')

            // 登录
            const res = await login(form.username, await sha256(form.password), "")
            appStore.user = ""

            console.log({
                message: '登录成功',
                timeout: 3000
            })

            console.log(res)

            // 跳转首页或者来源路由
            //let to: RouteLocationRaw = { name: 'Home' }

            //try {
            //    const from = route.query.from as string | undefined
            //    from && (to = decodeURIComponent(from))
            //} catch (e) {
            //    // ignore
            //}

            //await router.replace(to)
        } catch (e) {
            //if (e?.target?.localName === 'script') {
            //    $q.notify({
            //        type: 'negative',
            //        message: '加载reCAPTCHA服务失败，请检查网络并刷新网页重试'
            //    })
            //} else {
            //    $q.notify({
            //        type: 'negative',
            //        message: getErrMsg(e)
            //    })
            //}
        }

        loading.value = false
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ::v-deep #formLogin .el-form-item__label {
        color: white
    }
</style>
