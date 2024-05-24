<template>
  <div>
    <UtilsSkeleton1 v-if="loader" :numbers="10"></UtilsSkeleton1>
    <div v-else>
      <div class="q-pa-md">
        <q-table
          title="All GiftCard Orders"
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
      v-model="viewNetwork"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="w-[90%]">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-pt-none">
          <form method="POST" class="w-full">
            <p class="text-lg w-full text-center my-5 font-bold">

              {{ dform.docid }}
            </p>
            <div class="space-y-4">
              <div class="flow-root mt-6">
                <ul class="-my-5 divide-y divide-gray-200">
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">User Id:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.userId }}
                    </p>
                  </li>

                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Category:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.category }}
                    </p>
                  </li>

                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Card Type:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.cardFrom }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Card Gan Number:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.cardEcode }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Card Amount:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      ${{ dform.amount }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Total Payable:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      N{{ dform.totalPayable }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Rate:</p>
                    <p class="text-sm font-bold text-gray-900">
                      N{{ dform.rate }}/$
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Amount Usd:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.s }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      User Comment:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.comment }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <div
                      class="w-full flex mt-2 bg-gray-200 rounded-md justify-center items-center"
                    >
                      <img :src="dform.cardImage" alt="" />
                    </div>
                  </li>

                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Date:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.CreatedAt }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Status:</p>
                    <q-select
                      v-model="dform.status"
                      outlined
                      :options="[
                        'pending',
                        'rejected',
                        'processing',
                        'validated',
                      ]"
                    ></q-select>
                  </li>
                </ul>
              </div>
              <div class="h-36 w-full">
                <textarea v-model="dform.merchantComment" placeholder="Admin Comment" class="px-4 w-full h-full border-2 border-solid  py-4"></textarea>

              </div>
              <div class="q-pa-md">
                <q-toggle
                  @update:model-value="
                    (value, evt) => (dform.validate = value ? 1 : 0)
                  "
                  :label="dform.validate ? 'Validated' : 'Not Validated'"
                  v-model="currActive"
                />
              </div>

              <q-btn
                @click="SaveChanges"
                :loading="loading"
                class="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-mdfocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
              >
                Save Changes
              </q-btn>
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
let nuxt;
let store;
let axios;
export default {
  data: () => ({
    data: [],
    currActive: false,
    count: 0,
    dform: {},
    stats: {},
    viewNetwork: false,
    maximizedToggle: true,
    filter: "",
    loader: true,
    loading: false,
    spinner: false,
    loada: false,
  }),
  methods: {
    async GetNetworks() {
      try {
        let userCred = await TokenGetter();

        const res = await axios.get(
          `/api/admin/services?id=${userCred.uid}&service=GIFTCARDSREQUEST`,
          {
            headers: {
              Accept: "application/json",
              Authorization: userCred.token,
            },
          }
        );
        let data = res.data;

        this.data = data.Data.value;
        this.count = data.Count.value;
        this.loader = false;
      } catch (err) {
        console.log(err);
      }
    },
    async SelectRow(evt, row, index) {
      this.dform = row;
      this.currActive = this.dform.validate ? true : false;
      this.viewNetwork = true;
    },

    async SaveChanges() {
      try {
        this.loading = true;
        let userCred = await TokenGetter();
        delete this.dform["CreatedAt"];
        console.log(this.dform);
        const res = await axios.post(
          `/api/admin/services?id=${userCred.uid}&services=GIFTCARDSREQUEST`,
          this.dform,
          {
            headers: {
              Accept: "application/json",
              Authorization: userCred.token,
            },
          }
        );
        let data = res.data;

        if (data.status) {
          ShowSnack("Changes Saved!", "positive");
          this.loading = false;
        } else {
          throw data;
        }
      } catch (err) {
        console.log(err);
        this.loading = false;
        ShowSnack("Error Saving Changes", "negative");
      }
    },
  },
  computed: {
    rows() {
      return this.data.map((v) => ({ ...v }));
    },
    columns() {
      let cols = [];
      for (let key in this.data[0]) {
        cols.push({
          name: key,
          required: true,
          label: key,
          field: key,
          sortable: true,
        });
      }

      return cols;
    },
   
  },
  mounted() {
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
    this.GetNetworks();
  },
};
</script>

<style>
</style>