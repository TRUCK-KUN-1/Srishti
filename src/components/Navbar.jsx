import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
        {/* <!-- Top marquee bar --> */}
        <div class="topbar">
            <div class="marquee">
                <div class="marquee-group">
                <a href="#">Welcome to Srishti</a>
                <a href="#">Solar Panels</a>
                <a href="#">Inverters</a>
                <a href="#">Taiwan Solar Project</a>
                <a href="#">Cambodia Solar Project</a>
                <a href="#">Singapore Project</a>
                <a href="#">North America</a>
                <a href="#">Asked Questions</a>
                </div>
                <div class="marquee-group">
                <a href="#">Batteries</a>
                <a href="#">Solar Panels</a>
                <a href="#">Inverters</a>
                <a href="#">Taiwan Solar Project</a>
                <a href="#">Cambodia Solar Project</a>
                <a href="#">Singapore Project</a>
                <a href="#">North America</a>
                <a href="#">Asked Questions</a>
                </div>
            </div>
        </div>

        {/* <!-- Main navbar --> */}
        <nav class="navbar">
            <div class="nav-left">
                <div class="logo">
                <div class="logo-icon"><img src="Logo.png" alt="slogo"/></div>
                <span class="logo-text">Srishti'26</span>
                </div>

                <div class="nav-links">
                <a class="active" href="#">Home</a>
                <a href="#">Schedule</a>
                <a href="#">Events</a>
                {/* <a href="#">Gallery</a> */}
                <a href="#">About </a>
                <a href="#">Contact </a>
                </div>
            </div>

            <div class="nav-right">
                <button class="btn btn-outline">Sign In</button>
                <button class="btn btn-primary sign-up-btn">Get Started</button>

                {/* <!-- hamburger toggle --> */}
                <input type="checkbox" id="menu-toggle" />
                <label class="hamburger" for="menu-toggle">
                <span></span>
                </label>

                {/* <!-- mobile dropdown --> */}
                <div class="mobile-menu">
                <a class="active" href="#">Home</a>
                <a href="#">Schedule</a>
                <a href="#">Events</a>
                {/* <!-- <a href="#">Gallery</a> --> */}
                <a href="#">About </a>
                <a href="#">Contact </a>
                </div>
            </div>
        </nav>
    </>
  )
}
