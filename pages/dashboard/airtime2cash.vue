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
        <q-tab name="atcnumber" label="All Atc Number" />
        <q-tab name="atcorders" label="All Atc Orders" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="atcnumber">
          <div class="text-h6 text-center my-3">Atc Section</div>
          <DashboardAtcCard></DashboardAtcCard>
        </q-tab-panel>

        <q-tab-panel name="atcorders">
           <div class="text-h6 text-center my-3">Atc Orders Section</div>
          <DashboardAtcOrdersCard></DashboardAtcOrdersCard>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: "atcnumber",
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