<template>
  <section>
    <div class="py-12 bg-gray-900 sm:pb-6 sm:pt-16 lg:pt-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-stretch justify-between sm:items-center">
            <img
              class="object-cover w-32 h-auto shrink-0 rounded-xl"
              :src="'https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/1/image.png'"
              alt=""
            />

            <div
              class="flex flex-col justify-between flex-1 ml-8 sm:flex-row sm:items-center sm:space-x-6"
            >
              <div class="sm:flex-1">
                <p class="text-xl font-bold text-white">
                  {{ userData.fullname }}
                </p>
                <p class="mt-1 text-base mb-2 font-medium text-gray-400">
                  {{ userData.email }}
                </p>
                <div
                  class="mt-2 text-base bg-green font-medium text-white rounded inline px-1 py-1 shadow-10"
                >
                  {{ userData.account }}
                </div>
              </div>

              <div class="mt-auto sm:ml-auto sm:mt-0">
                <a
                  @click="tab = 'bookings'"
                  title=""
                  class="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                  role="button"
                >
                  Wallet Balance: N{{ userData.balance }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 bg-white sm:py-16 lg:py-20">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="mx-auto">
          <q-card class="shadow-none">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey shadow-none"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="profile" label="Profile" />
              <q-tab name="transaction" label="Transactions" />
              <q-tab name="wallettransactions" label="Wallet Transactions" />
              <q-tab name="modify" label="Modify User" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="profile">
                <div class="text-h6">Profile</div>
                <div class="flow-root mt-6">
                  <ul class="-my-5 divide-y divide-gray-200">
                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">Name:</p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.fullname }}
                      </p>
                    </li>

                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">Email:</p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.email }}
                      </p>
                    </li>

                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">
                        Mobile Number:
                      </p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.phone }}
                      </p>
                    </li>
                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">Balance:</p>
                      <p class="text-sm font-bold text-gray-900">
                        N{{ userData.balance }}
                      </p>
                    </li>
                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">
                        Bank Name:
                      </p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.bankName }}
                      </p>
                    </li>
                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">
                        Bank Account Name:
                      </p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.accountName }}
                      </p>
                    </li>
                    <li class="flex items-center justify-between py-5">
                      <p class="text-sm font-medium text-gray-600">
                        Bank Account Number:
                      </p>
                      <p class="text-sm font-bold text-gray-900">
                        {{ userData.accountNumber }}
                      </p>
                    </li>
                  </ul>
                </div>
                merchant Data and privacy policy implemented.
              </q-tab-panel>

              <q-tab-panel name="transaction">
                <div class="q-pa-md">
                  <q-table
                    title="Transactions"
                    :rows="rowstrans"
                    :columns="columnstrans"
                    row-key="name"
                    @row-click="SelectTrans"
                    :filter="filter1"
                  >
                    <template v-slot:top-right>
                      <q-input
                        borderless
                        dense
                        debounce="300"
                        v-model="filter1"
                        placeholder="Search"
                      >
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
                    </template>
                  </q-table>
                </div>
              </q-tab-panel>

              <q-tab-panel name="wallettransactions">
                <q-table
                  title="Wallet Transactions"
                  :rows="rowswallet"
                  :columns="columnswallet"
                  row-key="name"
                  @row-click="SelectedWiTrans"
                  :filter="filter2"
                >
                  <template v-slot:top-right>
                    <q-input
                      borderless
                      dense
                      debounce="300"
                      v-model="filter2"
                      placeholder="Search"
                    >
                      <template v-slot:append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </template>
                </q-table>
              </q-tab-panel>
              <q-tab-panel name="modify">
                <p>Modify User</p>
                <div
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
                      <p class="py-2 font-bold">Top Up Balance: {{parseInt(dform.balance)}}</p>
                      <input
                        type="number"
                        name=""
                       
                        v-model.number="dform.balance"
                        id=""
                        placeholder="Amount"
                        class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      />
                    </div>
                   

                    <div class="mt-2.5">
                      <p class="py-2 font-bold">Top Up Withdrawal Balance: {{dform.bonusBalance}}</p>
                      <input
                        type="number"
                        
                        name=""
                        v-model.number="dform.bonusBalance"
                        id=""
                        placeholder="Amount"
                        class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      />
                      <div class="flex m-2 justify-end items-center ">
                      <q-btn @click="SaveChanges" :loading="loading" color="green">Save Changes</q-btn>
                      
                    </div>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog
      v-model="tInfo"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-slate-200 w-[90%]">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div
          class="flex text-left px-3 py-3 flex-col justify-start items-center"
        >
          <p class="text-md text-left font-bold font-serif">
            Transaction Details
          </p>

          <div
            class="w-full flex flex-col justify-start gap-4 items-center py-4 px-2 bg-white rounded-md mt-10"
          >
            <div class="h-10 -mt-8 w-10 bg-black rounded-full"></div>

            <p class="font-bold">
              {{
                selectedTrans.mode == "credit"
                  ? "Wallet Topup"
                  : `${selectedTrans.data.transType} Purchase`
              }}
            </p>
            <p class="font-bold text-xl">
              {{
                selectedTrans.mode == "credit"
                  ? "+"
                  : selectedTrans.status == "reversed"
                  ? "+"
                  : "-"
              }}
              ₦{{ selectedTrans.amount }}
            </p>
            <span class="text-black text-[10px] cursor-pointer text-[10px]"
              ><q-icon
                :class="{
                  'bg-red': selectedTrans.Status == 'failed',
                  'bg-green': selectedTrans.Status == 'successful',
                  'bg-orange': selectedTrans.Status == 'pending',
                  'bg-pink': selectedTrans.Status == 'reversed',
                }"
                class="rounded-full p-1"
                color="white"
                name="done"
              ></q-icon>
              {{ selectedTrans.Status }}
            </span>

            <div class="flex w-full justify-between items-center">
              <p>Recipient Name</p>
              <p>{{ userData.fullname }}</p>
            </div>

            <div class="flex w-full justify-between items-center">
              <p>Transaction Ref</p>
              <p>{{ selectedTrans.transref }}</p>
            </div>

            <div class="flex w-full justify-between items-center">
              <p>Transaction Type</p>
              <p>
                {{
                  selectedTrans.mode == "credit"
                    ? "Wallet Topup"
                    : `${selectedTrans.data.transType} Purchase`
                }}
              </p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>User Id</p>
              <p>{{ selectedTrans.uid }}</p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>Date</p>
              <p>{{ selectedTrans.data.create_date }}</p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>Status</p>
              <p>{{ selectedTrans.data.Status }}</p>
            </div>

            <q-btn
              v-if="selectedTrans.data.status == 'pending'"
              color="red"
              class="w-full"
              >Initaite Reversal</q-btn
            >
          </div>
        </div>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="wInfo"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-slate-200 w-[90%]">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div
          class="flex text-left px-3 py-3 flex-col justify-start items-center"
        >
          <p class="text-md text-left font-bold font-serif">
            Transaction Details
          </p>

          <div
            class="w-full flex flex-col justify-start gap-4 items-center py-4 px-2 bg-white rounded-md mt-10"
          >
            <div class="h-10 -mt-8 w-10 bg-black rounded-full"></div>

            <p class="font-bold">
              {{
                selectedWiTrans.mode == "credit"
                  ? "Wallet Topup"
                  : `${selectedWiTrans.channel} Purchase`
              }}
            </p>
            <p class="font-bold text-xl">
              {{
                selectedWiTrans.mode == "credit"
                  ? "+"
                  : selectedWiTrans.status == "reversed"
                  ? "+"
                  : "-"
              }}
              ₦{{ selectedWiTrans.amount }}
            </p>
            <span class="text-black text-[10px] cursor-pointer text-[10px]"
              ><q-icon
                :class="{
                  'bg-red': selectedWiTrans.status == 'failed',
                  'bg-green': selectedWiTrans.status == 'success',
                  'bg-orange': selectedWiTrans.status == 'pending',
                  'bg-pink': selectedWiTrans.status == 'reversed',
                }"
                class="rounded-full p-1"
                color="white"
                name="done"
              ></q-icon>
              {{ selectedWiTrans.status }}
            </span>

            <div class="flex w-full justify-between items-center">
              <p>Recipient Name</p>
              <p>{{ userData.fullname }}</p>
            </div>

            <div class="flex w-full justify-between items-center">
              <p>Transaction Ref</p>
              <p>{{ selectedWiTrans.transref }}</p>
            </div>

            <div class="flex w-full justify-between items-center">
              <p>Transaction Type</p>
              <p>
                {{
                  selectedWiTrans.mode == "credit"
                    ? "Wallet Topup"
                    : `${selectedWiTrans.channel} Purchase`
                }}
              </p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>User Id</p>
              <p>{{ selectedWiTrans.uid }}</p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>Date</p>
              <p>{{ selectedWiTrans.paidAt }}</p>
            </div>
            <div class="flex w-full justify-between items-center">
              <p>Status</p>
              <p>{{ selectedWiTrans.status }}</p>
            </div>

            <q-btn
              v-if="selectedWiTrans.status == 'pending'"
              color="red"
              class="w-full"
              >Initaite Reversal</q-btn
            >
          </div>
        </div>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
