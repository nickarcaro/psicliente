import Auth from "../pages/Auth/Auth";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import LayoutBasic from "../layouts/LayoutBasic";

const routes = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Auth,
        exact: true,
      },
      {
        path: "/contacto",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
