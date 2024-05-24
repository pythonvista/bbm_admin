<template>
  <section class="px-12 bg-white py-20 max-w-md w-full rounded-2xl">
    <form action="#" method="POST" class="w-full">
      <div class="space-y-4">
        <div>
          <label for="" class="text-sm font-bold text-gray-900"> Email </label>
          <div class="mt-2">
            <input type="email" name="" id="email" placeholder="Email address" v-model="dform.email"
              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-purple-600 focus:border-purple-600 sm:text-sm caret-purple-600 outline-purple-600" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="" class="text-sm font-bold text-gray-900">
              Password
            </label>

            <a href="#" title="" class="text-sm font-medium text-purple-600 hover:text-purple-700">
              Forgot Password?
            </a>
          </div>
          <div class="mt-2">
            <input type="password" name="" id="password" v-model="dform.password"
              placeholder="Password (min. 8 character)"
              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-purple-600 focus:border-purple-600 sm:text-sm caret-purple-600 outline-purple-600" />
          </div>
        </div>

        <div class="relative flex items-center">
          <div class="flex items-center h-5">
            <input type="checkbox" name="remember-password" id="remember-password"
              class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600 outline-purple-600 checked:text-purple-600" />
          </div>

          <div class="ml-3">
            <label for="remember-password" class="text-sm font-medium text-gray-900">
              Remember Me
            </label>
          </div>
        </div>

        <div>
          <q-btn :loading="loading" :disable="!isValid" @click="Login"
            class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-800">
            Sign in
          </q-btn>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
let store
export default {
  data: () => ({
    loading: false,
    type: "",
    dform: {
      email: "admin@stayeasy.com",
      password: "Emeter@12",
    },
  }),
  computed: {
    accessToken() {
     return store.token 
    },
    isValid() {
      if (this.dform.email && this.dform.password) {
        return true;
      }

      return false;
    },
  },
  created() {
    store = useBookingStore()
  },
  methods: {
    async Login() {
      this.loading = true;
      try {
        this.loading = false;
        const res = await UseFetch.post('login', this.dform)
        const data = await res.json()
        console.log(data)
        if (data.token) {
          let token = data.token ? data.token : ''
          TokenChecker.SetToken(token)
          store.SetToken(TokenChecker.GetToken())
          ShowSnack("Sucessfully Logged In", "positive");
          this.$router.push({ path: "/dashboard" });
        } else {
          throw {msg: 'Error Occured'}
        }
        
      } catch (err) {
        this.loading = false;
        ShowSnack("Error Logging In", "negative");
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
