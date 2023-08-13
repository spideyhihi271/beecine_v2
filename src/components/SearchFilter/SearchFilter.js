import React, { useState } from 'react';
import Selector from '../Selector';
import './SearchFilter.scss';

function SearchFilter() {
    let typeFilters = [
        'Lọc nội dung',
        'Phim điện ảnh',
        'Chương trình truyền hình',
    ];
    let sortFilters = ['Sắp xếp theo', 'Phim mới nhất'];
    let languesFilter = ['Ngôn ngữ gốc', 'Lồng tiếng', 'Phụ đề'];
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="search-filters">
            <div className="filter-input-wrapper">
                <div className="filter-input-container">
                    <div className="filter-input-icon">
                        <i
                            className="fa-light fa-magnifying-glass"
                            defaultValue={'TÌM KIẾM...'}
                        ></i>
                    </div>
                    <input
                        type="text"
                        className="filter-input-text"
                        value={searchValue}
                        placeholder="TÌM KIẾM PHIM"
                        onChange={(e) => setSearchValue(e.target.value.trim())}
                    />
                </div>
                {searchValue.length > 0 && (
                    <div className="filter-recomended">
                        <ul className="filter-recomended-list">
                            <li className="filter-recomended-item">
                                <p className="filter-recomended-type">PHIM</p>
                                <p className="filter-recomended-value">
                                    SÁT THỦ ĐỐI ĐẦU
                                </p>
                            </li>
                            <li className="filter-recomended-item">
                                <p className="filter-recomended-type">PHIM</p>
                                <p className="filter-recomended-value">
                                    SÁT THỦ ĐỐI ĐẦU
                                </p>
                            </li>
                            <li className="filter-recomended-item">
                                <p className="filter-recomended-type">PHIM</p>
                                <p className="filter-recomended-value">
                                    SÁT THỦ ĐỐI ĐẦU
                                </p>
                            </li>
                            <li className="filter-recomended-item">
                                <p className="filter-recomended-type">PHIM</p>
                                <p className="filter-recomended-value">
                                    SÁT THỦ ĐỐI ĐẦU
                                </p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ul className="filter-list">
                <li className="filter-item">
                    <Selector filters={languesFilter} />
                </li>
                <li className="filter-item">
                    <Selector filters={typeFilters} />
                </li>
                <li className="filter-item">
                    <Selector filters={sortFilters} />
                </li>
            </ul>
        </div>
    );
}

export default SearchFilter;
