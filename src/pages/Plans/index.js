import React from 'react';
import PlanList from '~/components/PlanList';

function Plans() {
    return (
        <div className="container spacing-header">
            <div className="header-page">
                <h1 className="title">GÓI DỊCH VỤ</h1>
                <p className="description">
                    Thanh toán một lần dùng ở mọi thiết bị.
                </p>
            </div>
            <div className="m-16">
                <PlanList />
            </div>
        </div>
    );
}

export default Plans;
