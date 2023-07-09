import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import Axis from "./Axis";
// import mockAxios from "axios";
import * as math from "./Moc";

// Mock axios

jest.mock("axios");
var mockMultiply;

jest.mock("./Moc", () => {
  mockMultiply = jest.fn();
  return {
    ...jest.requireActual("./Moc"),
    add: jest.fn(),
    multiply: mockMultiply,
  };
});

// Mock component test

describe("mock component test", () => {
  // it("axios test",()=>{
  //     const wrapper = shallow(<Axis/>);
  //     jest.spyOn(mockAxios,"default").mockResolvedValue({
  //         data:{
  //             studentAge:"75"
  //         }
  //     })
  //     console.log("wrapper.state()",wrapper.state())
  //     return wrapper.instance().func().then((data)=>{
  //         console.log("wrapper.state()",wrapper.state())
  //     })
  // })

  it("math function test", () => {
    // console.log(math.add(12,12))
    math.add.mockImplementation(() => 25);
    expect(math.divide(12, 12)).toBe(1);
  });

  it("called function test", () => {
    const wrapper = shallow(<Axis />);
    wrapper.find("button").simulate("click");
    expect(mockMultiply).toBeCalled();
    expect(mockMultiply).toHaveBeenCalledTimes(1);
    expect(mockMultiply).toHaveBeenCalledWith(12, 24);
  });
});

// Setup and teardown

beforeAll(()=>{
  console.log("before all")
})


afterAll(()=>{
  console.log("afterAll")
})

beforeEach(()=>{
  console.log("beforeEach")
})

afterEach(()=>{
  console.log("afterEach")
})
