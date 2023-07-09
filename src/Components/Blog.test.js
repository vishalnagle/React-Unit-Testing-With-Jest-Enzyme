import {configure} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';


configure({ adapter: new Adapter() });
import Blog from "./Blog.js";
import {shallow} from "enzyme";


describe("Blog Page test",()=>{
    it("to check there are three classes",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find(".liCls").length).toBe(3)
    })

    it("first li should be angular(at and key check)",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find(".liCls").at(0).key()).toBe("angular")
    })

    it("to check if child component is present",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find(".numbers").childAt(0).type()).toBe("span")
    })

    it("how many li elements in ul",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find("ul").children().length).toBe(3)
    })

    it("hasclass check disabled",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find(".my-button").hasClass("disabled")).toBe(true)
    })

    it("is check",()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.is(".mainCls")).toBe(true)
    })
})

