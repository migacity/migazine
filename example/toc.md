---
class: "toc"
---


<div id="app">
<nav id="toc" role="doc-toc">

  # もくじ

<h2>目次</h2>
<ol>
  <li><a href="illust-01.html">illust-01</a></li>
    <li v-for="(v, i) of list" :key="i"><a :href="`${v}.html`">{{ v }}</a></li>
</ol>
</nav>

</div>

<script src="https://unpkg.com/vue@3.2.37/dist/vue.global.js"></script>
<script>
  console.log('hoge')
  const App = {
    setup() {
      const list = Vue.ref([
        "illust-01",
        "illust-02",
      ])

      return {
        list,
      }
    },
  } 

  Vue.createApp(App).mount('#app')
</script>