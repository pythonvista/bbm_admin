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
        <q-tab name="cables" label="All Cables" />
        <q-tab name="cablesplan" label="All Cables Plan" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="cables">
          <div class="text-h6 text-center my-3">Cables Section</div>
          <DashboardCablesCard></DashboardCablesCard>
        </q-tab-panel>

        <q-tab-panel name="cablesplan">
           <div class="text-h6 text-center my-3">Cables Plan Section</div>
          <DashboardCablesPlanCard></DashboardCablesPlanCard>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: "cables",
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