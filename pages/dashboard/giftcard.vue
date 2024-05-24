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
        <q-tab name="giftcards" label="All Gift Cards" />
        <q-tab name="requests" label="All Gift Card Requests" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="giftcards">
          <div class="text-h6 text-center my-3">Gift Card Sections</div>
          <DashboardGiftCards></DashboardGiftCards>
        </q-tab-panel>

        <q-tab-panel name="requests">
          <div class="text-h6 text-center my-3">Atc Gift Card Orders</div>
          <DashboardGiftCardOrders></DashboardGiftCardOrders>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: "giftcards",
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