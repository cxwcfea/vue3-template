import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

FilesetResolver.forVisionTasks('https://test.visiontech.site/mediapipe').then((vision) => {
  HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: 'hand_landmarker.task',
      delegate: 'CPU',
    },
    runningMode: 'VIDEO',
    // runningMode: 'IMAGE',
    numHands: 1,
    minHandDetectionConfidence: 0.8,
  }).then((data) => {
    const handLandmarker = data;
    console.log(handLandmarker);
  });
});

onmessage = function (event) {
  // const canvas = document.createElement('canvas');
  // console.log(canvas);
  // let count = 0;
  // for (let i = 0; i < event.data.data; i++) {
  //   count += i;
  // }

  event.data.data.arrayBuffer().then((buffer) => {
    //获取当前的预测帧
    // console.log(buffer);
    postMessage(buffer);
  });
};
