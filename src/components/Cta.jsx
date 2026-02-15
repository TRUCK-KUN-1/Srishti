import React from 'react'
import '../styles/Cta.css'

export default function cta() {
  return (
    <section class="eco-cta refined">
        <div class="eco-layout">

            {/* <!-- LEFT --> */}
            <div class="eco-container">
                <span class="eco-badge">REGISTRATIONS OPEN</span>

                <h1>
                    Join <span>16,000+</span><br />
                    Students
                </h1>

                <p>
                    Step into a space where ideas grow, innovation thrives, and technology works in harmony with nature.
                    Join us in shaping a greener future.
                </p>

                <div class="eco-divider"></div>

                <div class="eco-info refined-info">
                    <div class="eco-item">
                        <span class="dot"></span>
                        <div>
                            <small>DATE</small>
                            <strong>Coming soon...</strong>
                        </div>
                    </div>

                    <div class="eco-item">
                        <span class="dot"></span>
                        <div>
                            <small>VENUE</small>
                            <strong>Swami Vivekananda University</strong>
                        </div>
                    </div>

                    <div class="eco-item">
                        <span class="dot"></span>
                        <div>
                            <small>EXPECTED</small>
                            <strong>16,000+</strong>
                        </div>
                    </div>
                </div>

                <a href="#" class="refined-btn">REGISTER NOW</a>
            </div>

            {/* <!-- RIGHT IMAGE --> */}
            <div class="eco-visual">
                <img src="your-image.png" alt="Clean Energy Illustration"/>
            </div>

        </div>
    </section>
  )
}
