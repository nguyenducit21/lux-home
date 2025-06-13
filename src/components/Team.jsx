import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
    const teamMembers = [
        {
            name: 'Trần Anh Tuấn',
            role: 'CEO & CTO',
            description: 'Lãnh đạo và định hướng công ty. Quản lý chính bộ phận kỹ thuật',
            image: './images/team/tuan.png',
        },
        {
            name: 'Nguyễn Bá Đức',
            role: 'CPO',
            description: 'Quản lý chiến lược và phát triển sản phẩm, làm việc với đội ngũ kỹ thuật',
            image: './images/team/duc.png',
        },
        {
            name: 'Nguyễn Quang Nghĩa',
            role: 'CSO ',
            description: 'Bảo đảm an toàn thông tin và an ninh mạng',
            image: './images/team/nghia.png',
        },
        {
            name: 'Phạm Mai Chi',
            role: 'CMO',
            description: 'Xây dựng chiến lược tiếp thị. Quản lý và lãnh đạo nhóm bán hàng. Nghiên cứu thị trường.',
            image: './images/team/chi.png',
        },
        {
            name: 'Chu Quỳnh Trang',
            role: 'CFO',
            description: 'Quản lý nguồn tài chính của doanh nghiệp thông qua việc nghiên cứu, phân tích các kế hoạch tài chính',
            image: './images/team/trang.png',
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