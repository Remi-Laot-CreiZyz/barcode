<template>
  <div id="interactive" ref="interactive" class="viewport scanner">
    <video/>
    <canvas class="drawingBuffer"/>
  </div>
</template>

<script>
import Quagga from "quagga";

function initQuagga(width, height, onDetected, onProcessed) {
  Quagga.init(
    {
      // Quagga options
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: width,
          height: height
        }
      },
      locator: {
        halfSample: true,
        patchSize: "medium",
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true
          }
        }
      },
      decoder: {
        readers: ["ean_reader"],
        multiple: false,
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        }
      },
      frequency: 5
    },
    error => {
      if (error) console.log(error);
      else {
        Quagga.onDetected(onDetected);
        Quagga.onProcessed(onProcessed);
      }
    }
  );
}

export default {
  name: "QuaggaScanner",
  mounted : function() {
    initQuagga(
      this.getWidth(),
      this.getHeight(),
      this.onDetected.bind(this),
      this.onProcessed.bind(this)
    );
    Quagga.start();
  },
  beforeDestroy : function() {
    Quagga.stop();
    initQuagga(
      this.getWidth(),
      this.getHeight(),
      this.onDetected.bind(this),
      this.onProcessed.bind(this)
    );
  },
  methods: {
    getWidth : function() {
      return this.$refs.interactive.clientWidth;
    },
    getHeight : function() {
      return this.$refs.interactive.clientHeight;
    },
    onProcessed : function(result) {
      if (result) {
        let drawingCtx = Quagga.canvas.ctx.overlay;
        let drawingCanvas = Quagga.canvas.dom.overlay;
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute("width")),
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }
        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }
        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    },
    onDetected : function(result) {
      if (result) {
        var detected = result.codeResult.code;
        var code = {
          pays : str.substring(0, 1),
          entreprise : str.substring(1).substring(0, str.length / 2 - 1),
          produit : str.substring(1).substring(str.length / 2, str.length - 1),
        }
        console.log(code);
      }
    },
  }
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