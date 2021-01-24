import React from 'react';
import ReactDOM from 'react-dom';
import NewPost from '../NewPost';
import {shallow} from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {configEnzymeAdapter} from './enzyme-adaptor';

describe(`NewPost component`, () => {
    configEnzymeAdapter()
    it('renders without crashing', () => {
      //FilterButtonsForm
      const newpost = shallow(<NewPost></NewPost>);
      const findFilterButtonForm = newpost.find(FilterButtonForm); 
      expect(findFilterButtonForm.length).toBe(1);
      });

})