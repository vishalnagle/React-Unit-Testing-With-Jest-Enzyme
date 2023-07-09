import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@cfaester/enzyme-adapter-react-18';
configure({ adapter: new Adapter() });
import Home from './Home';
import {shallow} from "enzyme";


describe("Shallow home page",()=>{
    let wrapper = shallow(<Home/>)
    // console.log(wrapper.debug())
    it("class check",()=>{
        expect(wrapper.exists(".homecls")).toEqual(true)
    })
    
})

