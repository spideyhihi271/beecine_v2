import { useEffect, useRef } from 'react';

// Assets
import './Header.scss';
import { Link } from 'react-router-dom';
import config from '~/configs';

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
            <div className="header-main">
                <div className="header-main-container container">
                    <div className="header-logger">
                        <div className="logger-lable">
                            <img
                                className="logger-avt"
                                src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755"
                                alt=""
                            />
                            <p className="logger-name">LE THANH NGUYEN</p>
                        </div>
                    </div>
                    <div className="header-logo">
                        <Link
                            to={config.routes.home}
                            className="header-logo-link"
                        >
                            <img
                                src="https://logos-world.net/wp-content/uploads/2020/12/Marvel-Entertainment-Logo-2006.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="header-actions">
                        <Link className="action-update">
                            <img
                                className="action-update-img"
                                src="https://www.marvel.com/static/favicon/mstile-150x150.png"
                                alt=""
                            />
                            <div className="action-update-info">
                                <p className="action-update-title">
                                    MARVER UNLIMITED
                                </p>
                                <p className="action-update-content">
                                    SUBCRIBE
                                </p>
                            </div>
                        </Link>
                        <Link className="action-search">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to={config.routes.home} className="nav-link">
                            TRANG CHỦ
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                    <li className="nav-item">
                        <Link to={config.routes.movies} className="nav-link">
                            PHIM
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                    <li className="nav-item">
                        <Link to={config.routes.tvSeries} className="nav-link">
                            TV SERIES
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                    <li className="nav-item">
                        <Link to={config.routes.plans} className="nav-link">
                            GÓI DỊCH VỤ
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                    <li className="nav-item">
                        <Link to={config.routes.movies} className="nav-link">
                            MỚI VÀ PHỔ BIẾN
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                    <li className="nav-item">
                        <Link to={config.routes.movies} className="nav-link">
                            NHIỀU HƠN
                        </Link>
                        <div className="nav-line"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
