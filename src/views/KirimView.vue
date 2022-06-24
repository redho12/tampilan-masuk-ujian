<template>
  <v-container>
    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Terima Kasih Telah Mengikuti Ujian</h2>
        <div class="card-body">
          <b-button size="sm " @click="redirectKeluar()" class="mb-2">
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon> Keluar
          </b-button>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    redirectKeluar() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>