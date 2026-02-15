import React from 'react'
import '../styles/Hero.css'

export default function Hero(props) {
  return (
    <section class="hero">
        <div class="hero-content">
                {props.page === "Home" ? (
                    <h1>
                        Build the <span class="colorful">Green Future</span><br/>
                        <span class="nowrap">with <span class="colorful">Srishti'26</span></span>
                    </h1>
                ) : (
                    <h1 class="colorful">
                        {props.header}
                    </h1>
                )}

            <p>
                {props.p}
            </p>

            <div class="hero-buttons">
                <button class="btn btn-secondary">{props.page === "Home" ? "Learn More" : "Problem Statement"}</button>
                <button class="btn btn-primary">{props.page === "Home" ? "Get Started" : "Register"}</button>
            </div>
        </div>

        <div class="hero-image">
            <img src={props.imgSrc} alt="Clean Energy Illustration"/>
        </div>
    </section>
  )
}
