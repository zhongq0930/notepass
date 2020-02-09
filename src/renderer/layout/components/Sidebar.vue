<template>
    <div>
        <a-input-search class="search-input" enterButton/>

        <a-menu
                mode="inline"
                class="menu"
        >
            <a-menu-item key="all">全部记录</a-menu-item>
        </a-menu>


        <a-tabs
                defaultActiveKey="groups"
                @change=""
                style="text-align: center"
        >
            <a-tab-pane tab="分组" key="groups" style="text-align: left">
                <a-menu
                        mode="inline"
                        class="menu"
                        :defaultOpenKeys="['group1', 'group2', 'group3']"
                >
                    <a-sub-menu key="group1">
                        <span slot="title">
                            <a-icon type="folder"/>
                            <span>分组1</span>
                        </span>
                        <a-menu-item key="group1-1">
                            <a-icon type="folder"/>
                            <span>分组1-1</span>
                        </a-menu-item>
                        <a-menu-item key="group1-2">
                            <a-icon type="folder"/>
                            <span>分组1-2</span>
                        </a-menu-item>
                        <a-sub-menu key="sub3" title="Submenu">
                            <a-menu-item key="7">Option 7</a-menu-item>
                            <a-menu-item key="8">Option 8</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>

                    <a-menu-item key="add-group">
                        <a-icon type="plus-circle" />
                        <span>添加分组</span>
                    </a-menu-item>

                    <a-menu-divider/>

                    <a-menu-item key="deleted">
                        <a-icon type="delete" />
                        <span>回收站</span>
                    </a-menu-item>

                    <a-menu-divider/>
                </a-menu>
            </a-tab-pane>
            <a-tab-pane tab="标签" key="tabs">

            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Layout, Menu, Tabs} from 'ant-design-vue'

  Vue.use(Layout)
  Vue.use(Menu)
  Vue.use(Tabs)

  export default {
    name: 'NSidebar',
    comments: {
      Layout,
      Menu,
      Tabs
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
