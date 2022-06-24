<template>
  <v-container class="shadow p-3 mb-5 bg-body rounded">
    <v-layout wrap style="margin-top: 70px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark text-center"><strong>Welcome</strong></h2>
        <v-card>
          <v-col md="12">
            <v-row>
              <v-col md="12">
                <v-text-field label="Nama Lengkap"> </v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Password" type="password"> </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12">
            <v-row>
              <v-col md="12">
                <v-btn block="" color="primary" @click="redirectLogin()">
                  Login</v-btn
                >
              </v-col>

              <v-col md="12">
                <v-btn block color="primary" @click="redirectDaftar()">
                  Daftar
                </v-btn>
              </v-col>

              <v-col md="12">
                <p>
                  Lupa Password ?<router-link to="lupa"
                    >Klik Disini!</router-link
                  >
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    redirectDaftar() {
      this.$router.push("/daftar");
    },
    redirectLogin() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
#app{
  background-image:
    url("../assets/images/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>