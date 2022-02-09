<svelte:options tag="tiny-modal" />

<script>
import { onMount } from 'svelte';
export let show = $$props['show'];

onMount(async () => {
  document.querySelectorAll('[data-show]').forEach((el) => {
    el.addEventListener('click', (ev) => {
      let target = ev.target;
      let id = target.getAttribute('data-show');
      document.querySelectorAll('tiny-modal').forEach((el) => {
        el.style.display = 'inline-block';
      });
      setTimeout(() => {
        document.querySelector('#' + id).setAttribute('show', true);
      }, 15)
    })
  })
});
</script>

<main>


  <div class="backdrop visible" class:visible="{show === 'true'}">
    <div class="close" on:click="{() => show = false}">&times;</div>
    <div class="screen"><div class="content"><slot></slot></div></div>
  </div>


</main>

<style>
.close{
position: fixed;
top: 10px;
right: 20px;
color: white;
font-size: 40px;
cursor: pointer;
}

.close:hover{
  color: #CCC;
}

.backdrop {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  opacity: 0;
}

.backdrop.visible {
  left: 0;
  opacity: 1;
}

.screen {
  max-width: 1000px;
  width: 1000px;
  min-height: 600px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
}


@media only screen and (max-width: 1100px) {
  .screen {
    height: 100%;
  }
  .content{
    padding: 50px 20px;
  }
  .close{
  color: black;
  }
  .close:hover{
    color: #333;
  }
}
</style>
