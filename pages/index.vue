<template>
  
  <section class="relative min-h-screen py-12 bg-gray-900 sm:py-16 lg:py-20">
    <div class="absolute inset-0 overflow-hidden">
      <img
        class="object-cover object-bottom w-full h-full transform rotate-180 opacity-10"
        src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
        alt=""
      />
    </div>

    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <img
          class="w-auto h-8 mx-auto"
          src="@/assets/img/logo_small.png"
          alt=""
        />
      </div>

      <div class="relative max-w-md mx-auto mt-10 lg:max-w-xl">
        <div class="absolute inset-x-1.5 top-8 -inset-y-4">
          <div
            class="w-full h-full mx-auto rotate-180 rounded-3xl opacity-90 blur-xl filter"
            style="
              background: linear-gradient(
                90deg,
                #44ff9a -0.55%,
                #44b0ff 22.86%,
                #8b44ff 48.36%,
                #ff6644 73.33%,
                #ebff70 99.34%
              );
            "
          ></div>
        </div>

        <div
          class="relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl"
        >
          <div class="px-6 py-7 sm:px-12 sm:py-10">
            <div class="text-center">
              <h1
                class="text-3xl font-bold text-gray-900 font-pj sm:text-4xl xl:text-5xl"
              >
                Welcome Back!
              </h1>
              <p class="mt-6 text-lg font-normal text-gray-600 font-pj">
                Sign in to your account
              </p>

              

              <p class="mt-8 text-sm font-normal text-center text-gray-600">
                or sign in with email
              </p>
            </div>

            <form action="#" method="POST" class="mt-8">
              <div class="space-y-4">
                <div>
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 font-pj"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      v-model="email"
                      placeholder="Email address"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for=""
                      class="text-base font-medium text-gray-900 font-pj"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      class="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div class="mt-2.5">
                    <input
                      type="password"
                      name=""
                      v-model="password"
                      id=""
                      placeholder="Password (min. 8 character)"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                  </div>
                </div>

                <q-btn
                  :loading="loading"
                  @click="Login"
                  :disabled="!isValid"
                  class="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  Sign in
                </q-btn>
              </div>
            </form>

            <svg
              class="w-auto h-4 mx-auto mt-8 text-gray-300"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
              />
            </svg>

           
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let nuxt
let auth
let axios
export default {
   setup() {
    definePageMeta({
      layout: "admin",
    });
  },
    data: () => ({
        loading: false,
        spinner: true,
        email: 'admin@bbmconect.com',
        password: '1234567890'
    }),
    methods: {
         async Login() {
      try {
        this.loading = true;
        const res = await axios.post("/admin/login", {email: this.email, password: this.password}, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(res)

        if (res.status == "200") {
          ShowSnack("Login Successfull", "positive");
          await GetUser();
          this.$router.push({ path: "/dashboard" });
        }else if(res.status == "401"){
          throw { msg: "Incorret Login Details", ...res.data };
        }
         else {
          throw { msg: "Error Logging In", ...res.data };
        }
        this.loading = false;
      } catch (err) {
        this.loading = false;
        ShowSnack(err?.response.status == "401" ? "Invalid Login Details" : err?.response.data ? err.msg : "Unknown Error Occured" , "negative");
        console.log(err);
      }
    },
    },
    computed: {
        isValid() {
            if (this.email && this.password) {
                return true
            }
            return false
        }
    },
    created() {
        nuxt = useNuxtApp()
        auth = nuxt.$authfunc
         axios = nuxt.$UseAxios;
    },
    mounted() {
       
    }
};
</script>

<style>
</style>