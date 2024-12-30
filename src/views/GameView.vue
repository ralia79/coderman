<script>
import 'anahita/main.css';
import { Anahita } from 'anahita'

import DemoMap from '@/domain/map/DemoMap.js'

export default {
	mounted() {
		const world = Anahita.init();
    const map = new DemoMap();
    const img = document.createElement("img");
    img.src = "@/assets/map/demoLower.png";
    img.onload = () => {
      console.log('jo')
    }
    img.onerror = function(e) {
      console.log("Not ok",e);
    }
    //world.setMap();
    //world.loop();
	}
}
</script>

<template>
  <div class="anahita">
    <canvas></canvas> 
  </div>
  <img src="@/assets/map/demoLower.png"/>
</template>

<style>
.anahita {
  outline: 1px solid #FFF;
  margin-top: 20px;
}
</style>