let nuxt;
let store;
let axios;
export default {
  props: ["userData", "transactions", "wallettransactions"],
  data: () => ({
    tab: "profile",
    selectedTrans: {},
    selectedWiTrans: {},

    dform: {},
    tInfo: false,
    wInfo: false,
    filter1: "",
    filter2: "",
    loading:false
  }),
  computed: {
    rowstrans() {
      return this.transactions.map((v) => ({
        ...v,
      }));
    },

    rowswallet() {
      return this.wallettransactions.map((v) => ({
        ...v,
      }));
    },
    columnstrans() {
      let cols = [];
      for (let key in this.transactions[0]) {
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

    columnswallet() {
      let cols = [];
      for (let key in this.wallettransactions[0]) {
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
  methods: {
    async SelectTrans(evt, row, index) {
      this.selectedTrans = row;
      this.tInfo = true;
    },
    async SelectedWiTrans(evt, row, index) {
      this.selectedWiTrans = row;

      this.wInfo = true;
    },
    async SaveChanges() {
      try {
        this.loading = true;
        let userCred = await TokenGetter();
        const res = await axios.post(
          `/api/admin/services?id=${userCred.uid}&services=USERS`,
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
  mounted() {
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
    this.dform = this.userData;
  },
};
</script>

<style>
</style>