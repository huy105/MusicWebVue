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
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div class="alternative-option mt-4">
          You don't have an account? <span @click="">Register</span>
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
        </button>
      </form>
    </div>
</template>

<style src="../assets/form.css"></style>
