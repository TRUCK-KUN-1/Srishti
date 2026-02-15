import React from 'react'
import '../styles/Exp.css'

export default function exp() {
  return (
    <section class="experience">
        <div class="experience-header">
            {/* <!-- <span class="tag">EXPERIENCE</span> --> */}
            <h2>What Awaits <span>You</span></h2>
            <p>Three days of non-stop action, innovation, and impact</p>
        </div>

        <div class="experience-grid">
            <div class="card">
            <small>CHASE THE CHALLENGE</small>
            <h3>Competitions</h3>
            <p>A dynamic lineup of technical, intellectual, and sttrategic challenges designed to push limits and spark innovation where precision and performance define success.</p>
            <button class="btn"><a href="#">Explore</a> →</button>
            </div>

            <div class="card">
            <small>FEEL THE THRILL</small>
            <h3>GameCraft</h3>
            <p>Competitive gaming sessions designed to test strategy, teamwork, reflexes, and decision-making in high-intensity digital arenas.</p>
            <button class="btn"><a href="#">Explore</a> →</button>
            </div>

            <div class="card">
            <small>CREATE FOR CHANGE</small>
            <h3>Impact Expo</h3>
            <p>A showcase of visionary projects blending sustainability and technology designed to address pressinng social and environmental issues.</p>
            <button class="btn"><a href="#">Explore</a> →</button>
            </div>

            <div class="card">
            <small>BEYOND COMPETITION</small>
            <h3>Activities</h3>
            <p>From vibrant concerts to community focused initiatives like free health checkups, physiotherapy, and optometry services; blending celebration with care and connecion.</p>
            <button class="btn"><a href="#">Explore</a> →</button>
            </div>
        </div>
    </section>
  )
}
