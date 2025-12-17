import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, SplitText);

import ProjectCard from "./ProjectCard";

export default function App() {

document.fonts.ready.then(() => {
  gsap.utils.toArray(".font-split-1").forEach((el) => {
    if (el._split) return;

    gsap.set(el, { opacity: 1 });

    const split = SplitText.create(el, {
      type: "words",
      wordsClass: "word",
      ignore: "sup"
    });

    el._split = split;

    gsap.from(split.words, {
      y: -80,
      opacity: 0,
      rotation: "random(-40, 40)",
      stagger: 0.08,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",     // mulai pas masuk viewport
        once: true            // jalan sekali saja
      }
    });
  });
});
//---------------------------------------------------------------

  useGSAP(() => {
    const showAnim = gsap.from(".main-header", {
      yPercent: -100,
      duration: 0.2,
      paused: true
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1
          ? showAnim.play()
          : showAnim.reverse();
      }
    });
  });

useGSAP(() => {
  gsap.utils.toArray(".glitch").forEach((el) => {
    const text1 = el.dataset.text1;
    const text2 = el.dataset.text2;

    // safety check
    if (!text1 || !text2) return;

    // set initial text
    gsap.set(el, { textContent: text1 });

    const tl = gsap.timeline({ repeat: -1 });

    tl
      // HOLD text 1
      .to({}, { duration: 5 })

      // GLITCH → text 2
      .to(el, {
        duration: 1.2,
        scrambleText: {
          text: text2,
          chars: "■◻□▯▮▪",
          revealDelay: 0.1,
          tweenLength: true
        },
        ease: "power2.out"
      })

      // HOLD text 2
      .to({}, { duration: 5 })

      // GLITCH → text 1
      .to(el, {
        duration: 1.2,
        scrambleText: {
          text: text1,
          chars: "■◻□▯▮▪",
          revealDelay: 0.1,
          tweenLength: true
        },
        ease: "power2.out"
      });
  });
});

