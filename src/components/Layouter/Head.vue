<template>
  <Header :style="{ background: '#fff', padding: '0 0 0 15px' }">
    <Row justify="space-between" type="flex">
      <Col :span="2">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="onCollapsed(collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="onCollapsed(collapsed)"
        />
      </Col>
      <Col :span="2">
        <Dropdown placement="bottomLeft">
          <Space :style="{ cursor: 'pointer' }">
            <Avatar />
            马小明
          </Space>
          <template v-slot:overlay>
            <Menu>
              <Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.alipay.com/"
                  >1st menu item</a
                >
              </Item>
              <Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.taobao.com/"
                  >2nd menu item</a
                >
              </Item>
              <Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.tmall.com/"
                  >3rd menu item</a
                >
              </Item>
            </Menu>
          </template>
        </Dropdown>
      </Col>
    </Row>
  </Header>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import {
  Layout,
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
  Space
} from "ant-design-vue";
const { Header } = Layout;
const { Item } = Menu;
export default defineComponent({
  name: "Head",
  components: {
    Header,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Row,
    Col,
    Menu,
    Dropdown,
    Avatar,
    Space,
    Item
  },
  props: ["collapsed", "onCollapsed"]
});
</script>

<style scoped></style>
