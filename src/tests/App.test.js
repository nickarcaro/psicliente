import "@testing-library/jest-dom";
import App from "../App";
import { shallow } from "enzyme";
import React from "react";

/* metodologia de las pruebas: 

-No se prueban los const, sino las funciones, clases (toda wa que retorne algo).

-  describe añade la descripcion de la prueba
*/

describe("Prueba de <App/>", () => {
  test("debe mostrarse <App/> Correctamente", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
