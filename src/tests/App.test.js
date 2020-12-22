import "@testing-library/jest-dom";
import App, { RouteWithSubRoutes } from "../App";
import { shallow } from "enzyme";
import React from "react";
import routes from "./data/routes";

/* metodologia de las pruebas: 

-No se prueban los const, sino las funciones, clases (todo lo que retorne algo).

-  describe añade la descripcion de la prueba
*/

describe("Prueba de <App/>", () => {
  test("debe mostrarse <App/> Correctamente", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  // eslint-disable-next-line
  test("debe retornar <RouteWithSubRoutes /> correctamente ", () => {
    const wrapper = shallow(<RouteWithSubRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
  // eslint-disable-next-line
  test("probar que routewithsubroutes opere", () => {
    let state = RouteWithSubRoutes(routes);

    expect(state).toEqual(expect.arrayContaining([]));
    //debe retornar un arreglo vacio puesto que no se contextualiza la rutas
  });
});
