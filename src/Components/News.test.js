import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });
// import About from "./About.js";
import News from "./News";
import { shallow } from "enzyme";

describe("instance, state, props ...", () => {
  // (1) Instance
  // Difference between toBe and toEqual...toBe is used for single value and toEqual is used for object
  it("instance testing", async () => {
    let wrapper = shallow(<News />);
    let anyfn = wrapper.instance().checkBoxChecked();
    expect(anyfn).toBe(4);
  });

  //   (2) Promises
  it("loadData func testing", async () => {
    let wrapper = shallow(<News />);
    return wrapper
      .instance()
      .loadData()
      .then((data) => {
        // console.log("data",data)
        expect(data).toEqual({ me: 12 });
      });
  });

  //   (3) Jest.spyon componentDidMount()
  it("loadData func testing", async () => {
    jest.spyOn(News.prototype, "componentDidMount");
    shallow(<News />);
    expect(News.prototype.componentDidMount).toHaveBeenCalled();
    expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    News.prototype.componentDidMount.mockRestore();
  });

  it("func testing 2 ", async () => {
    let wrapper = shallow(<News />);
    let instance = wrapper.instance();
    jest.spyOn(instance, "func");
    wrapper.find("button").simulate("click");
    expect(instance.func).toHaveBeenCalled();
    expect(instance.func).toHaveBeenCalledWith(90,80);
  });

// (4) State testing
  it("State testing",() => {
    let wrapper = shallow(<News />);
    console.log(wrapper.state())
    return wrapper
      .instance()
      .loadData()
      .then((data) => {
        // console.log("data",data)
        expect(data).toEqual({ me: 12 });
        // setState value after success server request
        console.log(wrapper.state())
        expect(wrapper.state().newscount).toEqual(50)
      });
  });

  // (5) Props testing

  it("Props testing",() => {
    let wrapper = shallow(<News />);
    let inputProp = wrapper.find("input").props();
    console.log("inputProp",inputProp)
    let matchProps = {
      type:"text",
      id:"firstname",
      value:"codeimprove",
      name:"firstname"
    }
    expect(inputProp).toEqual(matchProps)
  });
});
