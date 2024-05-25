<template>
  <div>
    <UtilsSkeleton1 v-if="loader" :numbers="10"></UtilsSkeleton1>
    <div v-else class="">
      <div class="max-w-7xl mx-auto p-5">
        <h2 class="font-bold text-[#111827] text-lg">Admin Dashbaord</h2>
        <p class="text-[#6b7280] text-sm font-medium leading-6">
          No notification or important updates
        </p>
      </div>
      <div
        class="w-full flex items-center justify-center mx-auto max-w-7xl px-5"
      >
    
        <!-- Author card -->
      </div>
      <StatsDataStats1
        :userCount="userCount"
        :cardRequest="cardRequest"
        :atcRequests="atcRequests"
        :totalDeposit="totalDeposit"
      ></StatsDataStats1>
      <StatsDataStats2
        :totalGift="totalGift"
        :totalAirtime="totalAirtime"
        :totalCrypto="totalCrypto"
        :totalData="totalData"
        :totalBills="totalBills"
        :totalElectricity="totalElectricity"
      ></StatsDataStats2>
    </div>
  </div>
</template>

<script>
let nuxt;
let store;
let axios;
export default {
  mounted() {
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
    this.GetStats()
  },

  setup() {
    definePageMeta({
      layout: "admin",
    });
  },
  data: () => ({
    loader: true,
    userCount: 0,
    totalDeposit: 0,
    totalData: 0,
    totalBills: 0,
    totalAirtime : 0,
    totalElectricity: 0,
    totalEpin: 0,
    totalGift: 0,
    totalCrypto: 0,
    atcRequests: 0,
    cardRequest: 0,
  }),
  methods: {
    async GetStats() {
      this.loader = false
    },
  },
  computed: {},
  created() {
    store = useAdminStore();
  },
};
</script>

<style></style>
