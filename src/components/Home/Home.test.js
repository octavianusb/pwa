import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Post from '../Post/Post'

describe('Home component', () => {
  it('should render posts as expected', () => {
    const post = [{
      "title": "lorem",
      "slug": "ipsum",
      "excerpt": "dolor",
      "content": "sit amet"
    },
    {
      "title": "sit amet",
      "slug": "dolor",
      "excerpt": "ipsum",
      "content": "lorem"
    }]
    const component = shallow(<Home posts={post} />)
    const tree = toJson(component)
    expect(component.find(Post).length).toBe(2)
    expect(tree).toMatchSnapshot()
  })

  it('shouldn\'t render posts', () => {
    const component = shallow(<Home posts={[]} />)
    const tree = toJson(component)
    expect(component.find(Post).length).toBe(0)
    expect(tree).toMatchSnapshot()
  })
})