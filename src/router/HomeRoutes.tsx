import { Home } from "../components/pages/Home";
import { UserManegement } from "../components/pages/UserManegement";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManegement />,
  },

  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
