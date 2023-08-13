import React from 'react';
import './PlanList.scss';
import { Link } from 'react-router-dom';

function PlanList() {
    return (
        <section className="plans-container">
            <ul className="plans-list">
                <li className="plan-item">
                    <header className="plan-info">
                        <div className="plan-name">Teams</div>
                        <div className="plan-price">
                            <p>$19</p>
                            <span>/tháng</span>
                        </div>
                        <div className="plan-used">+1,140 billed annylly</div>
                    </header>
                    <main className="plan-features">
                        <p className="features-title">Chức năng:</p>
                        <ul className="features-list">
                            <li className="features-item">
                                <i className="fa-light fa-check"></i>
                                <p className="features-content">
                                    Editor extension
                                </p>
                            </li>
                            <li className="features-item">
                                <i className="fa-light fa-check"></i>
                                <p className="features-content">
                                    Editor extension
                                </p>
                            </li>
                            <li className="features-item">
                                <i className="fa-light fa-check"></i>
                                <p className="features-content">
                                    Editor extension
                                </p>
                            </li>
                            <li className="features-item">
                                <i className="fa-light fa-check"></i>
                                <p className="features-content">
                                    Editor extension
                                </p>
                            </li>
                        </ul>
                        <button className="plan-register-btn">
                            Start a free trial
                        </button>
                    </main>
                </li>
            </ul>
            <p className="plan-more">
                Tôi cần thêm thông tin về gói cước ?
                <Link to={''} className="plan-more-link">
                    Tìm hiểu thêm thông tin về gói cước của BeeCine
                </Link>
            </p>
        </section>
    );
}

export default PlanList;
