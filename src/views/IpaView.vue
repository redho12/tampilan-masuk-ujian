<template>
  <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon 
        icon="arrow-left"
        aria-hidden="true"
      ></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Soal</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <div>
                  <b-table striped hover :items="items"></b-table>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="container">
      <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Jawaban</h2>
        <v-card>
          <v-col>
            <v-row>
                 <v-col md="12">
           <v-text-field outline label="No.1" type="text">
                </v-text-field>

                <v-text-field outline label="No.2" type="text">
                </v-text-field>

                <v-text-field outline label="No.3" type="text">
                </v-text-field>

                <v-text-field outline label="No.4" type="text">
                </v-text-field>

                <v-text-field outline label="No.5" type="text">
                </v-text-field>

                <v-text-field outline label="No.6" type="text"> 
                </v-text-field>

                <v-text-field outline label="No.7" type="text"> 
                </v-text-field>
                <div class="card-body">
              <b-button size="sm " @click="redirectKirim()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon> Kirim Jawaban
              </b-button>
            </div>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
      return {
        items: [
          { No: 1, Soal: 'Gen homozigot dapat menyebabkan kematian...' },
          { No: 2, Soal: 'Wanita buta warna menikahi pria buta, jika mereka punya anak ada kemungkinan...' },
          { No: 3, Soal: 'Mutasi dapat terjadi karena faktor-faktor yang mempengaruhinya...'},
          { No: 4, Soal: 'Jika ada pengganti guanin dengan basa sitosin dalam basa nitrogen dari komponen AND, terjadi mutasi.'},
          { No: 5, Soal: 'Seorang pasien yang menjalani terapi x-ray di lengan atas. Ketika perubahan genom dalam sel yang termasuk jenis mutasi...'},
          { No: 6, Soal: 'Jika kodon yang terbentuk memiliki urutan SAG AG SAG AGS AGUA AAG, maka antikodon yang diperlukan untuk terjemahan adalah...'},
          { No: 7, Soal: 'Kehadiran perubahan genetik dari radiasi adalah contoh dari proses....'}
        ]
      }
    },
  methods: {
    redirectBack3() {
      this.$router.push("/home");
    },
    redirectKirim() {
      this.$router.push("/Kirim");
    },
  },
};
</script>

<style>
</style>