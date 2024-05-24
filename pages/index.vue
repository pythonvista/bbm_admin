<template>
  <div v-if="maintainance">
    <HomeMaintainance></HomeMaintainance>
  </div>
  <div v-else>
    <HomeHeader ></HomeHeader>
    <HomeHero id="home"></HomeHero>
    <HomeAbout id="about"></HomeAbout>
    <HomeServices id="services"></HomeServices>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
export default {
  data: ()=>({
    maintainance: false
  }),
  mounted() {
    
  }
}
</script>

<style>

</style>
