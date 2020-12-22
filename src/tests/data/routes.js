//pages
import Auth from "../../pages/Auth/Auth";
import Contact from "../../pages/Contact";
import Error404 from "../../pages/Error404";

//layouts
import LayoutBasic from "../../layouts/LayoutBasic";

const routes = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
