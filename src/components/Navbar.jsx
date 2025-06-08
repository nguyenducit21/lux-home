import React, { useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" className="navbar">
            <Container>
                <BootstrapNavbar.Brand href="#">
                    <img
                        src="/images/logo2.png"
                        alt="LUXHOME Logo"
                        style={{ height: '120px', width: 'auto' }}
                    />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="link">
                        <Nav.Link href="#intro">Giới thiệu</Nav.Link>
                        <Nav.Link href="#products">Sản phẩm</Nav.Link>
                        <Nav.Link href="#team">Đội ngũ</Nav.Link>
                        <Nav.Link href="#benefits">Lợi ích</Nav.Link>
                        <Nav.Link href="#social-proof">Khách hàng</Nav.Link>
                        <Nav.Link href="#cta">Đăng ký</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;