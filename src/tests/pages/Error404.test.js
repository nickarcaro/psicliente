import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Error404 from "../../pages/Error404";

describe("Pruebas de <Error404/>", () => {
  test("debe mostrar <Error404/> correctamente", () => {
    const wrapper = shallow(<Error404 />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe estar el texto error 404", () => {
    const wrapper = shallow(<Error404 />);
    const texto = "Error 404 not found...";
    const textoDiv = wrapper.find("h1").text();
    expect(textoDiv).toBe(texto);
  });
});
