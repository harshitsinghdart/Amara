import React from 'react';
import './Detail.css';

const Detail = () => {
    return (
        <>
            {/* Header Section */}
            <div className="contact-header">
                <h1>COSMETIC SURGERY</h1>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span className="separator">›</span>
                    <span className="current">Our Services</span>
                    <span className="separator">›</span>
                    <span className="current">COSMETIC SURGERY</span>
                </div>
            </div>

            <div className="detail-container">
                <div className="detail-main">
                    <div className="detail-left">
                        <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three.webp" alt="Skin Treatment" className="main-image" />
                        <h2>GRAVIDA NEQUECO</h2>
                        <p>
                            Suspendisse aliquam mi et mi sagittis, ac congue orci volutpat. Cras sit amet lectus id magna scelerisque gravida nec eu lorem.
                            Vestibulum at lectus venenatis, varius mauris quis, venenatis erat. Sed iaculis ultricies augue, ac tincidunt arcu tincidunt sit.
                            Sed commodo convallis nibh. Donec fermentum non nibh sit amet fringilla. Donec hendrerit dui eget justo imperdiet mollis.
                            Vestibulum imperdiet euismod lorem vitae aliquam. Curabitur a nibh pulvinar pharetra nec non sem. Suspendisse potenti.
                        </p>

                        <h3>CURABITUR PELLENTESQUE ODIO MAGNA</h3>
                        <p>
                            Donec luctus orci elit, vel mollis nisl cursus sit amet. Nam ut enim bibendum, placerat nulla ac, vestibulum urna. Praesent enim erat,
                            consectetur vitae tempus sed, dapibus id nunc. Maecenas in purus cursus, efficitur massa nec, ullamcorper arcu. Integer justo nibh
                            suscipit ut tincidunt ut, blandit id quam. Maecenas et cursus metus. Aenean luctus consequat sapien, eget accumsan justo.
                        </p>
                        <div className="before-after-section">
                            <div className="image-block">
                                <img
                                    src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-before.webp"
                                    alt="Before"
                                />
                                {/* <p className="label">BEFORE</p> */}
                            </div>
                            <div className="image-block">
                                <img
                                    src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-after.webp"
                                    alt="After"
                                />
                                {/* <p className="label">AFTER</p> */}
                            </div>
                        </div>

                        <div className="video-preview-section">
                            <h2>STET CLITA KASD GUBERGRE</h2>
                            <p>
                                Donec luctus orci elit, vel mollis nisl cursus sit amet. Nam ut enim bibendum, placerat nulla ac, vestibulum urna.
                                Praesent enim erat, consectetur vitae tempus sed, dapibus id nunc. Maecenas in purus cursus, efficitur massa nec,
                                ullamcorper arcu. Integer justo nib suscipit ut tincidunt ut, blandit id quam. Maecenas et cursus metus. Aenean
                                luctus consequat sapien, eget accumsan justo.
                            </p>

                            <div className="video-thumbnail">
                                <img
                                    src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/service-detail-three-image.webp"
                                    alt="Video preview"
                                />
                                <div className="play-button">
                                    <span>▶</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-navigation">
                            <button className="nav-btn prev" disabled>
                                <span>&lt;</span> NO PREVIOUS SERVICE TO SHOW!
                            </button>

                            <button
                                className="nav-btn next"
                                onClick={() => {
                                    // Redirect to the next service (e.g. using React Router)
                                    window.location.href = "/cosmetic-surgery"; // Update with actual route
                                }}
                            >
                                NEXT SERVICE <span>&gt;</span>
                            </button>
                        </div>



                    </div>
                    <div className="detail-right">
                        <ul className="category-list">
                            <li className="active">ACNE TREATMENT</li>
                            <li>COSMETIC SURGERY</li>
                            <li>MOLES & SKIN</li>
                            <li>MELASMA TREATMENT</li>
                            <li>ANTI AGING SURGERY</li>
                            <li>NAIL TREATMENT</li>
                            <li>WART REMOVAL</li>
                            <li>SKIN TREATMENT</li>
                        </ul>
                        <div className="skin-care-banner">
                            <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/right-sidebar-banner.jpg" alt="Skin Care Banner" />
                            <button className="book-button">
                                BOOK APPOINTMENT <span className="arrow">›</span>
                            </button>
                        </div>
                        <div className="contact-us">
                            <h3>CONTACT US</h3>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>(000) 123-456-789</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>4128 Franklin St,<br />California(CA), 95350</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
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
