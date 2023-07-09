import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });
// import About from "./About.js";
import About from "./About.js";
import { shallow } from "enzyme";

describe("About us page", () => {
  it("state check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.state()).toEqual({ name: "code improve", id: 111 });
  });

  it("html msg check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true);
  });

  it("only msg check", () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAllMatchingElements([<div className="h1cls">Hello</div>])
    ).toEqual(true);
  });

  it("any msg check", () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAnyMatchingElements([<div className="h1cls">Hello</div>,<div className="h1cls">Help</div>])
    ).toEqual(true);
  });

  
});
