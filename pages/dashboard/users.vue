<template>
  <div>
    <UtilsSkeleton1 v-if="loader" :numbers="10"></UtilsSkeleton1>
    <div v-else>
      <div class="q-pa-md">
        <q-table
          title="Users"
          :rows="rows"
          :columns="columns"
          row-key="name"
          @row-click="SelectRow"
          :filter="filter"
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
    <q-dialog
      v-model="viewProfile"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-pt-none">
          <DashboardProfileVew
            :userData="dform.userData"
            :transactions="dform.transactions"
            :wallettransactions="dform.walletTrans"
          ></DashboardProfileVew>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="spinner">
      <div class="flex bg-white p-5 justify-center items-center">
        <img width="100" src="@/assets/img/loading.gif" alt="" />
      </div>
    </q-dialog>
  </div>
</template>

<script>
let nuxt;
let store;
let axios;
export default {
  setup() {
    definePageMeta({
      layout: "admin",
    });
  },
  data: () => ({
    userData: [],
    dform: {},
    viewProfile: false,
    maximizedToggle: true,
    filter: "",
    userCount: 0,
    loader: true,
    loading: false,
    spinner: false,
  }),
  methods: {
    async GetUsers() {
      let userCred = await TokenGetter();
      
      const res = await axios.get(`/api/admin/users?id=${userCred.uid}`, {
        headers: {
          Accept: "application/json",
          Authorization: userCred.token,
        },
      });
      let data = res.data;
      this.userData = data.usersData.value;
      this.userCount = data.usersCount.value;
      console.log(this.userData);
      this.loader = false;
      try {
      } catch (err) {
        console.log(err);
      }
    },
    async SelectRow(evt, row, index) {
      try {
        this.spinner = true;
        this.dform["userData"] = row;
        let userCred = await TokenGetter();
        const res = await axios.post(
          `/api/admin/users/transactions?id=${userCred.uid}`,
          { uid: row.docid },
          {
            headers: {
              Accept: "application/json",
              Authorization: userCred.token,
            },
          }
        );
        let data = res.data;
        this.dform["transactions"] = data.usersTransactions.value || [];
        this.dform["walletTrans"] = data.usersWalletTransactions.value || [];
        this.spinner = false;
        this.viewProfile = true;
      } catch (err) {
        ShowSnack("Error Getting User Info", "negative");
        console.log(err);
      }
    },
  },
  computed: {
    rows() {
      return this.userData.map((v) => ({ ...v }));
    },
    columns() {
      let cols = [];
      for (let key in this.userData[0]) {
        if (
          key != "passwd" &&
          key != "id" &&
          key != "category" &&
          key != "img" &&
          key != "CreatedAt"
        ) {
          cols.push({
            name: key,
            required: true,
            label: key == "balance" ? `(N) ${key}` : key,
            field: key,
            sortable: true,
          });
        }
      }

      return cols;
    },
  },
  mounted() {
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
    this.GetUsers();
  },
};
</script>

<style></style>
