import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });
// import About from "./About.js";
import Article from "./Article";
import { shallow,mount } from "enzyme";
import Table from "./Table";

// Simulate test case tutorial

describe("Article component", () => {
  it("click count", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(".clicks-0").length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-0").length).toEqual(1);
  });

  it("click 3 count", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(".clicks-0").length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-2").length).toEqual(1);
  });

  it("dive", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toBe(1);
  });

  // Match snapshot

  it("snapshot 1", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  test("snapshot 2", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});

// Mount Full Rendering
// mount vs shallow

describe("mount vs shallow",()=>{
    test("snapshot 3", () => {
       let wrapper = shallow(<Article/>);
       console.log("shallow wrapper",wrapper.debug())

    //    mount
    let wrapper1 = mount(<Article/>);
       console.log("mount wrapper",wrapper1.debug())
      });
})
