import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from "react";
import Auth from "../../../pages/Auth";

describe("Prueba de <Auth/>", () => {
  test("debe mostrarse <Auth/> Correctamente", () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper).toMatchSnapshot();
  });
});
