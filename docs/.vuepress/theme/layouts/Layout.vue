<template>
  <ParentLayout>
    <slot name="page-top" slot="page-top" />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout,
  },
  mounted() {
    this.renderKatex()
    this.renderViz()
    this.$router.afterEach(() => {
      requestAnimationFrame(() => {
        this.renderKatex()
        this.renderViz()
      })
    })
  },
  methods: {
    renderKatex() {
      renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        }
      );
    },
    renderViz() {
      _viz_call_when_loaded(() => {
        var vizPrefix = "language-viz-";
        var nodes = document.querySelectorAll("[class^=" + vizPrefix + "]");
  
        Array.prototype.forEach.call(nodes, function(x) {
          if(x.style.display === "none") {
            return;
          }
  
          var engine;
          x.getAttribute("class").split(" ").forEach(function(cls) {
            if (cls.startsWith(vizPrefix)) {
              engine = cls.substr(vizPrefix.length);
            }
          });
  
          var svg = Viz(x.innerText, {format: "svg", engine: engine});
          var image = new DOMParser().parseFromString(svg, "image/svg+xml");
          image.documentElement.classList.add ("viz-svg");
  
          x.parentNode.insertBefore(image.documentElement, x);
          x.style.display = 'none';
          x.parentNode.style.backgroundColor = "white";
        });
      });
    }
  }
}
</script>

<style>
.viz-svg {
  margin: auto;
  display: block;
  max-width: 100%;
}
</style>
