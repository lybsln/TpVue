<template>
  <div class="hamburger-outer" @click="toggleClick" :class="{'is-active':isActive}">
    <svg t="1492500959545"  class="hamburger"  style="" viewBox="0 0 1024 1024"
      version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16">
      <path d="M911.2 668 400.8 668c-24.8 0-44.8-21.6-44.8-48s20-48 44.8-48l510.4 0c24.8 0 44.8 21.6 44.8 48S936 668 911.2 668zM911.2 444 400.8 444c-24.8 0-44.8-21.6-44.8-48s20-48 44.8-48l510.4 0c24.8 0 44.8 21.6 44.8 48S936 444 911.2 444zM908 228l-784 0c-26.4 0-48-21.6-48-48 0-26.4 21.6-48 48-48l784 0c26.4 0 48 21.6 48 48C956 206.4 934.4 228 908 228zM300 668l-224-160 224-160L300 668zM124 788l784 0c26.4 0 48 21.6 48 48s-21.6 48-48 48l-784 0c-26.4 0-48-21.6-48-48S97.6 788 124 788z" p-id="987" data-spm-anchor-id="a313x.7781069.0.i4" fill="#000000"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hamburger-outer',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
  /* display: inline-block; */
  width: 16px;
  height: 16px;
  /* transform: rotate(90deg); */
  /* transition: .38s; */
  /* transform-origin: 50% 50%; */
}

.hamburger.is-active {
  transform: rotate(0deg);
}

.hamburger-outer {
  width: 100%px;
  height: 100%px;
  text-align: center;
  cursor: pointer;
  padding-top: 3px;
}

.hamburger-outer:hover {
  background-color: #feeeee
}
</style>
