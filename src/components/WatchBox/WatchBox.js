import React from 'react';
import video from '~/assets/video/tearser.mp4';
import './WatchBox.scss';
function WatchBox() {
    return (
        <div className="watch-wrapper">
            <video src={video} className="watch-video" controls></video>
            <div className="watch-nav">
                <div className="watch-nav-list">
                    <li className="watch-nav-item">
                        <button className="watch-nav-btn">
                            <i className="fa-regular fa-arrow-left"></i>
                        </button>
                    </li>
                    <li className="watch-nav-item">
                        <button className="watch-nav-btn">
                            <i className="fa-regular fa-rotate-left"></i>
                        </button>
                    </li>
                    <li className="watch-nav-item">
                        <button className="watch-nav-btn">
                            <i className="fa-regular fa-flag"></i>
                        </button>
                    </li>
                </div>
            </div>
            <div className="watch-info">
                <div className="watch-name">Sát thủ đối đầu</div>
                <div className="watch-age">Xếp hạng: 18+</div>
                <div className="watch-gender">Hành động, Kinh dị</div>
            </div>
        </div>
    );
}

export default WatchBox;
