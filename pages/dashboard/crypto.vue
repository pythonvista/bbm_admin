<template>
  <div>
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
        <q-tab name="networks" label="All Crypto Network" />
        <q-tab name="orders" label="All Crypto Orders" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="networks">
          <div class="text-h6 text-center my-3">All Crypto Networks</div>
          <DashboardCryptoNetwork></DashboardCryptoNetwork>
        </q-tab-panel>

        <q-tab-panel name="orders">
           <div class="text-h6 text-center my-3">Atc Crypto Orders</div>
        <DashboardCryptoOrders></DashboardCryptoOrders>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: "networks",
  }),
  setup() {
    definePageMeta({
      layout: "admin",
    });
  },
};
</script>

<style>
</style>