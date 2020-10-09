import Layout from '../layouter';
import Home from '../view/Home';
import Reminder from '../view/Reminder';
import Login from '../view/Login';
const routes = [
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: Layout,
    path: "/",
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/reminder",
        component: Reminder,
      }
    ]
  },
  
];

export default routes;