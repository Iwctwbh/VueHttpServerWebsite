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
    import { reactive } from 'vue'

    // do not use same name with ref
    const form = reactive({
        username: '',
        password: '',
        port: '',
        ipaddress: ''
    })

    const submitForm = () => {
        let s_Url = 'http://' + form.ipaddress + ':' + form.port + '/vueWebServer'
        fetch(s_Url,
            {
                method: 'POST',
                body: JSON.stringify({
                    'UserName': form.username,
                    'Password': form.password,
                    'IPAddress': form.ipaddress,
                    'Port': form.port
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed')
                }
            }).then(data => console.log(data))
        if (res.ok) {
            console.log("2333")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ::v-deep #formLogin .el-form-item__label {
        color: white
    }
</style>
