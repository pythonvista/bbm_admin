<template>
  <div>
    <UtilsSkeleton1 v-if="loader" :numbers="10"></UtilsSkeleton1>
    <div v-else>
      <div class="q-pa-md">
        <q-table
          title="All Atc Orders"
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
              {{ dform.transref }}
            </p>
            <div class="space-y-4">
              <div class="flow-root mt-6">
                <ul class="-my-5 divide-y divide-gray-200">
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">User Name:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.accountName }}
                    </p>
                  </li>

                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Atc Network:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.network }}
                    </p>
                  </li>

                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Sender Mobile Number:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.mobile }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Recieving Number:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.atcNumber }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Bank Name:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.bankName }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Bank Account Name:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.accountName }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Bank Account Number:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.accountNumber }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">Percentage:</p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.percent }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Sent Amount:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.amount }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between py-5">
                    <p class="text-sm font-medium text-gray-600">
                      Recieving Amount:
                    </p>
                    <p class="text-sm font-bold text-gray-900">
                      {{ dform.recieveAmount }}
                    </p>
                  </li>
                  <div class="w-full">
                    <q-select
                      outlined
                      label="Status"
                      v-model="dform.status"
                      dense
                      :options="[
                        'pending',
                        'rejected',
                        'processing',
                        'approved',
                      ]"
                    >
                    </q-select>
                  </div>

                  <div class="my-3">
                    <q-checkbox
                      left-label
                      v-model="isWalletTopUp"
                      label="Check this to send funds to balance"
                    />
                  </div>
                </ul>
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
              <div
                v-if="AllowWalletTopUp"
                class="w-full p-3 border-2 my-4 border-solid shadow-2 rounded-md"
              >
                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for=""
                      class="text-base font-medium text-gray-900 font-pj"
                    >
                      User Wallet Amount Top Up
                    </label>
                  </div>
                  <div class="mt-2.5">
                    <input
                      type="number"
                      name=""
                      readonly
                      v-model="walletTop"
                      id=""
                      placeholder="Amount"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                    <p class="text-red my-3">
                        <span class="font-bold text-[12px]">Note:</span>
                        Please proceed with caution! This option should only be selected if you intend to send funds directly to the user withdrawal wallet for automatic withdrawal. Manually crediting this account while this option is active may result in the user receiving double funds. Double-check your selection before proceeding to avoid any unintended consequences.
                    </p>
                  </div>
                </div>
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
    isWalletTopUp: false,
    dform: {},
    viewNetwork: false,
    maximizedToggle: true,
    filter: "",
    loader: true,
    loading: false,
    spinner: false,
  }),
  methods: {
    async GetNetworks() {
      try {
        let userCred = await TokenGetter();
        
        const res = await axios.get(
          `/api/admin/services?id=${userCred.uid}&service=ATCORDERS`,
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
      this.currActive = this.dform.active ? true : false;
      this.viewNetwork = true;
    },
    async SaveChanges() {
      try {
        this.loading = true;
        let userCred = await TokenGetter();
        const res = await axios.post(
          `/api/admin/services?id=${userCred.uid}&services=ATCORDERS`,
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
    walletTop() {
      return this.dform.recieveAmount || 0;
    },
    AllowWalletTopUp() {
      if (
        this.dform.status == "approved" &&
        this.dform.validate &&
        this.isWalletTopUp
      ) {
        return true;
      }
      return false;
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

<style></style>
