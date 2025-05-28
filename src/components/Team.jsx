import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
    const teamMembers = [
        {
            name: 'Nguyễn Văn A',
            role: 'Founder & CEO',
            description: 'Chuyên gia IoT với 10 năm kinh nghiệm, dẫn dắt chiến lược phát triển sản phẩm.',
            image: './public/images/image.jpg',
        },
        {
            name: 'Trần Thị B',
            role: 'CTO',
            description: 'Chuyên gia phần mềm, thiết kế hệ thống tích hợp đa nền tảng cho LUXHOME.',
            image: './public/images/image.jpg',
        },
        {
            name: 'Lê Văn C',
            role: 'Lead Engineer',
            description: 'Chuyên gia điện tử, đảm bảo chất lượng phần cứng và tích hợp thiết bị.',
            image: './public/images/image.jpg',
        },
    ];

    return (
        <section className="py-5 bg-white">
            <Container>
                <h2 className="display-6 fw-bold text-center mb-5 animate-slide-up">Đội ngũ của chúng tôi</h2>
                <Row xs={1} md={3} className="g-4">
                    {teamMembers.map((member, index) => (
                        <Col key={index}>
                            <Card className="h-100 text-center bg-light shadow hover-scale animate-slide-up">
                                <Card.Img
                                    variant="top"
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-circle mx-auto mt-4"
                                    style={{ width: '8rem', height: '8rem' }}
                                />
                                <Card.Body>
                                    <Card.Title as="h3" className="fs-4">{member.name}</Card.Title>
                                    <Card.Subtitle className="text-blue-600 mb-2">{member.role}</Card.Subtitle>
                                    <Card.Text>{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Team;