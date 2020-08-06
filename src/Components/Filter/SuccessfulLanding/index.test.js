import React from "react";
import { mount } from "enzyme";
import SuccessfulLanding from "./index";

describe("SuccessfulLanding", () => {
    it('should render SuccessfulLanding component correctly', () => {
        const component = mount(<SuccessfulLanding/>);

        expect(component).toMatchSnapshot();
    });
});