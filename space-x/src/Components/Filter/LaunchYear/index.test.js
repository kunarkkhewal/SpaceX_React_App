import React from "react";
import { mount } from "enzyme";
import LaunchYear from "./index";

describe("LaunchYear", () => {
    it('should render LaunchYear component correctly', () => {
        const component = mount(<LaunchYear/>);

        expect(component).toMatchSnapshot();
    });
});