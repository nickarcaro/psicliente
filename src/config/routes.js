//pages
import Auth from "../pages/Auth/Auth";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

//AdminPages (usuario ya autentitcado)
import Profile from "../pages/Admin/Profile";
import Users from "../pages/Admin/Users";
import Patients from "../pages/Admin/Patients";
import Consultants from "../pages/Admin/Consultants";
import Home from "../pages/Admin/Home";
//layouts
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutAdmin from "../layouts/LayoutAdmin";

const routes = [
  {
    path: "/home",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/home",
        component: Home,
        exact: true,
      },
      {
        path: "/home/perfil",
        component: Profile,
        exact: true,
      },
      {
        path: "/home/pacientes",
        component: Patients,
        exact: true,
      },
      {
        path: "/home/consultantes",
        component: Consultants,
        exact: true,
      },
      {
        path: "/home/usuarios",
        component: Users,
        exact: true,
      },
    ],
  },
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
