import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer class="eco-footer">
        <div class="eco-footer-inner">

            {/* <!-- Brand --> */}
            <div class="eco-footer-brand">
            <h2>SRISHTI ’26</h2>
            <p>
                A celebration of innovation where technology meets nature,
                sustainability, and civic responsibility.
            </p>
            <span>Swami Vivekananda University</span>
            </div>

            {/* <!-- Quick Links --> */}
            <div class="eco-footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Innovation</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Register</a></li>
            </ul>
            </div>

            {/* <!-- Social --> */}
            <div class="eco-footer-col">
            <h4>CONNECT WITH US</h4>
            <div class="eco-socials">
                <a href="#">IG</a>
                <a href="#">IN</a>
                <a href="#">YT</a>
                <a href="#">X</a>
                <a href="#">FB</a>
            </div>
            </div>

            {/* <!-- Contact --> */}
            <div class="eco-footer-col">
            <h4>CONTACT</h4>
            <p>
                Swami Vivekananda University<br />
                West Bengal, India
            </p>
            <a class="eco-contact-link" href="#">Contact Us →</a>
            </div>

        </div>

        <div class="eco-footer-bottom">
            © 2026 Srishti. All rights reserved.
        </div>
    </footer>
  )
}
