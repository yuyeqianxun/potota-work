<template>
  <Layout :style="{ top: 0, left: 0, bottom: 0, right: 0 }">
    <Sider v-model:collapsed="menuState.collapsed" :trigger="null" collapsible>
      <div class="logo">
        Potato Work
      </div>
      <Menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <Item key="1">
          <router-link to="/">
            <home-outlined />
            <span class="nav-text">首页</span>
          </router-link>
        </Item>
        <Item key="2">
          <router-link to="/reminder">
            <history-outlined />
            <span class="nav-text">提醒事项</span>
          </router-link>
        </Item>
      </Menu>
    </Sider>
    <Layout>
      <Head :collapsed="menuState.collapsed" :onCollapsed="onCollapsed" />
      <BreadCrumb />
      <Content
        :style="{
          margin: '24px 16px',
          padding: 24,
          height: 'calc( 100vh - 215px )',
          backgroundColor: '#fff'
        }"
      >
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Layout, Menu } from "ant-design-vue";
import { HomeOutlined, HistoryOutlined } from "@ant-design/icons-vue";
import Head from "./Head.vue";
import BreadCrumb from "./../BreadCrumb/index.vue";
const { Sider, Content } = Layout;
const { Item } = Menu;
export default defineComponent({
  name: "Layouter",
  components: {
    Layout,
    Sider,
    Head,
    Content,
    Menu,
    Item,
    BreadCrumb,
    HomeOutlined,
    HistoryOutlined
  },
  setup() {
    const menuState = reactive({
      collapsed: false
    });

    function onCollapsed(collapsed: boolean) {
      return (menuState.collapsed = !collapsed);
    }
    return {
      menuState,
      onCollapsed
    };
  }
});
</script>

<style lang="less" scoped>
.logo {
  text-align: center;
  color: #fff;
  font-size: 25px;
  line-height: 64px;
  overflow: hidden;
  height: 64px;
}
</style>
