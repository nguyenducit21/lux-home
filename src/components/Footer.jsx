import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
    <footer className="py-5 bg-dark text-white text-center">
        <Container>
            <p className="animate-slide-up">© 2025 LUXHOME. All rights reserved.</p>
            <p className="mt-2 animate-slide-up">
                Liên hệ: <a href="mailto:support@luxhome.vn" className="text-decoration-underline">support@luxhome.vn</a> | Hotline: 1800-1234
            </p>
        </Container>
    </footer>
);

export default Footer;