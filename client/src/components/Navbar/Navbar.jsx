import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'
const BareNav = () => {
  const isAuth = useSelector(state=>state.authReducer.isAuth)
  const user = useSelector(state=>state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
        {" "}
        <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ?
            (<>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="#" onClick={()=>dispatch(logout(navigate))}>Logout</Nav.Link>
            </>):(
              <>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            </>
          )}
         {user.isAdmin && <Nav.Link href="/dash">Dashboard</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default BareNav