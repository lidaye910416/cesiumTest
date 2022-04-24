<template>
  <div id="container"></div>
</template>
<script>
import * as Cesium from "cesium/Cesium";
import * as widgets from "cesium/Widgets/widgets.css";
export default {
  name: 'HelloCesium',
  mounted () {
    const viewer = new Cesium.Viewer('container');
  }
}
</script>
<style scoped lang="scss">
#container {
  width: 100%;
  height: 100%;
}
</style>
