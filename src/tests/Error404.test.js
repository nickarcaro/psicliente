import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Error404 from "../pages/Error404";

describe("Pruebas de <Error404/>", () => {
  test("debe mostrar <Error404/> correctamente", () => {
    const texto = "Error 404 not found";

    const wrapper = shallow(<Error404 />);
    expect(wrapper).toMatchSnapshot();

    const textoDiv = wrapper.find("div").text();
    expect(textoDiv).toBe(texto);
  });
});
