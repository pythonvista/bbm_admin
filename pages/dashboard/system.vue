<template>
  <div>
    <q-card class="w-full m-3 m-auto">
     

      <q-card-section class="q-pt-none shadow-0">
        <form method="POST" class="w-full">
            <p class="text-lg w-full text-center my-3 font-bold">
              System Settings
            </p>
            <div class="space-y-4">
             
              <div>
                <div class="flex items-center justify-between">
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 font-pj"
                  >
                    App Name
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name=""
                    v-model="dform.appName"
                    id=""
                    placeholder="App Name"
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
                    App Logo Url
                  </label>
                 
                </div>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name=""
                    v-model="dform.appLogo"
                    id=""
                    placeholder="App Logo"
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
                    Paystack Public Key
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name=""
                    v-model="dform.paystackPublicKey"
                    id=""
                    placeholder=" Paystack Public Key"
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
                    Naria Rate
                  </label>
                </div>
                <div class="mt-2.5">
                  <input
                    type="number"
                    name=""
                    v-model="dform.nairaRate"
                    id=""
                    placeholder=" Naria Rate"
                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-mdfocus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                  />
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
          `/api/admin/services?id=${userCred.uid}&service=SETUP`,
          {
            headers: {
              Accept: "application/json",
              Authorization: userCred.token,
            },
          }
        );
        let data = res.data;

        this.data = data.Data.value;
        this.dform = this.data[0] || {};
        this.count = data.Count.value;
        this.loader = false;
      } catch (err) {
        console.log(err);
      }
    },

    async SaveChanges() {
      try {
        this.loading = true;
        let userCred = await TokenGetter();
        delete this.dform["CreatedAt"];
        console.log(this.dform);
        const res = await axios.post(
          `/api/admin/services?id=${userCred.uid}&services=SETUP`,
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
  computed: {},

  setup() {
    definePageMeta({
      layout: "admin",
    });
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