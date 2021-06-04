<template>
  <div>
    <form @submit.prevent="formSubmit">
      <label>First name:</label><br />
      <input type="text" /><br />
      <label>Last name:</label><br />
      <input type="text" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    async formSubmit() {
      // this.$recaptchaInstance.hideBadge();
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("submit");
      console.log(token);
      // let token1 = null;
      let headers = new Headers();
      headers.append("Access-Control-Allow-Origin", "http://localhost:8080");
      headers.append("Access-Control-Allow-Credentials", "true");
      // Access-Control-Allow-Origin:  http://127.0.0.1:3000
      headers.append("Access-Control-Allow-Methods", "POST");
      headers.append(
        "Access-Control-Allow-Headers",
        "Content-Type",
        "Authorization"
      );
      headers.append("Access-Control-Allow-Origin", " *");
      headers.append("GET", "POST", "OPTIONS");
      headers.append("Content-Type", "application/json"),
        headers.append("charset", "utf-8");
      if (token) {
        // console.log(token);
        fetch(
          ` https://www.google.com/recaptcha/api/siteverify?secret=<key>&response=${token} `,
          {
            method: "POST",
            headers: headers,
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      // Do stuff with the received token.
    },
  },
};
</script>

<style>
</style>