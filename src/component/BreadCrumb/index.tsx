import React from "react";
import {
  Link,
  withRouter,
} from "react-router-dom";
import { Breadcrumb } from "antd";
import "./index.less";

const routeMap:any = {
    '/reminder':'提醒事项'
}

const BreadCrumb = withRouter(({ location }) => {
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  let name = '首页';
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    name = routeMap[url];
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{name}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="navigation">
      <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
      <p>{name}</p>
    </div>
  );
});

export default BreadCrumb;
