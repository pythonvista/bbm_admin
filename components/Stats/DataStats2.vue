<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-2 py-8 border-t border-b border-gray-200 xl:grid-cols-5"
      >
        <div class="pb-10 lg:pb-0">
          <p class="text-sm font-medium text-gray-600">
            Total Register User
          </p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">N{{ totalGift }}</p>
            <span
              class="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
             
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
          <p class="mt-4 text-xs font-medium text-gray-500">Intrest: 344</p>
        </div>

        <div class="pb-10 pl-10 border-gray-200 xl:pb-0 xl:border-l">
          <p class="text-sm font-medium text-gray-600">
            TotalSubcription
          </p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">N{{ totalAirtime }}</p>
            <span
              class="text-xs font-semibold text-red-500 ml-2.5 bg-red-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
             
            </span>
          </div>
          <!-- <p class="mt-4 text-xs font-medium text-gray-500">Last 30 Days</p> -->
        </div>

        <div
          class="py-10 border-t xl:border-l xl:py-0 lg:border-gray-200 xl:pl-10 xl:border-t-0"
        >
          <p class="text-sm font-medium text-gray-600">Total Revenue</p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">N {{ totalCrypto }}</p>
            <span
              class="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
             
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
          <!-- <p class="mt-4 text-xs font-medium text-gray-500">Last 30 Days</p> -->
        </div>

        <div
          class="py-10 pl-10 border-t border-gray-200 xl:py-0 xl:border-l xl:border-t-0"
        >
          <p class="text-sm font-medium text-gray-600">Total Inactive User</p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">{{ totalData }}</p>
            <span
              class="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
              
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
          <!-- <p class="mt-4 text-xs font-medium text-gray-500">Last 7 Days</p> -->
        </div>

        <div
          class="col-span-1 pt-10 border-t xl:col-span-1 xl:py-0 xl:border-l xl:border-t-0 xl:border-gray-200 xl:pl-10"
        >
          <p class="text-sm font-medium text-gray-600">Total Male</p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">N{{ totalBills }}</p>
            <span
              class="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
             
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
          <!-- <p class="mt-4 text-xs font-medium text-gray-500">Last 7 Days</p> -->
        </div>
        <div
          class="col-span-1 pt-10 border-t xl:col-span-1 xl:py-0 xl:border-l xl:border-t-0 xl:border-gray-200 xl:pl-10"
        >
          <p class="text-sm font-medium text-gray-600">Total Female</p>
          <div class="inline-flex items-center mt-3">
            <p class="text-2xl font-bold text-gray-900">N{{ totalElectricity }}</p>
            <span
              class="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5"
            >
             
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
          <!-- <p class="mt-4 text-xs font-medium text-gray-500">Last 7 Days</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "totalGift",
    "totalAirtime",
    "totalCrypto",
    "totalData",
    "totalBills",
    "totalElectricity",
  ],
};
</script>

<style>
</style>