import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import About from './About'

describe('About component', () => {
  it('should render as expected', () => {
    const component = shallow(<About />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})