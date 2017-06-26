import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

describe('Post component', () => {
  it('should render as expected', () => {
    const component = shallow(<Post title="My post" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('should render with title type link', () => {
    const component = shallow(<Post title="My post" titleLink />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
