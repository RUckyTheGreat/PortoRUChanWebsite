import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function App() {
  const textRef = useRef(null);

  useGSAP(() => {
    // HERO TITLE INTRO
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // SCRAMBLE TEXT
    gsap.to(textRef.current, {
      duration: 1.2,
      scrambleText: {
        text: "A personal portfolio website",
        chars: "XO",
        revealDelay: 0.4,
        speed: 0.3,
      },
    });
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <header className="main-header">
        <nav className="main-nav">
          <div className="nav-container">
            <a href="#home" className="logo">
              RUCKY
            </a>
            <ul className="nav-links">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#profile">PROFILE</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#multimedia">MULTIMEDIA</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section hero-section">
        <div className="hero-background">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <img
            src="assets/img/HomepageMe.jpg"
            alt="Rucky"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          
          <h1 className="hero-title pr-[450px] pt-24">RUCKY</h1>
          
          <div className="hero-subtitles">
            <p className="hero-subtitle pb-10 pr-[1000px]">
              <b>R</b>ise from Failure
            </p>
            <p className="hero-subtitle pb-10 pr-[750px]">
              <b>U</b>nderstand Yourself
            </p>
            <p className="hero-subtitle pb-10 pr-[250px]">
              <b>C</b>reate Your Meaning
            </p>
            <p className="hero-subtitle pb-10 pr-[570px]">
              <b>K</b>eep Learning
            </p>
            <p className="hero-subtitle pb-10 pr-[50px]">
              <b>Y</b>ou Decide Your Future
            </p>
          </div>
          <p className="hero-quote pr-[70px]">A personal portfolio website</p>
        </div>
      </section>

      <section className="cover-div">
        <p>She said to me. and i said to her</p>
        <img src="assets/img/abstractimg.gif" alt="" />
      </section>

      <section id="profile" className="section profile-section">
        <div className="content-container">
          <h2 className="section-title">BIODATA &amp; EDUCATION</h2>

          <div className="profile-content">
            <div className="biodata-wrapper">
              <h3 className="subsection-title">Personal Information</h3>
              <table className="biodata-table">
                <tbody>
                  <tr>
                    <th colSpan="2">Biodata Rucky</th>
                  </tr>
                  <tr>
                    <td>
                      <strong>Name</strong>
                    </td>
                    <td>Raka sabari pratama</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Date of Birth</strong>
                    </td>
                    <td>November 22, 2009</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">
                      <strong>Address</strong>
                    </td>
                    <td>Jl. tongkeng no 48</td>
                  </tr>
                  <tr>
                    <td>Bandung, Indonesia</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td>ruckishuman@gmail.com</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gender</strong>
                    </td>
                    <td>Male</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="education-wrapper">
              <h3 className="subsection-title">Education History</h3>
              <ol className="education-list">
                <li>
                  <strong>Elementary School</strong>
                  <span> - SDN Patra 036 BDG (2016 - 2022)</span>
                </li>
                <li>
                  <strong>Junior High School</strong>
                  <span> - SMPN 7 BDG (2022 - 2025)</span>
                </li>
                <li>
                  <strong>Senior High School</strong>
                  <span> - SMKN 2 BDG (2025 - now)</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="content-container">
          <h2 className="section-title">ABOUT RUCKY</h2>

          <div className="about-content">
            <div className="about-image">
              <img src="assets/img/ruckyprofile.jpg" alt="Rucky" />
            </div>

            <div className="about-text">
              <div className="about-block">
                <h3>Currently Building</h3>
                <p>
                  I'm currently building web apps &amp; Unity projects, learning
                  FastAPI, React, and full-stack deployment pipelines. I'm
                  passionate about turning ideas into polished, interactive
                  experiences.
                </p>
              </div>

              <div className="about-block">
                <h3>Learning Journey</h3>
                <p>
                  My journey involves continuous exploration of new
                  technologies and frameworks. I'm always pushing myself to
                  learn and grow in the fields of game development, web
                  development, and digital creation.
                </p>
              </div>

              <div className="about-block">
                <h3>Currently Exploring</h3>
                <p>
                  Unity development, UI animation and UX improvement, backend
                  logic &amp; cloud deployment. These areas represent my current
                  focus as I expand my skill set and create more sophisticated
                  projects.
                </p>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>&gt; Jurnalis (Unknown issuing organization)</li>
              <li>&gt; Story Telling Online Contest - Korean from UPI</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="content-container">
          <h2 className="section-title">TECH STACK</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Luau</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Frameworks</h3>
              <ul className="skill-list">
                <li>FastAPI</li>
                <li>React</li>
                <li>Vite</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>
              <ul className="skill-list">
                <li>Git</li>
                <li>VSCode</li>
                <li>Blender</li>
                <li>Unity</li>
              </ul>
            </div>
          </div>

          <div className="skills-description">
            <h3>Areas of Focus</h3>
            <p>
              Currently exploring Godot development, UI animation and UX
              improvement, backend logic &amp; cloud deployment. Continuously
              learning and expanding expertise in full-stack development
              pipelines.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="content-container">
          <h2 className="section-title">PORTFOLIO</h2>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src="assets/img/steam-header.jpg"
                  alt="Steam Header Design"
                />
                <div className="portfolio-overlay">
                  <h3>Steam Header Design</h3>
                  <p>Custom header design for Steam profile</p>
                  <span className="portfolio-tag">Design</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="assets/img/steam-artwork.jpg" alt="Steam Artwork" />
                <div className="portfolio-overlay">
                  <h3>Steam Artwork</h3>
                  <p>Digital artwork creation</p>
                  <span className="portfolio-tag">Digital Art</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src="assets/img/personal-photo-1.jpg"
                  alt="Project 1"
                />
                <div className="portfolio-overlay">
                  <h3>Web Application</h3>
                  <p>
                    Full-stack web application built with React and FastAPI
                  </p>
                  <span className="portfolio-tag">Web Dev</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src="assets/img/personal-photo-2.jpg"
                  alt="Project 2"
                />
                <div className="portfolio-overlay">
                  <h3>Unity Game Project</h3>
                  <p>3D game development using Unity engine</p>
                  <span className="portfolio-tag">Game Dev</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src="assets/img/MVIMG_20251116_175407.jpg"
                  alt="Project 3"
                />
                <div className="portfolio-overlay">
                  <h3>UI/UX Design</h3>
                  <p>
                    Modern interface design with focus on user experience
                  </p>
                  <span className="portfolio-tag">UI/UX</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src="assets/img/MVIMG_20251116_175707.jpg"
                  alt="Project 4"
                />
                <div className="portfolio-overlay">
                  <h3>Backend API</h3>
                  <p>RESTful API development with FastAPI</p>
                  <span className="portfolio-tag">Backend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="multimedia" className="section multimedia-section">
        <div className="content-container">
          <h2 className="section-title">MULTIMEDIA</h2>

          <div className="gallery-section">
            <h3>Media Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="assets/img/MVIMG_20251116_175407.jpg"
                  alt="Steam Header"
                />
                <p className="gallery-caption">Steam Header</p>
              </div>
              <div className="gallery-item">
                <img
                  src="assets/img/MVIMG_20251116_175707.jpg"
                  alt="Steam Artwork"
                />
                <p className="gallery-caption">Steam Artwork</p>
              </div>
              <div className="gallery-item">
                <img
                  src="assets/img/MVIMG_20251116_175758.jpg"
                  alt="Personal Photo"
                />
                <p className="gallery-caption">Personal Photo</p>
              </div>
              <div className="gallery-item">
                <img src="assets/img/ruckyprofile.jpg" alt="Profile" />
                <p className="gallery-caption">Profile Photo</p>
              </div>
            </div>
          </div>

          <div className="audio-section">
            <h3>Reality Club - Love Epiphany</h3>
            <div className="media-player-wrapper">
              <audio controls>
                <source
                  src="assets/audio/Reality Club - Love Epiphany (Official Lyric Video) - REALITY CLUB.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="video-section">
            <h3>Reality Club - Quick! Love!</h3>
            <div className="media-player-wrapper">
              <video controls>
                <source
                  src="assets/video/Reality Club - Quick! Love! (Official Lyric Video).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="content-container">
          <h2 className="section-title">CONTACT</h2>

          <div className="contact-content">
            <div className="social-links-section">
              <h3>Connect With Rucky</h3>
              <ul className="social-list">
                <li>
                  <a
                    href="https://www.tiktok.com/@naptuneeel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vyu_tune"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ruckishuman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/user/critical_Ravine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/2zwUr3jaHx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.roblox.com/users/3101268537/profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RUckyTheGreat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-form-section">
              <h3>Send a Message</h3>
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Rucky. All rights reserved.</p>
      </footer>
    </>
  );
}
