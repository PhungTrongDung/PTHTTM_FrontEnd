import React from "react";
import './audioBook.css';

function AudioBook() {
    return (
        <div id="content">
            <div id="band" class="content-section">
                <h2 class="section-heading">THE BAND</h2>
                <p class="section-sub-heading">We love music</p>
                <p class="about-text">
                    We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="row book-list">
                    <div class="col col-third s-col-full mt-32 text-center">
                        <img src="assets/image/book.jpg" alt="" class="book-img"></img>
                        <p class="book-name">Name</p>
                    </div>

                    <div class="col col-third s-col-full mt-32 text-center">
                        <img src="assets/image/book.jpg" alt="" class="book-img"></img>
                        <p class="book-name">Name</p>
                    </div>

                    <div class="col col-third s-col-full mt-32 text-center">
                        <img src="assets/image/book.jpg" alt="" class="book-img"></img>
                        <p class="book-name">Name</p>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default AudioBook;