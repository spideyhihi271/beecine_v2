import React from 'react';
import './Carousel.scss';
import video from '~/assets/video/tearser.mp4';

function Carousel() {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-title">
                CUỘC CHIẾN VÔ CỰC ĐỘC QUYỀN TRÊN BEECINE
            </div>
            <div className="carousel-slider">
                <img
                    className="slider-bg"
                    src="https://cdn.home.vn/655360_70849780808812_2034238245306368?wt=7c8eb3558dea3bcc58f844fc0f2b0181&rt=34ced89090ce1e202ed8332722f23d0e"
                    alt=""
                />
                <div className="slider-container container">
                    <div className="slider-info">
                        <p className="slider-type">PHIM ĐIỆN ẢNH</p>
                        <h1 className="slider-title">SÁT THỦ ĐỐI ĐẦU</h1>
                        <p className="slider-description">
                            Cùng lên một chuyến tàu cao tốc của Nhật Bản đến
                            Kyoto, năm sát thủ phát hiện ra rằng các nhiệm vụ
                            tưởng chừng riêng biệt của họ lại có mối liên hệ bí
                            ẩn với nhau.
                        </p>
                    </div>
                    <img
                        className="slider-thumb"
                        src="https://cdn.home.vn/655360_70849780808812_2034238245306368?wt=7c8eb3558dea3bcc58f844fc0f2b0181&rt=34ced89090ce1e202ed8332722f23d0e"
                        alt=""
                    />
                    <div className="slider-pagination">
                        <ul className="pag-list">
                            <li className="pag-item pag-active">
                                <div className="pag-progress"></div>
                                <button className="pag-btn">
                                    Sát thủ đối đầu
                                </button>
                            </li>
                            <li className="pag-item">
                                <div className="pag-progress"></div>
                                <button className="pag-btn">
                                    Heart of Stone
                                </button>
                            </li>
                            <li className="pag-item">
                                <div className="pag-progress"></div>
                                <button className="pag-btn">
                                    Khách sạn vương giả
                                </button>
                            </li>
                            <li className="pag-item">
                                <div className="pag-progress"></div>
                                <button className="pag-btn">Thế chiến Z</button>
                            </li>
                            <li className="pag-item">
                                <div className="pag-progress"></div>
                                <button className="pag-btn">
                                    Cuộc chiến thượng lưu
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
