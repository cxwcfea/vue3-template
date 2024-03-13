<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <el-button type="primary" @click="handleClick">Test</el-button>
  <el-button type="primary" @click="handleClick2">worker</el-button>
  <router-view></router-view>
  <div class="video-area">
    <video ref="videoRef" src="./assets/video.mp4" controls autoplay muted loop></video>
  </div>
  <div class="canvas-area">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
// import { ElMessage } from 'element-plus';

const videoRef = ref();
const canvasRef = ref();
let handLandmarker: HandLandmarker;

const init = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    'https://test.visiontech.site/mediapipe'
    // 'https://www.humancode.app/mediapipe'
    //'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
    // 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
    // './js'
    // jsUrl
  );
  handLandmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: 'hand_landmarker.task',
      delegate: 'CPU',
    },
    runningMode: 'VIDEO',
    // runningMode: 'IMAGE',
    numHands: 1,
    minHandDetectionConfidence: 0.8,
  });
  console.log(handLandmarker);
};

onMounted(() => {
  init();
  videoRef.value.addEventListener('timeupdate', () => {
    // console.log(videoRef.value.currentTime);
  });
  drawVideo();
});

const drawVideo = () => {
  canvasRef.value.width = videoRef.value.videoWidth;
  canvasRef.value.height = videoRef.value.videoHeight;
  const context = canvasRef.value.getContext('2d');

  if (context) {
    context.drawImage(videoRef.value, 0, 0, 320, 240);
  }
  window.requestAnimationFrame(drawVideo);
};

const handleClick2 = () => {
  const worker = new Worker('./worker.js');

  canvasRef.value.toBlob((blob) => {
    if (blob) {
      // blob.arrayBuffer().then((buffer) => {
      //   //获取当前的预测帧
      //   console.timeEnd('time');
      //   console.log(buffer);
      // });
      worker.postMessage({ data: blob });
    }
  }, 'image/jpg');

  worker.onmessage = function (event) {
    console.log(event.data);
    worker.terminate();
  };
};

const handleClick = () => {
  // ElMessage({
  //   message: 'ok ok ok',
  //   type: 'success',
  //   duration: 0,
  // });

  const startTimeMs = performance.now();
  console.time('time');
  canvasRef.value.toBlob((blob) => {
    if (blob) {
      blob.arrayBuffer().then((buffer) => {
        //获取当前的预测帧
        console.timeEnd('time');
        console.log(buffer);
      });
    }
  }, 'image/jpg');

  // const ctx = canvasRef.value.getContext('2d');
  // const data = ctx.getImageData(0, 0, 320, 240);
  // console.log(data);

  const results = handLandmarker.detectForVideo(videoRef.value, startTimeMs);
  console.log(results);
};
</script>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.video-area {
  width: 320px;
  height: 240px;
  background-color: green;
  margin: 0 auto;

  video {
    width: 100%;
    height: 100%;
  }
}
.canvas-area {
  width: 320px;
  height: 240px;
  background-color: green;
  margin: 0 auto;
}
</style>
