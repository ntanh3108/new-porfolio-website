import { useState, useEffect, useMemo } from 'react'
import './App.css'
import avatarImg from './assets/avatar.jpg'

const SocialActivities = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/V4lTkkQJ5lM?si=0tPMAk8GgIL7x1Fg',
      note: 'Distributing charity meals to the homeless'
    },
    {
      type: 'image',
      src: '/public/social1.jpg',
      note: 'Volunteer work at local community center'
    },
    {
      type: 'image',
      src: '/public/social2.jpg',
      note: 'Chemistry workshop for high school students'
    },
    {
      type: 'video',
      src: '/public/social3.mp4',
      note: 'Research presentation at international conference'
    },
    {
      type: 'image',
      src: '/public/social4.jpg',
      note: 'Environmental cleanup campaign'
    }
  ]

  const quotes = [
    "It’s not how much we give but how much love we put into giving - Mother Teresa"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="social-activities-container">
      <div className="social-header">
        <h1>Charitable Activities</h1>
        <div className="header-line"></div>
      </div>

      <div className="quotes-section">
        <div className="quotes-list">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-item">
              <i className="fas fa-quote-left"></i>
              <p>{quote}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-section">
        <button className="carousel-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="carousel-content">
          <div className="slide-container">
            {slides[currentSlide].type === 'image' ? (
              <img src={slides[currentSlide].src} alt={`Social activity ${currentSlide + 1}`} />
            ) : slides[currentSlide].type === 'youtube' ? (
              <iframe
                src={slides[currentSlide].src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video src={slides[currentSlide].src} controls />
            )}
          </div>
          <div className="slide-note">
            <p>{slides[currentSlide].note}</p>
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAbstract, setSelectedAbstract] = useState(null)
  const publicationsPerPage = 5

  // Helper function to format chemical formulas
  const formatChemistry = (text) => {
    return text
      // Subscripts - numbers after chemical elements (but not after spaces or hyphens in regular words)
      .replace(/([A-Z][a-z]?)(\d+)(?![a-z])/g, '$1<sub>$2</sub>')
      // Superscripts - ions with charges (space or start of string before the ion)
      .replace(/\b(NH<sub>4<\/sub>)\+/g, '$1<sup>+</sup>')
      .replace(/\b(Na|K|Li)\+/g, '$1<sup>+</sup>')
      .replace(/\b(Zn|Mg|Ca|Fe|Cu|Ni|Co|Mn)(\d*)\+/g, '$1<sup>$2+</sup>')
      .replace(/\b(V)(\d+)\+/g, '$1<sup>$2+</sup>')
      // Superscript for negative charges and exponents
      .replace(/\s(g)(−1|−2)/g, ' $1<sup>$2</sup>')
      // Fix [VO6]n pattern
      .replace(/\[([A-Z][a-z]?<sub>\d+<\/sub>)\]n/g, '[$1]<sub>n</sub>')
  }

  // Helper function to format authors (bold specific name)
  const formatAuthors = (text) => {
    return text.replace(/Thi Hong Loan Dang/g, '<strong>Thi Hong Loan Dang</strong>')
  }

  const publicationsData = [
    {
      id: 1,
      title: "High-Performance Sodium Storage Enabled by Structural Optimization of Oxidized (NH4)0.5V2O5",
      journal: "Journal of The Electrochemical Society, Volume 172, Number 9",
      journalRank: "Q1, IF = 4.3",
      authors: "Hai Nam Pham (=), Thi Hong Loan Dang (=), Thi Thu Trang Nguyen, Thu Thao Nguyen, Thi Nam Pham, Tuan Anh Nguyen, Thi Kieu Anh Vo, Wen Jen Lee, Minh-Thuan Pham, Guo-Ping Chang-Chien, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le and Le Thanh Nguyen Huynh.",
      equalContribution: true,
      publicTime: "10 September, 2025",
      abstract: "This study reports the design of an oxidation-engineered (NH4)0.5V2O5 (oxidation-NVO) cathode via selective ammonium ion extraction using Na2S2O8 to modulate the interlayer framework for enhanced sodium-ion storage. The oxidation process partially removes NH4+ ions while preserving the layered monoclinic structure, leading to expanded interlayer spacing and improved ion accessibility. Structural characterizations confirm the retention of a stable [VO6]n framework supported by residual NH4+ species acting as structural pillars. Morphological analysis reveals highly crystalline rod-like microstructures, and chemical state analysis confirms the coexistence of V4+/V5+ state, favorable for redox activity. Electrochemical testing shows that the oxidation-NVO electrode delivers a high reversible capacity of 192 mAh g−1, approximately 20% higher than the pristine NVO counterpart, with excellent cycling stability, low polarization, and full capacity recovery after rate variation. Further transport and structural analyses under dynamic conditions demonstrate improved Na+ transport and a reversible breathing-type interlayer response. These findings highlight the effectiveness of interlayer chemistry modulation through oxidation as a simple and scalable strategy for advancing vanadium-based cathode materials in sodium-ion batteries.",
      accessLink: "https://iopscience.iop.org/article/10.1149/1945-7111/ae00fa/meta"
    },
    {
      id: 2,
      title: "Layered (NH4)0.5V2O5 as a high-performance cathode for zinc-ion Batteries: Structural, electrochemical, and intercalation mechanism insights",
      journal: "Ceramics International",
      journalRank: "Q1, IF = 5.6",
      authors: "Hai Nam Pham (=), Thi Hong Loan Dang (=), Thi Thu Trang Nguyen, Thu Thao Nguyen, Wen Jen Lee, Minh-Thuan Pham, Guo-Ping Chang-Chien, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.",
      equalContribution: true,
      publicTime: "9 August, 2025",
      abstract: "The development of high-performance cathodes remains a critical challenge for advancing aqueous zinc-ion batteries (ZIBs), despite their inherent advantages in cost, safety, and sustainability. This work presents a layered ammonium vanadium bronze (NH4)0.5V2O5 (NVO) synthesized via a simple hydrothermal method and explored as a scalable cathode for ZIBs. The NVO structure features intercalated NH4+ ions that form N–H···O hydrogen bonds, acting as structural pillars between V2O5 slabs to enhance interlayer stability and facilitate Zn2+ diffusion. Beyond the favorable layered framework, this study provides a unique correlation between the material's thermal behavior, phase stability, and electrochemical durability. The NVO electrode delivers a high specific capacity of 240 mAh g−1 at C/5, with 92.3 % capacity retention over 200 cycles. Even at a high rate of 2C, it maintains 185 mAh g−1 after 300 cycles with >90 % retention and nearly 100 % Coulombic efficiency. Kinetic analysis reveals combined capacitive and diffusion-controlled processes, while ex-situ characterization confirms minimal interlayer contraction and reversible phase transitions. These findings highlight the crucial role of NH4+ pre-intercalation and hydrogen bonding in stabilizing the structure, enabling long-life, high-rate Zn2+ storage, and establishing NVO as a practical, high-performance cathode for next-generation aqueous ZIBs.",
      accessLink: "https://doi.org/10.1016/j.ceramint.2025.08.090"
    },
    {
      id: 3,
      title: "A high-capacity double-layered (NH4)0.5V2O5 in micro-rods structure for sodium storage",
      journal: "Materials Science and Engineering: B, Volume 311",
      journalRank: "Q1, IF = 4.6",
      authors: "Thi Hong Loan Dang, Thi Thu Trang Nguyen, Hai Nam Pham, Hoang Anh Nguyen, Thi Thu Hong Nguyen, Minh Dai To, Thu Thao Nguyen, Thi Nam Pham, Dai Lam Tran, Wen Jen Lee, Minh Thuan Pham, Anh Tuan Dao, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.",
      equalContribution: false,
      publicTime: "January 2025",
      abstract: "An ammonium vanadium bronze (NH4)0.5V2O5 (NVO) was synthesized via a hydrothermal route and investigated the Na-insertion/extraction process as a cathode for Na-ion batteries. The structural analysis confirms that the double-layered NVO in the micro-rods structure is formed by the double-sheet [VO6] with a large distance interlayer of 9.717 Å to be suitable for reversible Na-storage. The charge–discharge cycling performance delivers ∼160 mAh/g for long-term 200 cycles with structural stability. The ex-situ EXD at various Na-content states demonstrates the shrinkage/expansion of the interlayers during Na-migration, and the NH4+-ions play an essential role as the “pillar” of double-layered V2O5 to assure cycling stability. This work contributes to a high-capacity member of the V2O5 polymorph family in the context of Na-ion batteries.",
      accessLink: "https://doi.org/10.1016/j.mseb.2024.117793"
    }
  ]

  const filteredPublications = publicationsData.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPublications.length / publicationsPerPage)
  const startIndex = (currentPage - 1) * publicationsPerPage
  const currentPublications = filteredPublications.slice(startIndex, startIndex + publicationsPerPage)

  return (
    <div className="publications-container">
      <div className="publications-header">
        <h1>Publications</h1>
        <div className="header-line"></div>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search publications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="publications-list">
        {currentPublications.map((pub) => (
          <div key={pub.id} className="publication-card">
            <h3 className="publication-title" dangerouslySetInnerHTML={{ __html: formatChemistry(pub.title) }}></h3>
            <div className="publication-journal">
              {pub.journal} ({pub.journalRank})
            </div>
            <div className="publication-authors" dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}></div>
            {pub.equalContribution && (
              <div className="publication-note">= : Equal contribution</div>
            )}
            <div className="publication-time">{pub.publicTime}</div>
            <div className="publication-actions">
              <button className="btn-access" onClick={() => window.open(pub.accessLink, '_blank')}>
                Access
              </button>
              <button className="btn-abstract" onClick={() => setSelectedAbstract(pub)}>
                Abstract
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(Math.max(1, totalPages))].map((_, index) => (
          <button
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedAbstract && (
        <div className="modal-overlay" onClick={() => setSelectedAbstract(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedAbstract(null)}>×</button>
            <h2 className="modal-title" dangerouslySetInnerHTML={{ __html: formatChemistry(selectedAbstract.title) }}></h2>
            <div className="modal-journal">
              {selectedAbstract.journal} ({selectedAbstract.journalRank})
            </div>
            <div className="modal-authors" dangerouslySetInnerHTML={{ __html: formatAuthors(selectedAbstract.authors) }}></div>
            <div className="modal-section">
              <h3>Abstract</h3>
              <p className="modal-abstract" dangerouslySetInnerHTML={{ __html: formatChemistry(selectedAbstract.abstract) }}></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const WorkExperience = () => {
  const [currentPeriod, setCurrentPeriod] = useState(0)

  const workData = [
    {
      period: "01/2023 - 12/2023",
      position: "Sales Representative",
      company: "ABC Corporation",
      location: "Ho Chi Minh City, Vietnam",
      description: "Managed client relationships and achieved sales targets\nDeveloped marketing strategies for new products\nConducted market research and competitor analysis\nAchieved 120% of quarterly sales targets",
      image: "/public/work.png"
    }
  ]

  const current = workData[currentPeriod]

  return (
    <div className="work-timeline">
      <div className="work-header">
        <h1>Work Experience</h1>
        <div className="header-line"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-periods">
          {workData.map((item, index) => (
            <div key={index} className="timeline-period">
              <div className="period-year">{item.period}</div>
              <div
                className={`period-circle ${index === currentPeriod ? 'active' : ''}`}
                onClick={() => setCurrentPeriod(index)}
              >
              </div>
              <div className="period-info">
                <div className="period-degree">{item.position}</div>
                <div className="period-major">{item.company}</div>
                <div className="period-school">{item.location}</div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>

        <div key={currentPeriod} className="timeline-content work-content">
          <div className="content-right">
            <div className="education-image">
              <img src={current.image} alt={`${current.company} - ${current.period}`} />
            </div>
          </div>

          <div className="content-left">
            <h3>{current.position}</h3>
            <h4>{current.company}</h4>
            <h5>{current.location}</h5>
            {current.description && (
              <div className="content-description">
                {current.description.split('\n').map((line, index) => (
                  line.trim() && <div key={index} className="description-item">{line}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const EducationTimeline = () => {
  const [currentPeriod, setCurrentPeriod] = useState(0)
  
  const educationData = [
    {
      period: "09/2016 - 05/2019",
      degree: "High School Diploma",
      major: "Gifted: Biology",
      school: "Hoang Le Kha Gifted High School, Tay Ninh Province, Vietnam",
      description: "",
      image: "/public/education1.jpg"
    },
    {
      period: "09/2020 - 09/2024",
      degree: "Bachelor of Science",
      major: "Major: Chemistry",
      school: "University of Science - VNUHCM, Ho Chi Minh City, Vietnam",
      description: "Supervisor: Assoc. Prof. Le Thanh Nguyen, Huynh.\nClassification: Very Good\nGPA: 3.4/4.0 (8.0/10)\nPublished 4 papers Q1",
      image: "/public/education2.jpg"
    }
  ]

  const current = educationData[currentPeriod]

  return (
    <div className="education-timeline">
      <div className="education-header">
        <h1>Education</h1>
        <div className="header-line"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-periods">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-period">
              <div className="period-year">{item.period}</div>
              <div 
                className={`period-circle ${index === currentPeriod ? 'active' : ''}`}
                onClick={() => setCurrentPeriod(index)}
              >
              </div>
              <div className="period-info">
                <div className="period-degree">{item.degree}</div>
                <div className="period-school">{item.school}</div>
                <div className="period-major">{item.major}</div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>

        <div key={currentPeriod} className="timeline-content">
          <div className="content-left">
            <h3>{current.degree}</h3>
            <h4>{current.school}</h4>
            <h5>{current.major}</h5>
            {current.description && (
              <div className="content-description">
                {current.description.split('\n').map((line, index) => (
                  line.trim() && <div key={index} className="description-item">{line}</div>
                ))}
              </div>
            )}
          </div>

          <div className="content-right">
            <div className="education-image">
              <img src={current.image} alt={`${current.school} - ${current.period}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const jobTitles = useMemo(() => ['Salewoman', 'Researcher', 'Tutor'], [])
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/background.jpg")'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.color = '#ffffff'
    document.body.style.minWidth = '100vw'
    document.body.style.minHeight = '100vh'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'experience', 'portfolio', 'services', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const currentJob = jobTitles[currentJobIndex]
    
    if (isTyping) {
      if (displayedText.length < currentJob.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentJob.slice(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentJobIndex, jobTitles])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    })
  }

  const calculateAge = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  return (
    <div className="portfolio">
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="profile">
          <div className="profile-image">
            <img src={avatarImg} alt="Alex Smith" />
          </div>
          <h2>Loan Dang</h2>
          <h6>dangthihongloan01102018@gmail.com</h6>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Skype"><i className="fab fa-skype"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <nav className="navigation">
          <button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
            <i className="fas fa-home"></i>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            <i className="fas fa-user"></i>
            About
          </button>
          <button onClick={() => scrollToSection('resume')} className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>
            <i className="fas fa-graduation-cap"></i>
            Education
          </button>
          <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <i className="fas fa-briefcase"></i>
            Experience
          </button>
          <button onClick={() => scrollToSection('portfolio')} className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
            <i className="fas fa-book-open"></i>
            Publications
          </button>
          <button onClick={() => scrollToSection('services')} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
            <i className="fas fa-hand-holding-heart"></i>
            Charitable Activities
          </button>
          <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            <i className="fas fa-envelope"></i>
            Contact
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>Dang Thi Hong Loan</h1>
            <p className="typing-text">
              I'm <span className="job-title">{displayedText}<span className="cursor">|</span></span>
            </p>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <div className="about-header">
              <h1>About</h1>
              <div className="header-line"></div>
            </div>
            
            <div className="about-intro">
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="about-main">
              <div className="about-image">
                <img src={avatarImg} alt="Dang Thi Hong Loan" />
              </div>
              
              <div className="about-details">
                <h2>Salewoman, Researcher & Tutor.</h2>
                <p className="about-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="about-info">
                  <div className="info-column">
                    <div className="info-item">
                      <strong>Birthday:</strong> 1 Oct, 2001
                    </div>
                    <div className="info-item">
                      <strong>Degree:</strong> Master
                    </div>
                    <div className="info-item">
                      <strong>Email:</strong> email@example.com
                    </div>
                  </div>
                  
                  <div className="info-column">
                    <div className="info-item">
                      <strong>Age:</strong> {calculateAge('2001-10-01')}
                    </div>
                    <div className="info-item">
                      <strong>Phone:</strong> +84
                    </div>
                    <div className="info-item">
                      <strong>City:</strong> Ho Chi Minh City, Vietnam
                    </div>
                  </div>
                </div>
                
                <p className="about-description">
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                </p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">💼</div>
                <div className="stat-number">
                  1
                </div>
                <div className="stat-label">Year Work Experience</div>
                <div className="stat-description">professional experience</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">🔬</div>
                <div className="stat-number">
                  1.000+
                </div>
                <div className="stat-label">Research Hours</div>
                <div className="stat-description">dedicated to research</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">📖</div>
                <div className="stat-number">
                  4
                </div>
                <div className="stat-label">Publications</div>
                <div className="stat-description">academic publications</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">💕</div>
                <div className="stat-number">
                  20+
                </div>
                <div className="stat-label">Charitable Activities</div>
                <div className="stat-description">community engagement</div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="education-section">
          <EducationTimeline />
        </section>

        <section id="experience" className="work-section">
          <WorkExperience />
        </section>

        <section id="portfolio" className="publications-section">
          <Publications />
        </section>

        <section id="services" className="social-section">
          <SocialActivities />
        </section>

        <section id="contact" className="coming-soon-section">
          <div className="hero-content">
            <h1>Contact</h1>
            <p>This section is coming soon.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
