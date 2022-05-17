<template>
    <div class="divLogin" style=" display: flex; flex-direction: column; align-items: center; background-color: #66ccff80">
        <h1>Login</h1>
        <div style="max-width: 90%; width: 500px">
            <el-form id="formLogin" :model="form" label-width="120px">
                <el-form-item label="UserName">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-col :span="12">
                    <el-form-item label="IP">
                        <el-input v-model="form.ipaddress" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Port">
                        <el-input v-model="form.port" />
                    </el-form-item>
                </el-col>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ::v-deep #formLogin .el-form-item__label {
        color: white
    }
</style>
