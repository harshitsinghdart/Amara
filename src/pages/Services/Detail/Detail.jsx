import React from 'react';
import './Detail.css';

const Detail = () => {
    return (
        <>
            {/* Header Section */}
            <div className="detail-contact-header">
                <h1>COSMETIC SURGERY</h1>
                <div className="detail-breadcrumb">
                    <span>Home</span>
                    <span className="detail-separator">›</span>
                    <span className="detail-current">Our Services</span>
                    <span className="detail-separator">›</span>
                    <span className="detail-current">COSMETIC SURGERY</span>
                </div>
            </div>

            <div className="detail-container">
                <div className="detail-main">
                    <div className="detail-left">
                        <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three.webp" alt="Skin Treatment" className="detail-main-image" />
                        <h2>GRAVIDA NEQUECO</h2>
                        <p>
                            Suspendisse aliquam mi et mi sagittis, ac congue orci volutpat...
                        </p>

                        <h3>CURABITUR PELLENTESQUE ODIO MAGNA</h3>
                        <p>
                            Donec luctus orci elit, vel mollis nisl cursus sit amet...
                        </p>

                        <div className="detail-before-after-section">
                            <div className="detail-image-block">
                                <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-before.webp" alt="Before" />
                            </div>
                            <div className="detail-image-block">
                                <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-after.webp" alt="After" />
                            </div>
                        </div>

                        <div className="detail-video-preview-section">
                            <h2>STET CLITA KASD GUBERGRE</h2>
                            <p>
                                Donec luctus orci elit, vel mollis nisl cursus sit amet...
                            </p>

                            <div className="detail-video-thumbnail">
                                <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-image.webp" alt="Video preview" />
                                <div className="detail-play-button">
                                    <span>▶</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-service-navigation">
                            <button className="detail-nav-btn detail-prev" disabled>
                                <span>&lt;</span> NO PREVIOUS SERVICE TO SHOW!
                            </button>

                            <button
                                className="detail-nav-btn detail-next"
                                onClick={() => window.location.href = "/cosmetic-surgery"}
                            >
                                NEXT SERVICE <span>&gt;</span>
                            </button>
                        </div>
                    </div>

                    <div className="detail-right">
                        <ul className="detail-category-list">
                            <li className="detail-active">ACNE TREATMENT</li>
                            <li>COSMETIC SURGERY</li>
                            <li>MOLES & SKIN</li>
                            <li>MELASMA TREATMENT</li>
                            <li>ANTI AGING SURGERY</li>
                            <li>NAIL TREATMENT</li>
                            <li>WART REMOVAL</li>
                            <li>SKIN TREATMENT</li>
                        </ul>

                        <div className="detail-skin-care-banner">
                            <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/right-sidebar-banner.jpg" alt="Skin Care Banner" />
                            <button className="detail-book-button">
                                BOOK APPOINTMENT <span className="detail-arrow">›</span>
                            </button>
                        </div>

                        <div className="detail-contact-us">
                            <h3>CONTACT US</h3>
                            <div className="detail-contact-item">
                                <span className="detail-contact-icon">📞</span>
                                <span>(000) 123-456-789</span>
                            </div>
                            <div className="detail-contact-item">
                                <span className="detail-contact-icon">📍</span>
                                <span>4128 Franklin St,<br />California(CA), 95350</span>
                            </div>
                            <div className="detail-contact-item">
                                <span className="detail-contact-icon">✉️</span>
                                <span>sirpi@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
