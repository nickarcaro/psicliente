const routes = [
  {
    path: "/",
    component: "LayoutBasic",
    exact: false,
    routes: [
      {
        path: "/",
        component: "Auth",
        exact: true,
      },
      {
        path: "/contacto",
        component: "Contact",
        exact: true,
      },
      {
        component: "Error404",
      },
    ],
  },
];

export default routes;
