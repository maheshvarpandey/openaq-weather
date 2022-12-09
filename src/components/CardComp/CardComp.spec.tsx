import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import CardComp, { IProps } from "./index";

// Todo: expected this file will grow.

describe("CardComp", () => {
  let component: ShallowWrapper<IProps>;
  let props: IProps;

  it("should render properly", () => {
    givenComponent();
    thenItMatchSnapshot();
  });

  function givenComponent() {
    component = shallow(<CardComp {...props} />);
  }

  function thenItMatchSnapshot() {
    expect(component).toMatchSnapshot();
  }
});
