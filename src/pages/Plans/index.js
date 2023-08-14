import React, { useState } from 'react';
import Payment from '~/components/Payment';
import PlanList from '~/components/PlanList';
import ProgressBar from '~/components/ProgressBar';

function Plans() {
    const [step, setStep] = useState(1);
    return (
        <div className="container spacing-header">
            <div className="header-page">
                <h1 className="title">HÃY CHỌN GÓI DỊCH VỤ PHÙ HỢP VỚI BẠN</h1>
                <p className="description">
                    Thanh toán một lần dùng ở mọi thiết bị.
                </p>
            </div>
            <div className="m-8">
                <ProgressBar />
            </div>
            <div className="m-16">
                {step === 0 && <PlanList />}
                {step === 1 && <Payment />}
            </div>
        </div>
    );
}

export default Plans;
