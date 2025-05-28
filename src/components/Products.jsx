import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Products = () => {
    const products = [
        {
            name: 'Đèn thông minh',
            description: 'Điều khiển ánh sáng theo tâm trạng, tự động bật/tắt theo kịch bản.',
            image: '/images/smarthome.jpg',
        },
        {
            name: 'Camera an ninh',
            description: 'Giám sát 24/7, nhận cảnh báo tức thì khi có chuyển động bất thường.',
            image: '/images/smarthome.jpg',
        },
        {
            name: 'Cảm biến thông minh',
            description: 'Phát hiện ánh sáng, chuyển động, hoặc cửa mở để kích hoạt kịch bản.',
            image: '/images/smarthome.jpg',
        },
        {
            name: 'Trung tâm điều khiển',
            description: 'Kết nối mọi thiết bị trong nhà, hỗ trợ điều khiển bằng giọng nói.',
            image: '/images/smarthome.jpg',
        },
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <h2 className="display-6 fw-bold text-center mb-5 animate-slide-up">Sản phẩm của LUXHOME</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {products.map((product, index) => (
                        <Col key={index}>
                            <Card className="h-100 text-center shadow hover-scale animate-slide-up">
                                <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '12rem', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as="h3" className="fs-4">{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Products;