// Scroll-triggered section animations
useGSAP(() => {
  // Get all sections except hero
  const sections = gsap.utils.toArray(".section:not(.hero-section)");
  
  // Set initial state for all sections (hidden)
  gsap.set(sections, {
    opacity: 0,
    y: 60,
    scale: 0.95
  });

  // Animate each section when it enters viewport
  sections.forEach((section, index) => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        once: true
      }
    });

    // Animate section number
    const sectionNumber = section.querySelector(".section-number");
    if (sectionNumber) {
      gsap.from(sectionNumber, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }

    // Animate section title
    const sectionTitle = section.querySelector(".section-title");
    if (sectionTitle) {
      gsap.from(sectionTitle, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }

    // Animate content containers with stagger
    const contentItems = section.querySelectorAll(".content-container > *:not(.section-title)");
    if (contentItems.length > 0) {
      gsap.from(contentItems, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }

    // Animate profile content grid items
    const profileContent = section.querySelector(".profile-content");
    if (profileContent) {
      const gridItems = profileContent.querySelectorAll(".biodata-wrapper, .education-wrapper");
      gsap.from(gridItems, {
        opacity: 0,
        x: (index) => index % 2 === 0 ? -50 : 50,
        duration: 0.9,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }

    // Animate contact content grid
    const contactContent = section.querySelector(".contact-content");
    if (contactContent) {
      const contactItems = contactContent.querySelectorAll(".social-links-section, .contact-form-section");
      gsap.from(contactItems, {
        opacity: 0,
        x: (index) => index % 2 === 0 ? -50 : 50,
        duration: 0.9,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }
  });

  // Animate cover-div section
  const coverDiv = document.querySelector(".cover-div");
  if (coverDiv) {
    gsap.set(coverDiv, { opacity: 0, scale: 0.9 });
    gsap.to(coverDiv, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: coverDiv,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });

    // Animate cover-div content
    const coverContent = coverDiv.querySelector("p");
    const coverImage = coverDiv.querySelector("img");
    if (coverContent) {
      gsap.from(coverContent, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: coverDiv,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }
    if (coverImage) {
      gsap.from(coverImage, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coverDiv,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }
  }

  // Animate portfolio items individually
  const portfolioItems = gsap.utils.toArray(".portfolio-item");
  portfolioItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Animate gallery items
  const galleryItems = gsap.utils.toArray(".gallery-item");
  galleryItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Animate skill categories
  const skillCategories = gsap.utils.toArray(".skill-category");
  skillCategories.forEach((category, index) => {
    gsap.from(category, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: category,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Animate about blocks
  const aboutBlocks = gsap.utils.toArray(".about-block");
  aboutBlocks.forEach((block, index) => {
    gsap.from(block, {
      opacity: 0,
      x: 50,
      duration: 0.9,
      delay: index * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Animate media player wrappers
  const mediaWrappers = gsap.utils.toArray(".media-player-wrapper");
  mediaWrappers.forEach((wrapper) => {
    gsap.from(wrapper, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Animate footer
  const footer = document.querySelector("footer");
  if (footer) {
    gsap.from(footer, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true
      }
    });
  }
});

  return (
    <>
      {/* Top Navigation */}
      <header className="main-header">
        <nav className="main-nav ">
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
      <section id="home" className="section hero-section" data-section="01">
        <span className="section-number">01</span>
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
          
          <h1 className="hero-title pr-[450px] pt-24">Rucky</h1>
          <div className="hero-subtitles">
            <p className="hero-subtitle pb-10 pr-[1000px] glitch" data-text1="What R Does mean?" data-text2="Rise from Failure">
              <b>R</b>ise from Failure
            </p>
            <p className="hero-subtitle pb-10 pr-[750px] glitch" data-text1="What U Does mean?" data-text2="Understand Yourself">
              <b>U</b>nderstand Yourself
            </p>
            <p className="hero-subtitle pb-10 pr-[250px] glitch" data-text1="What C Does mean?" data-text2="Create Your Meaning">
              <b>C</b>reate Your Meaning
            </p>
            <p className="hero-subtitle pb-10 pr-[570px] glitch" data-text1="What K Does mean?" data-text2="Keep Learning">
              <b>K</b>eep Learning
            </p>
            <p className="hero-subtitle pb-10 pr-[50px] glitch" data-text1="What Y Does mean?" data-text2="You Decide Your Future">
              <b>Y</b>ou Decide Your Future
            </p>
          </div>
          <p className="hero-quote pr-[70px]">A personal portfolio website"</p>
        </div>
      </section>

      <section className="cover-div flex items-center gap-8" data-section="4.5">
        <div className="pl-[1000px]">
          <p className="font-split-1 ">Who am I<sup>?</sup></p>
        </div>
        <div className="pr-[200px]">
          <p className=" ">Cursor AI is an advanced, AI-driven integrated development environment (IDE) designed to enhance developer productivity and streamline coding workflows.
What is Cursor</p>
        <img className="pr-[1000px]" src="assets/img/abstractimg.gif" alt="" />
        </div>

      </section>


      <section id="profile" className="section profile-section" data-section="02">
        <span className="section-number">02</span>
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

      <section id="about" className="section about-section" data-section="03">
        <span className="section-number">03</span>
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

      <section id="skills" className="section skills-section" data-section="04">
        <span className="section-number">04</span>
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

      <section className="cover-div section-divider" data-section="4.5">
        <p className="font-split-1 pl-[400px] ">wHY You need TO HirE me<sup>?</sup></p>
      </section>


      <section id="portfolio" className="section portfolio-section" data-section="05">
        <span className="section-number">05</span>
        <div className="content-container">
          <h2 className="section-title">PORTFOLIO</h2>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
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

      <section id="multimedia" className="section multimedia-section" data-section="06">
        <span className="section-number">06</span>
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

      <section className="cover-div section-divider" data-section="4.5">
        <p className="font-split-1 pl-[400px] ">Something that i love listening<sup>To?</sup></p>

        
          <div className="audio-section">
            <h3 className="text-white">Reality Club - Love Epiphany</h3>
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
            <h3 className="text-white">Reality Club - Quick! Love!</h3>
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
      </section>
        </div>
      </section>

      <section id="contact" className="section contact-section" data-section="07">
        <span className="section-number">07</span>
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
