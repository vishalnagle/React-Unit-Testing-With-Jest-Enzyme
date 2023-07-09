import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import Forms from "./Forms";

// Function component test

describe("functional component",()=>{
    it("test state",()=>{
        const wrapper = shallow(<Forms/>)
        wrapper.find(".changeBtn").simulate("click")
        // console.log(wrapper.find("p").text())
        expect(wrapper.find("p").text()).toBe("Nooo")
    })

    it("gender state",()=>{
        const wrapper = shallow(<Forms/>)
        
        const btn = wrapper.find("button").last();
         btn.simulate("click",()=>{
            target:{
                getAttribute : ()=>{
                     return btn.props()["data-gender"]
                } 
            }
         })
         expect(wrapper.find(".box.female").length).toEqual(1)
    })
})