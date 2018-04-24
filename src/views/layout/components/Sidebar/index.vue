<template>
  <scroll-bar>
    <!-- <el-menu mode="vertical " :collapse="isCollapse" class="logo-outer" background-color="#304156" text-color="#ffffff" active-text-color="#ffffff">
      <el-menu-item >
        <svg-icon icon-class="logo" style="width:24px;height:24px;margin-left:-4px;margin-right:11px;vertical-align: -0.5em;"></svg-icon>
        <span style="font-size:19px;font-weight:400;font-family:'Source Sans Pro', sans-serif;text-rendering: optimizeLegibility;">SlickLab</span>
      </el-menu-item>
    </el-menu> -->
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#32323a" text-color="#ffffff" active-text-color="#7cd8a9">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
