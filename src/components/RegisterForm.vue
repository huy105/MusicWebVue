<template>
    <div class="container-form">
      <form @submit.prevent="">
        <h2 class="mb-3">Register</h2>
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
          <label for="email">User name</label>
          <input
            class="form-control"
            type="text"
            name="user"
            placeholder="user_name"
            v-model="userNameInput"
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
          Already have an account? <span @click="changeToLogin">Login</span>
        </div>
  
        <button type="submit" id="register_button" class="mt-4 btn-pers" @click="register">
          Register
        </button>
        <div class="notification mt-4">{{ showMess }}</div>
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_2"
        >
        </div>
      </form>
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios'

    const registerRouter = 'http://localhost:8000/auth/register'
    const router = useRouter();
    const emailInput = ref(null);
    const passwordInput = ref(null);
    const userNameInput = ref(null);
    const showMess = ref(null);
    var response = null

    async function register() {
      try {
        const requestData = {
          username: userNameInput.value,
          email: emailInput.value,
          full_name: "",
          password: passwordInput.value,
        };

        response = await axios.post(registerRouter, requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data != null) {
          router.push('/login')
        }

      } catch (error) {
        showMess.value = error.response.data.detail
      }
    }
  
    function changeToLogin() {
      router.push('/login')
    }
</script>
<style src="../assets/form.css"></style>
