import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import LayoutBasic from "../layouts/LayoutBasic";

describe("pruebas del <layoutbasic/>", () => {
  test("debe mostrar <LayoutBasic/> correctamente", () => {
    const wrapper = shallow(<LayoutBasic />);
    expect(wrapper).toMatchSnapshot();
  });
});
