import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: '/images/slide.jpg',
            caption: 'Biến ngôi nhà của bạn thành không gian thông minh với LUXHOME',
        },
        {
            image: '/images/slide2.jpg',
            caption: 'Điều khiển mọi thiết bị từ đèn, camera đến khóa cửa trong một ứng dụng',
        },
        {
            image: '/images/slide3.png',
            caption: 'Giao diện trực quan, dễ sử dụng, hỗ trợ giọng nói với Alexa, Google Home',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="position-relative w-100" style={{ height: '500px', backgroundColor: '#1f2937', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-image ${index === currentSlide ? '' : 'hidden'}`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-100 h-100 object-fit-cover"
                            onError={() => console.log(`Failed to load image: ${slide.image}`)}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-center justify-content-center">
                            <div className="text-center text-white px-3">
                                <h1 className="display-4 fw-bold mb-4">{slide.caption}</h1>
                                <Button
                                    href="#cta"
                                    className="bg-yellow-400 text-black fw-semibold py-3 px-5 rounded-pill hover-scale"
                                >
                                    Khám phá ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Banner;