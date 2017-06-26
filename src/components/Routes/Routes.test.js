import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Routes from './Routes'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

describe('Routes component', () => {
  it('should render the Home component when visiting /', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    )
    expect(component.find(Home).length).toBe(1)
  })

  it('should render the About component when visiting /about', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/about']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    )
    expect(component.find(About).length).toBe(1)
  })

  it('should render the PostDetail component when visiting /post/:slug', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/post/how-to-build-a-progressive-web-app-with-react']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    )
    expect(component.find(PostDetail).length).toBe(1)
  })

  it('should render the NotFound component when page dosen\'t exist', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/inexistend-page']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    )
    expect(component.find(NotFound).length).toBe(1)
  })
})
