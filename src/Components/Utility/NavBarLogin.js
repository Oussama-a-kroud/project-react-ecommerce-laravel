import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
const NavBarLogin = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState("");
  const OnchangeSearch = async (e) => {
    const path = window.location.pathname;

    if (path != "/products/") {
      window.location.href = "/products/";
    }
    setSearchWord(e.target.value);
    console.log(e.target.value);
    await dispatch(getOneProduct());
    window.location.href = "/products/"+e.target.value;

    
  };
  return (
    <div>
      <Navbar className="sticky-top" bg="secondary" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              value={searchWord}
              onChange={OnchangeSearch}
              path="products"
              type="search"
              placeholder="search..."
              className="me-2 w-100 text-center "
              aria-label="Search"
            />
            <Nav className="me-auto">
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-2 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}></p>
              </Nav.Link>
              <Nav.Link
                href="/cart"
                className="nav-text d-flex mt-2 justify-content-center"
                style={{ color: "white" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}></p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarLogin;
