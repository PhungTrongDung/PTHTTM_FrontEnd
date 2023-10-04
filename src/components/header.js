import React from "react";
// import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import './header.css';

function Header() {
    return (

        <div id="header">
            <div class="header_banner"></div>
            <ul id="nav">
                <li>
                <Link to="/Home">HOME</Link>
                </li>
                <li>
                    <Link to="/AudioBook">AUDIO BOOK</Link> 
                    <ul class="subnav">
                        <li><a href="#">Sách - Tiểu thuyết</a></li>
                        <li><a href="#">Sách khoa học</a></li>
                        <li><a href="#">Sách kinh tế</a></li>
                        <li><a href="#">Sách lịch sử</a></li>
                        <li><a href="#">Sách danh nhân</a></li>
                    </ul>
                </li>
                <li>
                    <Link to="/TruyenAudio">TRUYỆN AUDIO</Link> 
                    <ul class="subnav">
                        <li><a href="#">Truyện ma - Kinh dị</a></li>
                        <li><a href="#">Truyện tình yêu - Ngôn tình</a></li>
                        <li><a href="#">Truyện tuổi teen</a></li>
                        <li><a href="#">Thể loại khác</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">More <i class="nav-arrow-down fa-sharp fa-solid fa-caret-down"></i></a>
                    <ul class="subnav">
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#">Extras</a></li>
                        <li><a href="#">Media</a></li>
                    </ul>
                </li>
            </ul>

            <div id="mobile-menu" class="mobile-menu-btn">
                <i class="menu-icon ti-menu"></i>
            </div>

            <div class="search-btn">
                <i class="search-icon ti-search"></i>
            </div>
        </div>

    );
};

export default Header;