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
          Already have an account? <span @click="">Login</span>
        </div>
  
        <button type="submit" id="register_button" class="mt-4 btn-pers">
          Register
        </button>
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_2"
        >
        </div>
      </form>
    </div>
</template>

<style src="../assets/form.css"></style>
