import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function TopMenu() {
  return (
    <Menu attached="top" className="top-menu" as="nav">
      <Container text>
        <Menu.Item header>
          <NavLink to="/">Hacker News</NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NavLink to="/news">news</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/newest">newest</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/ask">ask</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/show">show</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/jobs">jobs</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
