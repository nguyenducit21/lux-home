import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Benefits = () => {
    const benefits = [
        {
            title: 'Tích hợp đa thiết bị',
            description: 'Điều khiển đèn, camera, khóa cửa từ Philips Hue, Xiaomi, Lumi... trong một ứng dụng duy nhất.',
        },
        {
            title: 'Tự động hóa thông minh',
            description: 'Tạo kịch bản cá nhân hóa như "Đi làm về" hoặc "Đi ngủ" để tự động điều chỉnh thiết bị.',
        },
        {
            title: 'Bảo mật tối ưu',
            description: 'Dữ liệu mã hóa an toàn, nhận cảnh báo tức thì khi có sự cố như cửa mở trái phép.',
        },
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <h2 className="display-6 fw-bold text-center mb-5 animate-slide-up">Tại sao chọn LUXHOME?</h2>
                <Row xs={1} md={3} className="g-4">
                    {benefits.map((benefit, index) => (
                        <Col key={index}>
                            <Card className="h-100 text-center shadow hover-scale animate-slide-up">
                                <Card.Body>
                                    <Card.Title as="h3" className="fs-4">{benefit.title}</Card.Title>
                                    <Card.Text>{benefit.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;