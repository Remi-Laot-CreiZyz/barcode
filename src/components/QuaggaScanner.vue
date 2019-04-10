<template>
  <div id="interactive" ref="interactive" class="viewport scanner">
    <video/>
    <canvas class="drawingBuffer"/>
    <div id="top-black">.</div>
  </div>
</template>

<script>
import Quagga from "quagga";

const TB_BORDER = 0.35;
const LR_BORDER = 0.15;

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
    setTimeout((() => {
      Quagga.start();
      this.drawBox();
    }).bind(this), 500);
  },
  beforeDestroy : function() {
    Quagga.stop();
  },
  methods: {
    getWidth : function() {
      return this.$refs.interactive.clientWidth;
    },
    getHeight : function() {
      return this.$refs.interactive.clientHeight;
    },
    drawBox : function() {
      var drawingCtx = Quagga.canvas.ctx.overlay;
      var drawingCanvas = Quagga.canvas.dom.overlay;
      var width = parseInt(drawingCanvas.getAttribute("width"));
      var height = parseInt(drawingCanvas.getAttribute("height"));
      drawingCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
      var W = [
        0,
        width * LR_BORDER,
        width * (1 - LR_BORDER),
        width
      ];
      var H = [
        0,
        height * TB_BORDER,
        height * (1 - TB_BORDER),
        height
      ];
      drawingCtx.fillRect(W[0], H[0], W[3] - W[0], H[1] - H[0]);
      drawingCtx.fillRect(W[0], H[2], W[3] - W[0], H[3] - H[2]);
      drawingCtx.fillRect(W[0], H[1], W[1] - W[0], H[2] - H[1]);
      drawingCtx.fillRect(W[2], H[1], W[3] - W[2], H[2] - H[1]);
    },
    onProcessed : function(result) {
      if (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay;
        var drawingCanvas = Quagga.canvas.dom.overlay;
        var width = parseInt(drawingCanvas.getAttribute("width"));
        var height = parseInt(drawingCanvas.getAttribute("height"));
        drawingCtx.clearRect(0, 0, width, height);
        this.drawBox();
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
      // console.log(result);
      if (result) {
        var str = "" + result.codeResult.code;
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
  background-color: black;
}

.viewport canvas,
.viewport video {
  position: absolute;
  left: 0;
  top: 0;
}

.top-black {
  position: absolute;
  left: 0;
  top: 0;
  height: 35%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
</style>