import React from "react";
import { mount } from "enzyme";
import BooleanButton from "./index";

describe("BooleanButton", () => {
    it('should render BooleanButton component correctly', () => {
        const component = mount(<BooleanButton/>);

        expect(component).toMatchSnapshot();
    });
});