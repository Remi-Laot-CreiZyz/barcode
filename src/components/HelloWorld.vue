<template>
  <div>
    <div>code: {{ detected }}</div>
    <div>code pays: {{ pays }} </div>
    <div>code entreprise: {{ entreprise }} </div>
    <div>code produit: {{ produit }} </div>
    <button v-if="ready" v-on:click="start">start</button>
    <button v-if="ready" v-on:click="stop">stop</button>
    <div v-show="scanning" id="interactive" class="viewport scanner">
      <video />
      <canvas class="drawingBuffer" />
    </div>
  </div>
</template>

<script>
  import Quagga from 'quagga';

  function initQuagga()
  {
      Quagga.init({ // Quagga options
        inputStream :
        {
          name : "Live",
          type : "LiveStream",
        },
        locator :
        {
          halfSample: true,
          patchSize: "medium",
          debug:
          {
            showCanvas: true,
            showPatches: true,
            showFoundPatches: true,
            showSkeleton: true,
            showLabels: true,
            showPatchLabels: true,
            showRemainingPatchLabels: true,
            boxFromPatches:
            {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true
            }
          }
        },
        decoder :
        {
          readers : ["ean_reader"],
          multiple : false,
          debug :
          {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true
          }
        },
        frequency : 5
      }, (error) => {
        if (error) console.log(error);
        else
        {
          this.ready = !this.ready;
          Quagga.onDetected(this.onDetected);
          Quagga.onProcessed(this.onProcessed);
        }
      });
  }

  export default {
    name: 'QuaggaScanner',
    data() { return { detected : '-', ready : false, scanning: false, pays: '?', entreprise: '?', produit: '?' }; },
    mounted() {
      initQuagga.bind(this)();
    },
    methods: {
      onProcessed(result)
      {
        if (result) {
          let drawingCtx = Quagga.canvas.ctx.overlay;
          let drawingCanvas = Quagga.canvas.dom.overlay;
          if (result.boxes) {
            drawingCtx.clearRect(
              0,
              0,
              parseInt(drawingCanvas.getAttribute('width')),
              parseInt(drawingCanvas.getAttribute('height'))
            );
            result.boxes
              .filter(function(box) {
                return box !== result.box;
              })
              .forEach(function(box) {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                  color: 'green',
                  lineWidth: 2,
                });
              });
          }
          if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
              color: '#00F',
              lineWidth: 2,
            });
          }
          if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(
              result.line,
              { x: 'x', y: 'y' },
              drawingCtx,
              { color: 'red', lineWidth: 3 }
            );
          }
        }
      },
      onDetected(result)
      {
        if (result)
        {
          this.detected = result.codeResult.code;
          var str = '' + this.detected;
          this.pays = str.substring(0,1);
          str = str.substring(1);
          this.entreprise = str.substring(0, (str.length / 2) - 1);
          this.produit = str.substring(str.length / 2, str.length - 1);
        }
      },
      start()
      {
        this.scanning = true;
        Quagga.start();
      },
      stop()
      {
        this.scanning = false;
        this.ready = false;
        Quagga.stop();
        initQuagga.bind(this)();
      }
    },
  };
</script>

<style scoped lang="scss">
.viewport {
  position: relative;
}

.viewport canvas,
.viewport video {
  position: absolute;
  left: 0;
  top: 0;
}
</style>