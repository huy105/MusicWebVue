<template>
  <div class="container-form">
    <form @submit.prevent="">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
          v-model="emailInput"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password"
          v-model="passwordInput"
        />
      </div>
      <div class="alternative-option mt-4">
          You don't have an account? <span @click="changeToRegister">Register</span>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button" @click="login">
        Login
      </button>
      <div class="notification mt-4">{{ showMess }}</div>
    </form>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios'

    const loginRouter = 'http://localhost:8000/auth/login_for_token'
    const router = useRouter();
    const emailInput = ref(null);
    const passwordInput = ref(null);
    const showMess = ref(null);
    var response = null

    async function login() {
      try {
        const formData = new URLSearchParams();
        formData.append('username', emailInput.value);
        formData.append('password', passwordInput.value);

        response = await axios.post(loginRouter, formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.data != null) {
          router.push('/')
        }

      } catch (error) {
        showMess.value = error.response.data.detail
      }
    }

  function changeToRegister() {
    router.push('/register')
  }
</script>

<style src="../assets/form.css"></style>
