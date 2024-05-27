<template>
  <div class="py-12  sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="grid max-w-5xl grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-4"
      >
        <div class="bg-white border border-gray-200 rounded-xl">
          <div class="px-5 py-4">
            <p
              class="text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Total User
            </p>
            <div class="flex items-center justify-between mt-3">
              <p class="text-xl font-bold text-gray-900">{{ userCount }}</p>

              <span
                class="inline-flex items-center text-sm font-semibold text-green-500"
              >
                + 
                
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl">
          <div class="px-5 py-4">
            <p
              class="text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Friend Request
            </p>
            <div class="flex items-center justify-between mt-3">
              <p class="text-xl font-bold text-gray-900">{{ cardRequest}}</p>

              <span
                class="inline-flex items-center text-sm font-semibold text-green-500"
              >
                
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl">
          <div class="px-5 py-4">
            <p
              class="text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Active User
            </p>
            <div class="flex items-center justify-between mt-3">
              <p class="text-xl font-bold text-gray-900">{{atcRequests}}</p>

              <span
                class="inline-flex items-center text-sm font-semibold text-green-500"
              >
                + 36%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl">
          <div class="px-5 py-4">
            <p
              class="text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Total Deposit
            </p>
            <div class="flex items-center justify-between mt-3">
              <p class="text-xl font-bold text-gray-900">N{{new Intl.NumberFormat().format( totalDeposit || 0) }}</p>

              <span
                class="inline-flex items-center text-sm font-semibold text-green-500"
              >
               
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userCount",
      "cardRequest",
      "atcRequests",
      "totalDeposit"]
};
</script>

<style>
</style>