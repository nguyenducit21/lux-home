import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const products = [
        {
            name: 'Cảm biến cửa ziggbee',
            description: 'Giám sát trạng thái đóng/mở cửa, hỗ trợ tự động hóa và cảnh báo thông minh',
            detail: 'Tự động phát hiện trạng thái đóng/mở cửa, gửi cảnh báo tức thì khi phát hiện bất thường. Hỗ trợ thiết lập các kịch bản thông minh như tự bật đèn khi cửa mở hoặc khóa cửa khi rời nhà. Thiết kế nhỏ gọn, dễ lắp đặt, tương thích hệ sinh thái Zigbee.',
            image: '/images/door-sensor/Artboard 1.png',
            images: [
                '/images/door-sensor/Artboard 1.png',
                '/images/door-sensor/Artboard 2.png',
                '/images/door-sensor/Artboard 3.png'
            ],
        },
        {
            name: 'Cảm biến hiện diện zigbee',
            description: 'Phát hiện chuyển động, cảnh báo bất thường và hỗ trợ tự động kịch bản',
            detail: 'Giám sát chuyển động 24/7 trong không gian nhà bạn, phát hiện kịp thời mọi chuyển động lạ, tự động kích hoạt thiết bị như đèn, báo động hoặc camera khi có sự xuất hiện không mong muốn. Đem lại an tâm tuyệt đối cho ngôi nhà hiện đại.',
            image: '/images/presence-sensor/Artboard 1.png',
            images: [
                '/images/presence-sensor/Artboard 1.png',
                '/images/presence-sensor/Artboard 2.png',
                '/images/presence-sensor/Artboard 3.png',
            ],
        },
        {
            name: 'Công tắc wifi',
            description: 'Điều khiển thiết bị điện từ xa, hỗ trợ giọng nói và tự động hóa linh hoạt',
            detail: 'Cho phép bật/tắt thiết bị điện từ xa qua điện thoại hoặc bằng giọng nói với Alexa, Google Home. Có thể thiết lập các kịch bản tự động dựa trên cảm biến ánh sáng, chuyển động hoặc trạng thái cửa. Dễ dàng thay thế công tắc truyền thống, tăng tiện nghi và tiết kiệm năng lượng.',
            image: '/images/wifi-switch/Artboard 1.png',
            images: [
                '/images/wifi-switch/Artboard 1.png',
                '/images/wifi-switch/Artboard 2.png',
                '/images/wifi-switch/Artboard 3.png',
                '/images/wifi-switch/Artboard 4.png',
                '/images/wifi-switch/Artboard 5.png',

            ],
        },
        {
            name: 'Công tắc zigbee',
            description: 'Kết nối thông minh, điều khiển thiết bị qua app hoặc giọng nói, dễ dàng mở rộng hệ sinh thái nhà thông minh.',
            detail: 'Kết nối mượt mà với nhiều thiết bị thông minh trong hệ sinh thái Zigbee, điều khiển qua app, giọng nói hoặc tự động hóa. Độ ổn định cao, không phụ thuộc vào Wi-Fi, phù hợp lắp đặt cho các hệ thống smarthome cần sự ổn định và mở rộng linh hoạt.',
            image: '/images/switch/Artboard 1.png',
            images: [
                '/images/switch/Artboard 1.png',
                '/images/switch/Artboard 2.png',
                '/images/switch/Artboard 3.png',
                '/images/switch/Artboard 4.png',
                '/images/switch/Artboard 5.png',
            ],
        },
    ];

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setSelectedImage(product.image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
        setSelectedImage('');
    };

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <section id="products" className="py-5 bg-light">
            <Container>
                <h2 className="display-6 fw-bold text-center mb-5 animate-slide-up">Sản phẩm của LUXHOME</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {products.map((product, index) => (
                        <Col key={index}>
                            <Card className="h-100 text-center shadow hover-scale animate-slide-up" onClick={() => handleShowModal(product)}>
                                <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '19rem', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as="h3" className="fs-4">{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedImage} alt={selectedProduct?.name} className="product-image-large" />
                        <div className="product-thumbnails mt-3">
                            {selectedProduct?.images.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    alt={`${selectedProduct?.name} Thumbnail ${idx + 1}`}
                                    className={`product-thumbnail ${selectedImage === image ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(image)}
                                />
                            ))}
                        </div>
                        <p className="mt-3">{selectedProduct?.detail}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </section>
    );
};

export default Products;