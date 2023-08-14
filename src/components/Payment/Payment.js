import React from 'react';
import images from '~/assets/images';
import './Payment.scss';
import Input from '../Input/';
function Payment() {
    return (
        <div className="payment-wrapper">
            <div className="payment-menthod">
                <p className="payment-menthod-title">Phương thức thanh toán</p>
                <ul className="payment-menthod-list">
                    <li className="payment-menthod-item active">
                        <div className="payment-menthod-main">
                            <img
                                src={images.momo}
                                alt=""
                                className="payment-menthod-logo"
                            />
                            <div className="payment-menthod-info">
                                <p className="payment-menthod-name"> Ví MOMO</p>
                                <p className="payment-menthod-description">
                                    Thanh toán dễ dàng bằng ứng dụng Momo trên
                                    điện thoại của bạn
                                </p>
                            </div>
                        </div>
                        <div className="payment-menthod-sub">
                            <form className="credit-form">
                                <ul className="credit-form-list">
                                    <li className="credit-form-item">
                                        <Input
                                            lable={'Số thẻ'}
                                            placeHolder={
                                                'Ex. 0000 0000 0000 0000'
                                            }
                                        />
                                    </li>
                                    <li className="credit-form-item">
                                        <Input
                                            lable={'Tên chủ thẻ'}
                                            placeHolder={'Ex. NGUYEN VAN A'}
                                        />
                                    </li>
                                    <li className="credit-form-item">
                                        <Input
                                            lable={'Ngày hết hạn'}
                                            placeHolder={'Ex. 12/12'}
                                        />
                                        <Input
                                            lable={'CVV / CVC'}
                                            placeHolder={'Ex. 0000'}
                                        />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </li>
                    <li className="payment-menthod-item">
                        <div className="payment-menthod-main">
                            <img
                                src={images.momo}
                                alt=""
                                className="payment-menthod-logo"
                            />
                            <div className="payment-menthod-info">
                                <p className="payment-menthod-name"> Ví MOMO</p>
                                <p className="payment-menthod-description">
                                    Thanh toán dễ dàng bằng ứng dụng Momo trên
                                    điện thoại của bạn
                                </p>
                            </div>
                        </div>
                        <div className="payment-menthod-sub"></div>
                    </li>
                    <li className="payment-menthod-item">
                        <div className="payment-menthod-main">
                            <img
                                src={images.momo}
                                alt=""
                                className="payment-menthod-logo"
                            />
                            <div className="payment-menthod-info">
                                <p className="payment-menthod-name"> Ví MOMO</p>
                                <p className="payment-menthod-description">
                                    Thanh toán dễ dàng bằng ứng dụng Momo trên
                                    điện thoại của bạn
                                </p>
                            </div>
                        </div>
                        <div className="payment-menthod-sub"></div>
                    </li>
                    <li className="payment-menthod-item">
                        <div className="payment-menthod-main">
                            <img
                                src={images.momo}
                                alt=""
                                className="payment-menthod-logo"
                            />
                            <div className="payment-menthod-info">
                                <p className="payment-menthod-name"> Ví MOMO</p>
                                <p className="payment-menthod-description">
                                    Thanh toán dễ dàng bằng ứng dụng Momo trên
                                    điện thoại của bạn
                                </p>
                            </div>
                        </div>
                        <div className="payment-menthod-sub"></div>
                    </li>
                </ul>
            </div>
            <div className="payment-bill">
                <div className="payment-bill-wrapper">
                    <p className="payment-bill-title">Thông tin chi tiết</p>
                    <ul className="payment-bill-list">
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Tên gói</p>
                            <p className="payment-bill-value">Gói Steam </p>
                        </div>
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Thời hạn gói</p>
                            <p className="payment-bill-value">
                                01 tháng - Tự động gia hạn
                            </p>
                        </div>
                    </ul>
                    <ul className="payment-bill-list">
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Ngày hiệu lực</p>
                            <p className="payment-bill-value">14/08/2023</p>
                        </div>
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Sử dụng đến</p>
                            <p className="payment-bill-value">Khi bạn hủy</p>
                        </div>
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">
                                Kì thanh toán tiếp theo
                            </p>
                            <p className="payment-bill-value">13/09/2023</p>
                        </div>
                    </ul>
                    <ul className="payment-bill-list">
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Trị giá</p>
                            <p className="payment-bill-value">69.000đ</p>
                        </div>
                        <div className="payment-bill-item">
                            <p className="payment-bill-key">Giảm giá</p>
                            <p className="payment-bill-value">0 đ</p>
                        </div>
                    </ul>
                    <div className="payment-bill-actions">
                        <button className="payment-bill-submit">
                            Đăng kí gói
                        </button>
                        <p className="payment-bill-caution">
                            Bằng việc thanh toán, bạn đồng ý với
                            <a href="" className="payment-bill-link">
                                Điều Khoản Sử Dụng
                            </a>
                            ,
                            <a href="" className="payment-bill-link">
                                Chính Sách
                            </a>
                            và
                            <a href="" className="payment-bill-link">
                                Quy Định Chung
                            </a>
                            của VieON, và ủy quyền cho VieON tự động gia hạn khi
                            hết hạn sử dụng. Bạn có thể hủy gia hạn bất cứ lúc
                            nào.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
