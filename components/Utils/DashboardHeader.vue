<template>
  <header class="">
    <div class="py-3 bg-gray-900">
      <div class="px-4 mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="xs:block -m-2 lg:hidden">
              <button
                @click="drawer()"
                type="button"
                class="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="flex-shrink-0 ml-4 mr-4 lg:ml-0">
              <a href="#" title="" class="flex items-center">
                <img
                  class="hidden w-auto xs:h-4 md:h-8 lg:block"
                  src="@/assets/img/logo_small.png"
                  alt=""
                />
                <img
                  class="block w-auto xs:h-4 md:h-8 lg:hidden"
                  src="@/assets/img/logo_small.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="flex items-center justify-right lg:ml-0">
            <button
              type="button"
              class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
              id="options-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="flex items-center justify-between w-full">
                <span
                  class="flex items-center justify-between min-w-0 space-x-3"
                >
                  <!-- <img
                    class="flex-shrink-0 object-cover bg-white rounded-full w-7 h-7"
                    src="@/assets/img/profile.gif"
                    alt=""
                  /> -->
                  <span class="flex-1 min-w-0 md:flex">
                    <span
                      class="text-sm xs:block md:hidden font-medium text-white truncate"
                    >
                      <!-- {{ userData.email.substring(0, 4).toUpperCase() }}.. -->
                    </span>
                    <span
                      class="text-sm xs:hidden md:block font-medium text-white truncate"
                    >
                      <!-- {{ userData.email }}.. -->
                    </span>
                  </span>
                </span>
                <q-btn
                  @click="LogOut"
                  size="12px"
                  flat
                  class="ml-2"
                  color="white"
                  round
                  icon="logout"
                ></q-btn>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="userData?.id" class="xs:hidden py-3 bg-white  border-b border-gray-200 lg:block">
      <div class="px-4 mx-auto">
        <div class="flex items-center justify-between space-x-6">
          <div class="flex items-center gap-3">
            <a
              @click="$router.push({ path: '/dashboard' })"
              title=""
              class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'dashboard' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span
                :class="
                  Route == 'dashboard' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                Dashboard</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/users' })"
              title=""
              class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'users' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span
                :class="Route == 'users' ? 'text-purple-600' : 'text-gray-600'"
              >
                All Users</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/network' })"
              title=""
              class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'network' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span
                :class="
                  Route == 'network' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                All Subcription</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/data' })"
              title=""
              class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'data' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
              <span
                :class="Route == 'data' ? 'text-purple-600' : 'text-gray-600'"
                >All Feeds</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/bills' })"
              title=""
              class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'bills' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
              <span
                :class="Route == 'bills' ? 'text-purple-600' : 'text-gray-600'"
                >Bills Settings</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/cables' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'cables' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="Route == 'cables' ? 'text-purple-600' : 'text-gray-600'"
              >
                Users Settings</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/giftcard' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'settings' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="
                  Route == 'giftcard' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                Payment Settings</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/crypto' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'crypto' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="Route == 'crypto' ? 'text-purple-600' : 'text-gray-600'"
              >
                Transactions</span
              >
            </a>

            <a
              @click="$router.push({ path: '/dashboard/epins' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="Route == 'epins' ? 'text-purple-600' : 'text-gray-400'"
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="Route == 'epins' ? 'text-purple-600' : 'text-gray-600'"
              >
                Epins</span
              >
            </a>
            <a
              @click="$router.push({ path: '/dashboard/airtime2cash' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'airtime2cash' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="
                  Route == 'airtime2cash' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                Wallet Settings</span
              >
            </a>
             <a
              @click="$router.push({ path: '/dashboard/withdrawal' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'withdrawal' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="
                  Route == 'withdrawal' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                Withdrawal Request</span
              >
            </a>
             <a
              @click="$router.push({ path: '/dashboard/system' })"
              title=""
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all cursor-pointer duration-200 bg-white rounded-lg hover:bg-gray-100"
            >
              <svg
                :class="
                  Route == 'system' ? 'text-purple-600' : 'text-gray-400'
                "
                class="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>

              <span
                :class="
                  Route == 'system' ? 'text-purple-600' : 'text-gray-600'
                "
              >
                System Settings</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
let store;
let axios
let nuxt;
export default {
  props: ["drawer"],
  created() {
    store = useAdminStore()
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
  },
  methods: {
    async LogOut() {
       try {
        this.loading = true;
        const res = await axios.post("/admin/logout");
        if (res.status == 200) {
          const data = res.data;
          ShowSnack(
            data.message ? data.message : "Log Out Successful",
            "positive"
          );
          store.SetActiveUser("", false);
          store.SetAdminData({});
          this.$router.go({ path: "/" });
          console.log(data);
        } else {
          throw { msg: "Error Logging Out", ...res };
        }
      } catch (err) {
        console.log(err);
        this.loading = false;
        ShowSnack(err.msg ? err.msg : "Error Logging Out", "negative");
      }
    },
  },
  computed: {
      userData() {
        return store?.adminData;
      },
    Route() {
      if (this.$route.fullPath == "/dashboard") {
        return "dashboard";
      }
      if (this.$route.fullPath == "/dashboard/users") {
        return "users";
      }
      if (this.$route.fullPath == "/dashboard/network") {
        return "network";
      }
      if (this.$route.fullPath == "/dasboard/data") {
        return "data";
      }
      if (this.$route.fullPath == "/dashboard/bills") {
        return "bills";
      }
      if (this.$route.fullPath == "/dashboard/cables") {
        return "cables";
      }
      if (this.$route.fullPath == "/dashboard/giftcard") {
        return "giftcard";
      }
      if (this.$route.fullPath == "/dashboard/crypto") {
        return "crypto";
      }
      if (this.$route.fullPath == "/dashboard/withdrawal") {
        return "withdrawal";
      }
       if (this.$route.fullPath == "/dashboard/system") {
        return "system";
      }

      return "";
    },
  },
};
</script>

<style></style>
