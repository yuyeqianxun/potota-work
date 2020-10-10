<template>
  <div class="navigation">
    <Breadcrumb :routes="routeState.route" separator=">">
      <template v-slot:itemRender="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${route.path}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </Breadcrumb>
    <p>{{ routeState.name }}</p>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { Breadcrumb } from "ant-design-vue";

interface map {
  [propName: string]:string
}

export default defineComponent({
  components: {
    Breadcrumb
  },
  setup() {
    const routes = [
      {
        path: "/",
        breadcrumbName: "首页"
      }
    ];
    const routeMap:map  = {
      "/reminder": "提醒事项"
    };

    const routeState = reactive({
      route: routes,
      name: "首页"
    });

    const { currentRoute } = useRouter();
    watch(
      () => currentRoute.value.path,
      () => {
        const url = currentRoute.value.path;
        if (url == "/") {
          routeState.route = [routes[0]];
          routeState.name = "首页";
        } else {
          routeState.route[1] = {
            path: url,
            breadcrumbName: routeMap[url]
          };
          routeState.name = routeMap[url];
        }
      }
    );
    return {
      routeState
    };
  }
});
</script>

<style lang="less" scoped>
.navigation {
  background-color: #ffffff;
  padding: 10px 20px;
  border-top: 1px solid #f3f3f3;
  p {
    font-size: 26px;
    font-weight: bold;
    margin: 10px 0;
  }
}
</style>
