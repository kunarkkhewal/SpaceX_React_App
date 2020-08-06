import React from "react";
import { mount } from "enzyme";
import SuccessfulLaunch from "./index";

describe("SuccessfulLaunch", () => {
    it('should render SuccessfulLaunch component correctly', () => {
        const component = mount(<SuccessfulLaunch/>);

        expect(component).toMatchSnapshot();
    });
});