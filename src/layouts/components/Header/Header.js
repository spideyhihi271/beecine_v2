import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Assets

import images from '~/assets/images';
import Popper from '~/components/Popper';
import config from '~/configs';
import './Header.scss';

function Header() {
    const image =
        'https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/11718d2f5e7c6e68da3b4959_rw_600.png?h=287f1b3bd0b666897ae600e854a0c251';

    const headerRef = useRef();
    useEffect(() => {
        const handelScrollPage = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                headerRef.current.classList.add('header-active');
            } else {
                headerRef.current.classList.remove('header-active');
            }
        };
        window.addEventListener('scroll', handelScrollPage);
        return () => {
            window.removeEventListener('scroll', handelScrollPage);
        };
    }, []);
    return (
        <div className="header-wrapper" ref={headerRef}>
            <div className="header-container container">
                <Link className="header-logo">
                    <img
                        className="header-logo-link"
                        src={images.logo}
                        alt=""
                    />
                </Link>
                <div className="header-nav">
                    <div className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                to={config.routes.home}
                                className="nav-link"
                            >
                                Trang chủ
                            </NavLink>
                            <div className="nav-line"></div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={config.routes.movies}
                                className="nav-link"
                            >
                                Phim điện ảnh
                            </NavLink>
                            <div className="nav-line"></div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={config.routes.tvSeries}
                                className="nav-link"
                            >
                                Chương trình truyền hình
                            </NavLink>
                            <div className="nav-line"></div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={config.routes.tvSeries}
                                className="nav-link"
                            >
                                Mới và Nổi bật
                            </NavLink>
                            <div className="nav-line"></div>
                        </li>
                    </div>
                </div>
                <div className="header-actions">
                    <ul className="actions-list">
                        <li className="actions-item">
                            <Link
                                to={config.routes.search}
                                className="actions-link"
                            >
                                <i className="fa-light fa-magnifying-glass"></i>
                            </Link>
                        </li>
                        <li className="actions-item">
                            <Popper
                                show={
                                    <div className="notify-wrapper">
                                        <ul className="notify-list">
                                            <li className="notify-item">
                                                <Link className="notify-link">
                                                    <img
                                                        src="https://cdn.home.vn/655360_70849780808812_2034238245306368?wt=7c8eb3558dea3bcc58f844fc0f2b0181&rt=34ced89090ce1e202ed8332722f23d0e"
                                                        alt=""
                                                        className="notify-image"
                                                    />
                                                    <div className="notify-info">
                                                        <p className="notify-title">
                                                            Thông báo 1
                                                        </p>
                                                        <p className="notify-send">
                                                            1 ngày trước
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="notify-item">
                                                <Link className="notify-link">
                                                    <img
                                                        src="https://cdn.home.vn/655360_70849780808812_2034238245306368?wt=7c8eb3558dea3bcc58f844fc0f2b0181&rt=34ced89090ce1e202ed8332722f23d0e"
                                                        alt=""
                                                        className="notify-image"
                                                    />
                                                    <div className="notify-info">
                                                        <p className="notify-title">
                                                            Sát Thủ đối đầu đã
                                                            ra mắt. Hãy thưởng
                                                            thức ngay nào!
                                                        </p>
                                                        <p className="notify-send">
                                                            1 ngày trước
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            >
                                <div className="actions-link">
                                    <i className="fa-light fa-bell"></i>
                                </div>
                            </Popper>
                        </li>
                        <li className="actions-item">
                            <Link className="actions-link">
                                <i className="fa-light fa-grid-2"></i>
                            </Link>
                        </li>
                        <li className="actions-item">
                            <Popper
                                show={
                                    <div className="logger-wrapper">
                                        <ul className="logger-list">
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="logger-image"
                                                    />
                                                    <div className="logger-content">
                                                        Tường Vy
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="logger-image"
                                                    />
                                                    <div className="logger-content">
                                                        Hồng Nhung
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="logger-image"
                                                    />
                                                    <div className="logger-content">
                                                        Nguyên
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="logger-image"
                                                    />
                                                    <div className="logger-content">
                                                        Enzo
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <div className="logger-icon">
                                                        <i className="fa-light fa-pencil"></i>
                                                    </div>
                                                    <div className="logger-content">
                                                        Chỉnh sửa hồ sơ
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <div className="logger-icon">
                                                        <i className="fa-light fa-user"></i>
                                                    </div>
                                                    <div className="logger-content">
                                                        Thông tin tài khoản
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <div className="logger-icon">
                                                        <i className="fa-light fa-circle-info"></i>
                                                    </div>
                                                    <div className="logger-content">
                                                        Trung tâm hỗ trợ
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="logger-item">
                                                <Link className="logger-link">
                                                    <div className="logger-icon">
                                                        <i className="fa-light fa-right-from-bracket"></i>
                                                    </div>
                                                    <div className="logger-content">
                                                        Đăng xuất
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            >
                                <div className="actions-logger">
                                    <img
                                        src={image}
                                        alt=""
                                        className="actions-logger-avt"
                                    />
                                    <span className="actions-logger-icon">
                                        <i className="fa-light fa-chevron-down"></i>
                                    </span>
                                </div>
                            </Popper>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
