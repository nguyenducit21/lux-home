import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const CTA = () => (
    <section id="cta" className="py-5 bg-gradient-blue text-white text-center">
        <Container>
            <h2 className="display-6 fw-bold mb-4 animate-slide-up">Bắt đầu với LUXHOME ngay hôm nay!</h2>
            <p className="fs-5 mb-4 animate-slide-up">Dùng thử miễn phí hoặc nhận tư vấn giải pháp trọn gói.</p>
            <InputGroup className="email mb-4" style={{ maxWidth: '28rem' }}>
                <FormControl
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="p-3 rounded-start-pill"
                />
                <Button
                    className="bg-yellow-400 text-black fw-semibold py-3 px-4 rounded-end-pill hover-scale"
                >
                    Đăng ký ngay
                </Button>
            </InputGroup>
            <p className="fs-6 animate-slide-up">Cam kết hoàn tiền 100% nếu không hài lòng trong 30 ngày!</p>
        </Container>
    </section>
);

export default CTA;