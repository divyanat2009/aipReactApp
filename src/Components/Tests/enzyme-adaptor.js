import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


export const configEnzymeAdapter = () => Enzyme.configure({adapter: new EnzymeAdapter()})