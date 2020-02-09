<template>
    <div>
        <a-input-search class="search-input" enterButton/>

        <a-menu
                mode="inline"
                class="menu"
        >
            <a-menu-item key="all">全部记录</a-menu-item>

            <a-menu-divider/>

            <a-sub-menu key="sub1" @titleClick="">
                        <span slot="title">
                            <a-icon type="tags"/>
                            <span>标签</span>
                        </span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>

        <a-menu
                mode="inline"
                class="menu"
                :defaultOpenKeys="['sub1', 'sub2', 'sub3']"
        >
            <a-sub-menu key="sub1" @titleClick="">
                        <span slot="title">
                            <a-icon type="folder"/>
                            <span>数据库1</span>
                        </span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                        <span slot="title">
                            <a-icon type="setting"/>
                            <span>数据库2</span>
                        </span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub3">
                        <span slot="title">
                            <a-icon type="setting"/>
                            <span>数据库3</span>
                        </span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>

            <a-menu-divider/>

            <a-menu-item key="trash">回收站</a-menu-item>
        </a-menu>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Layout, Menu} from 'ant-design-vue'

  Vue.use(Layout)
  Vue.use(Menu)

  export default {
    name: 'NSidebar',
    comments: {
      Layout,
      Menu
    }
  }
</script>

<style scoped>
    .search-input {
        padding: 10px;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
    }

    .logo {
        padding: 10px;
        width: 250px;
    }

    .menu {
        border-right: none;
        /*margin-bottom: 12px;*/
    }
</style>
