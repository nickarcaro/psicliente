import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from "react";
import Contact from "../../pages/Contact";

describe("pruebas en Contact", () => {
  test("debe mostrar <Contact/> correctamente", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
