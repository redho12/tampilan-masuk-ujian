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
          { No: 1, Soal: 'Seorang peneliti telah menyelesaikan penelitiannya dengan judul "Kesadaran Masyarakat Kompleks Perkotaan terhadap Lingkungan melalui Pengolahan Sampah Terpadu". Apabila hasil penelitian tersebut dipublikasikan kepada masyarakat, manfaat yang diperoleh adalah ….' },
          { No: 2, Soal: 'Kemudahan masyarakat memesan tiket transportasi secara online berbeda dengan kondisi beberapa tahun sebelumnya di mana masyarakat harus memesan tiket sarana transportasi melalui loket secara langsung. Dampak positif gejala sosial tersebut adalah ….' },
          { No: 3, Soal: 'Diketahui  lima  orang  bersaudara  dengan selisih umur  yang sama. Anak yang termuda berusia 13 tahun dan yang tertua 33  tahun. Jumlah usia mereka seluruhnya adalah ....'},
          { No: 4, Soal: 'Pada tahun 2018 lalu, terjadi gelombang tinggi di beberapa perairan Indonesia, yaitu pesisir barat Pulau Sumatra, pesisir selatan Pulau Jawa, dan pesisir selatan Kepulauan Nusa Tenggara. Ketinggian gelombang ini berkisar antara 1,25 m – 6,0 m. Gelombang tinggi ini disebabkan oleh adanya fenomena Mascarene High, yaitu kondisi tekanan udara yang tinggi di wilayah Samudra Hindia, tepatnya di sisi barat Benua Australia. Tekanan udara yang tinggi ini menyebabkan peningkatan pada kecepatan angin yang berpengaruh terhadap ketinggian gelombang laut. Kasus pada soal tersebut tepat dikaji dengan menggunakan prinsip geografi, yaitu….'},
          { No: 5, Soal: 'Inflasi dapat menjadi salah satu indikator makro ekonomi yang terpengaruh akibat perubahan anggaran dan belanja pemerintah. Pengaruh yang tercipta ini disebut sebagai pengaruh pada sektor ….'},
          { No: 6, Soal: 'Koperasi simpan pinjam Seroja Abadi pada 2018 memperoleh SHU Rp60.000.000,00, penjualan koperasi Rp72.000.000,00, simpanan pokok Rp18.000.000,00, simpanan wajib Rp30.000.000,00. Wafa seorang anggota koperasi tersebut memiliki simpanan sukarela Rp300.000,00, simpanan pokok Rp500.000,00, dan simpanan wajib Rp2.000.000,00. Sementara itu, pembelian Wafa di koperasi sebesar Rp700.000,00. Alokasi SHU meliputi jasa simpanan 40%, jasa usaha 30%, cadangan koperasi 20%, dan jasa Pendidikan 10%. Maka, SHU yang diterima Wafa adalah ….'},
          { No: 7, Soal: 'Penuturan dari seorang pelaku sejarah disebut sebagai sumber lisan atau istilah lain yang dinamakan dengan …'}
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