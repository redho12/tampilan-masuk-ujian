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
          { No: 1, Soal: 'Allah memiliki sifat Al Karim, artinya Allah Maha...' },
          { No: 2, Soal: 'Allah memiki sifat Al Karim, yang tercantum dalam surah....' },
          { No: 3, Soal: 'Allah memiliki sifat Al Matin, artinya Allah Maha....'},
          { No: 4, Soal: 'Allah memiliki sifat Al Matin, yang tercantum dalam surath..'},
          { No: 5, Soal: 'Salah satu Asmaul Husna adalah Al Akhir yang artinya adalah....'},
          { No: 6, Soal: 'Ketika hendak berpakaian, maka mulailah dengan bagian tubuh sebelah....'},
          { No: 7, Soal: 'Bagian tubuh yang tidak boleh diperlihatkan menurut ajaran Islam disebut....'}
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