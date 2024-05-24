<template>
  <div>
    <div class="max-w-7xl mx-auto p-5">
      <h2 class="font-bold text-[#111827] text-lg">Admin Settings</h2>
      <p class="text-[#6b7280] text-sm font-medium leading-6">
        No notification or important updates
      </p>
    </div>
    <div class="flex flex-col max-w-7xl mx-auto px-5">
      <div>
        <div>
          <div class="mt-6">
            <p class="text-base font-bold text-gray-900">Profile</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Update Profile</p>
          </div>

          <form action="#" method="POST" class="max-w-3xl mt-12">
            <div class="space-y-8">
              <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                <label
                  for=""
                  class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                >
                  First & Last Name
                </label>
                <div class="mt-2 sm:mt-0 sm:col-span-2">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        value="Martin"
                        class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        value="Janiter"
                        class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                <label
                  for=""
                  class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                >
                  Email Address
                </label>
                <div class="mt-2 sm:mt-0 sm:col-span-2">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder=""
                    value="j.martin@gmail.com"
                    class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6 sm:mt-12">
              <button
                type="submit"
                class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "udashboard",
    });
  },
  data: () => ({}),
  methods: {},
  computed: {},
  created() {
    // this.GetUserInfo()
  },
};
</script>

<style></style>
