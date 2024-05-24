<template>
  <div>
    <UtilsSkeleton1 v-if="loader" :numbers="10"></UtilsSkeleton1>
    <div v-else>
      <div class="q-pa-md">
        <q-table
          title="All Networks"
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
            <div class="w-full flex my-4 justify-center items-center">
              <img :src="dform.img" alt="" />
            </div>
            <p class="text-lg w-full text-center mb-5 font-bold">
              {{ dform.name }}
            </p>
            <div class="space-y-4">
              <div>
                <label
                  for=""
                  class="text-base font-medium text-gray-900 font-pj"
                >
                  Doc Id
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    readonly
                    name=""
                    id=""
                    v-model="dform.docid"
                    placeholder="Doc Id"
                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 font-pj"
                  >
                    Network Name
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name=""
                    v-model="dform.name"
                    id=""
                    placeholder="Netwwork Name"
                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 font-pj"
                  >
                    Network Id
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="number"
                    name=""
                    readonly
                    v-model="dform.id"
                    id=""
                    placeholder="Netwwork Name"
                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 font-pj"
                  >
                    Network Image
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="test"
                    name=""
                    readonly
                    v-model="dform.img"
                    id=""
                    placeholder="Netwwork Img"
                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                  />
                </div>
              </div>
              <div class="q-pa-md">
                <q-toggle
                  @update:model-value="
                    (value, evt) => (dform.active = value ? 1 : 0)
                  "
                  :label="dform.active ? 'Active' : 'Inactive'"
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
  setup() {
    definePageMeta({
      layout: "admin",
    });
  },
  data: () => ({
    data: [],
    currActive: false,
    count: 0,
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
          `/api/admin/services?id=${userCred.uid}&service=NETWORKS`,
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
          `/api/admin/services?id=${userCred.uid}&services=NETWORKS`,
          this.dform,
          {
            headers: {
              Accept: "application/json",
              Authorization: userCred.token,
            },
          }
        );
        let data = res.data;
        console.log(data)
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

<style></style>
