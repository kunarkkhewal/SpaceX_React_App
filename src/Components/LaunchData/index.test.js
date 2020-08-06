import React from "react";
import { mount } from "enzyme";
import LaunchData from "./index";
import {DataContext} from './../../App';

describe("LaunchData", () => {
    it('should render LaunchData component correctly', () => {
        const component = mount(<LaunchData/>, {
            wrappingComponent: DataContext.Provider,
            wrappingComponentProps: { value: { missionData: [{
                mission_name:'mock-name', 
                launch_year: 2006, 
                mission_id: 1, 
                launch_success: false, 
                links:{mission_patch_small: 'mock-img'},
                rocket: {first_stage: {cores: [{land_success: false}]}}
            }] } }
        });

        expect(component).toMatchSnapshot();
    });
});