import React from 'react';
import { Container } from 'react-bootstrap';

const ProjectIntro = () => (
    <section className="py-5 bg-white text-center">
        <Container className="animate-slide-up">
            <h2 className="display-6 fw-bold mb-4">Giới thiệu dự án LUXHOME</h2>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: '48rem' }}>
                LUXHOME là giải pháp nhà thông minh toàn diện, mang lại sự tiện nghi, an toàn và tiết kiệm cho gia đình Việt Nam. Với thị trường nhà thông minh dự kiến đạt 300 triệu USD vào 2025, LUXHOME tích hợp các thiết bị từ nhiều thương hiệu, cung cấp trải nghiệm điều khiển mượt mà qua một ứng dụng duy nhất. Chúng tôi tập trung vào tính dễ sử dụng, bảo mật dữ liệu, và dịch vụ hậu mãi tận tâm.
            </p>
            <p className="fs-5 fw-semibold text-blue-600">Sứ mệnh: Biến mọi ngôi nhà thành không gian sống thông minh, tiện nghi và an toàn.</p>
        </Container>
    </section>
);

export default ProjectIntro;