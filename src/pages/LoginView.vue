<template>
  <div class="divLogin" style="display: flex; flex-direction: column; align-items: center; background-color: #cce8cf">
    <h1>Login</h1>
    <div style="max-width: 90%; width: 500px">
      <q-form id="formLogin" :model="form">
        <q-input label="UserName" v-model="form.username" />

        <q-input type="password" label="Password" v-model="form.password" />
        <div class="row">
          <q-col class="col-6">
            <q-input label="IP" v-model="form.ipaddress" />
          </q-col>
          <q-col class="col-6">
            <q-input label="Port" v-model="form.port" />
          </q-col>
        </div>

        <div class="row" style="padding-top: 10px">
          <q-btn class="col" label="Submit" type="" color="primary" @click="_login">
            <q-icon right size="24px" :name="icon.mdiSend" />
          </q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { icon } from 'assets/icon'
  import { reactive, ref } from 'vue'
  import { login } from 'src/services/user'
  import { sha256 } from 'src/utils/hash'

  const loading = ref(false)

  // do not use same name with ref
  const form = reactive({
    username: '',
    password: '',
    port: '',
    ipaddress: ''
  })

  const _login = async () => {
    console.log(2333)
    loading.value = true

    // 登录
    const [, user] = await login(form.username, await sha256(form.password), '')
    appStore.user = user

    $q.notify({
      message: '登录成功',
      timeout: 3000
    })

    loading.value = false
  }
</script>

<style scoped lang="scss"></style>
