<template>
  <div class="home">
     <div class="shadow p-3 mb-5 bg-body rounded">
        <b-button v-b-toggle.sidebar-border>Profile</b-button>
        <b-sidebar
          id="sidebar-border"
          sidebar-class="border-right border-danger"
        >
          <div class="px-3 py-2">
            <v-col md="12">
           <v-text-field outline label="Nama Lengkap" type="text">
                </v-text-field>

                <v-text-field outline label="Password" type="password">
                </v-text-field>

                <v-text-field outline label="Tampat, Tanggal Lahir" type="text">
                </v-text-field>

                <v-text-field outline label="Alamat" type="text">
                </v-text-field>

                <v-text-field outline label="Jenis Kelamin" type="text">
                </v-text-field>

                <v-text-field outline label="No HP" type="text"> </v-text-field>
              </v-col>
            <b-button
                variant="outline-info"
                class="mb-2"
                @click="redirectLogout()"
              >
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
              </b-button>
          </div>
        </b-sidebar>
      </div>
    <div class="container shadow p-3 mb-5 bg-body rounded">
      <div class="text-light text-center">
        <h2><strong>Silahkan Pilihan Ujian</strong></h2>
      </div>
      <div class="row mb-3 text-light">
        <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/buku.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm " @click="redirectIpa()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon> IPA
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/buku.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm" @click="redirectIps()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                IPS
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/buku.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm " @click="redirectAgama()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon> Agama
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "HomeView",
  
  methods: {
    redirectIpa() {
      this.$router.push("/ipa");
    },
    redirectIps() {
      this.$router.push("/ips");
    },
    redirectAgama() {
      this.$router.push("/agama");
    },
    redirectLogout() {
      this.$router.push("/");
    }
  },
};
</script>

<style>
#app {
  font-family: "Comic Neue", cursive;
}
.router-link-exact-active {
  font-weight: bold;
}
</style>