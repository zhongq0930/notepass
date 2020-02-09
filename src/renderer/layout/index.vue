<template>
    <div class="wrapper">
        <a-layout>
            <a-layout-sider>
                <n-sidebar/>
            </a-layout-sider>
            <a-layout-content>
                <router-view/>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
  import {NHeader, NSidebar} from './components'

  export default {
    name: 'Layout',
    components: {
      NHeader,
      NSidebar
    }
  }
</script>

<style scoped>
    .wrapper {
        background: #f8f8f8;
        height: 100vh;
        width: 100vw;
        border-top: 1px solid #e8e8e8;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .ant-layout {
        height: 100vh;
    }

    .ant-layout-header {
        padding: 0 24px;
        background-color: #ffffff;
        border-bottom: 1px solid #e8e8e8;
    }

    .ant-layout-sider {
        position: fixed;
        left: 0;
        flex: 0 0 250px !important;
        max-width: 250px !important;
        min-width: 250px !important;
        width: 250px !important;
        height: 100vh;
        background-color: #ffffff;
        border-right: 1px solid #e8e8e8;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .ant-layout-content {
        margin-left: 250px;
    }

    .wrapper::-webkit-scrollbar,
    .ant-layout-sider::-webkit-scrollbar,
    .ant-layout-content::-webkit-scrollbar {
        display: none;
    }
</style>
