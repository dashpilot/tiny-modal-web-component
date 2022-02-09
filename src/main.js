import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    show: true
  }
})

export default app