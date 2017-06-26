import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe('Header component', () => {
  it('should render as expected', () => {
    const component = shallow(<Header />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})