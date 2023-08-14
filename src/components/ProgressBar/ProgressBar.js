import React from 'react';

import './ProgressBar.scss';
function ProgressBar() {
    return (
        <div className="progress-bar">
            <div className="progress-line">
                <div className="progress-real"></div>
            </div>
            <ul className="progress-list">
                <li className="progress-item">
                    <p className="progress-lable active">Chọn gói dịch vụ</p>
                </li>
                <li className="progress-item">
                    <p className="progress-lable">Thanh toán gói cước</p>
                </li>
                <li className="progress-item">
                    <p className="progress-lable">Xác nhận thanh toán</p>
                </li>
                <li className="progress-item">
                    <p className="progress-lable">Bắt đầu sử dụng</p>
                </li>
            </ul>
        </div>
    );
}

export default ProgressBar;
