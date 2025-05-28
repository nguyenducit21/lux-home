import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SocialProof = () => (
    <section className="py-5 bg-white">
        <Container>
            <h2 className="display-6 fw-bold text-center mb-5 animate-slide-up">Khách hàng nói gì?</h2>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="h-100 bg-light shadow animate-slide-up">
                        <Card.Body>
                            <Card.Text className="fst-italic">
                                "LUXHOME giúp tôi kiểm soát toàn bộ ngôi nhà chỉ với một ứng dụng. Thật tiện lợi!"
                            </Card.Text>
                            <Card.Text className="mt-3 fw-semibold">- Anh Minh, Quản lý, Hà Nội</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 bg-light shadow animate-slide-up">
                        <Card.Body>
                            <Card.Text className="fst-italic">
                                "Tính năng kịch bản thông minh quá tuyệt! Mỗi tối, đèn và điều hòa tự động bật."
                            </Card.Text>
                            <Card.Text className="mt-3 fw-semibold">- Chị Lan, Freelancer, TP.HCM</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <p className="text-center mt-4 fs-5 animate-slide-up">
                Hơn <strong>5.000</strong> gia đình đã tin dùng LUXHOME!
            </p>
        </Container>
    </section>
);

export default SocialProof;