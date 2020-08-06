import React from "react";
import { mount } from "enzyme";
import Filter from "./index";

describe("Filter", () => {
    it('should render Filter component correctly', () => {
        const component = mount(<Filter/>);

        expect(component).toMatchSnapshot();
    });
});