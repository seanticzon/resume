const { createApp } = Vue;

createApp({
    data() {
        return {
            personalInfo: {
                firstNames: ["Sean", "Repti", "Miguel"],
                middleInitial: "L",
                lastName: "Ticzon",
                title: "BSIT Graduate | Data Enthusiast & Web Developer",
                tagline: "Building Smart Systems with Code, Data, and Curiosity",
                email: "seanticzon@gmail.com",
                phone: "+63 0915 340 1432"
            },
            about: {
                paragraph1: "I'm a creative developer passionate about building exceptional digital experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.",
                paragraph2: "I've worked with tools like Python, scikit-learn, spaCy, and NLTK to build projects focused on NLP and Machine Learning.",
                paragraph3: "On the web development side, I have hands-on experience using HTML, CSS, JavaScript, PHP, MySQL, and TailwindCSS, and I'm currently learning Laravel for backend development.",
                paragraph4: "I'm eager to apply my skills in real-world environments, contribute to impactful projects, and grow alongside experienced developers in a collaborative setting."
            },
            stats: [
                { label: "Projects Completed", value: "4+" },
                { label: "Technologies Learned", value: "12+" },
                { label: "Hackathons & Competitions", value: "4+" },
                { label: "Cups of Coffee", value: "∞" }
            ],
            coreSkills: [
                { name: "Full Stack Web Development", level: 90 },
                { name: "Python & Data Engineering", level: 85 },
                { name: "Natural Language Processing", level: 80 },
                { name: "PHP & Laravel", level: 83 },
                { name: "JavaScript / Vue.js", level: 88 },
                { name: "SQL & Database Design", level: 87 }
            ],
            skillCategories: [
                {
                    name: "Programming Languages",
                    icon: "fas fa-code",
                    skills: ["Python", "Java", "JavaScript", "PHP", "C++", "SQL"]
                },
                {
                    name: "Frontend Development",
                    icon: "fas fa-laptop-code",
                    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Bootstrap"]
                },
                {
                    name: "Backend & Databases",
                    icon: "fas fa-server",
                    skills: ["PHP", "Laravel", "MySQL", "SQLite", "REST APIs"]
                },
                {
                    name: "Programming & NLP",
                    icon: "fas fa-brain",
                    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "NLTK", "spaCy", "Data Cleaning and Precprocessing"]
                },
                {
                    name: "Data Analytics",
                    icon: "fas fa-chart-line",
                    skills: ["Excel", "Tableau", "Google Sheets", "Data Visualization"]
                },
                {
                    name: "Tools & Workflow",
                    icon: "fas fa-tools",
                    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Figma"]
                }
            ],
            experience: [
                {
                    id: 1,
                    position: "Desktop Support Intern",
                    company: "Sutherland Global Services – Taguig",
                    duration: "2025",
                    description: "Interned as a Desktop Support Engineer, assisting with IT operations and infrastructure support.",
                    achievements: [
                        "Handled user account management using Active Directory",
                        "Deployed software and updates via SCCM",
                        "Performed system audits and ensured compliance with IT policies"
                    ]
                },
                {
                    id: 2,
                    position: "Participant – AI for Impact Workshop",
                    company: "Cognizant",
                    duration: "2025",
                    description: "Participated in a hands-on workshop focused on AI fundamentals, prompt engineering, and large language models.",
                    achievements: [
                        "Learned principles of effective AI prompting",
                        "Explored inner workings of generative AI and LLMs",
                        "Applied concepts to real-world NLP and text generation scenarios"
                    ]
                },
                {
                    id: 3,
                    position: "Finalist – Hackathon",
                    company: "Meralco Hackathon",
                    duration: "2024",
                    description: "Recognized as a finalist in a nationwide hackathon focused on AI-driven innovation and real-world solutions.",
                    achievements: [
                        "Fine-tuned large language models (LLMs) using Hugging Face",
                        "Developed a working AI prototype under tight deadlines",
                        "Collaborated with a team to pitch and present the solution"
                    ]
                },
                {
                    id: 4,
                    position: "Web Developer (Capstone Project)",
                    company: "Mandaluyong Dog Clinic",
                    duration: "2024",
                    description: "Designed and developed a responsive website for a veterinary clinic as part of the BSIT capstone project.",
                    achievements: [
                        "Built appointment scheduling and service catalog features",
                        "Integrated backend data analytics for client tracking",
                        "Delivered a fully responsive, user-friendly interface"
                    ]
                },
                {
                    id: 5,
                    position: "Java Programmer – Competitor",
                    company: "12th IT Skills Olympics",
                    duration: "2023",
                    description: "Represented Jose Rizal University in a national-level programming competition.",
                    achievements: [
                        "Ranked 15th nationwide in Java Programming",
                        "Earned IT Specialist certification in Java",
                        "Demonstrated strong problem-solving and algorithmic skills"
                    ]
                },
                {
                    id: 6,
                    position: "Champion – Java Programming",
                    company: "IT & EMC Skills Competition",
                    duration: "2023",
                    description: "Won first place in a university-wide coding competition.",
                    achievements: [
                        "Secured 1st place in the Java Programming track",
                        "Delivered clean, efficient code under time pressure",
                        "Demonstrated advanced Java skills and technical leadership"
                    ]
                }
            ],
            projects: [
                {
                    id: 1,
                    name: "Mandaluyong Dog Clinic Website",
                    description: "A full-featured veterinary clinic website that allows pet owners to schedule appointments, browse services, and access pet care resources. Designed for both usability and operational efficiency.",
                    technologies: ["HTML", "CSS", "JavaScript","Tailwind CSS","PHP", "MySQL", "Bootstrap"],
                    image: "uploads/MDCC.png",
                    demo: "https://mdcc-mandaluyong.com",
                    github: "https://github.com/seanticzon/adoption-system"
                },
                {
                    id: 2,
                    name: "Project Portfolio",
                    description: "A collection of applied projects focused on machine learning, natural language processing (NLP), and AI fine-tuning. Highlights include sentiment analysis using BERT, predictive analytics with regression models, and dataset preparation pipelines for real-world business insights.",
                    technologies: ["Python", "Pandas", "Scikit-learn", "Hugging Face Transformers", "NLTK", "Matplotlib", "Jupyter Notebooks"],
                    image: "uploads/ITE4.png",
                    demo: "https://seanticzon.github.io/Ticzon-ITE4Portfolio/",
                    github: "https://github.com/seanticzon/Ticzon-ITE4Portfolio"
                },
                {
                    id: 3,
                    name: "EnergAIze – Smart Energy Audit Assistant",
                    description: "EnergAIze is an AI-powered audit report generation platform developed for the Meralco Hackathon. Designed to assist Certified Energy Auditors and designated establishments, it automates the creation of compliance reports required by the Department of Energy (DOE). Leveraging natural language processing and machine learning, it enhances productivity, reduces manual work, and minimizes human error in technical documentation.",
                    technologies: ["Python", "Hugging Face Transformers", "Pandas", 'MySQL'],
                    image: "uploads/Ener.png",
                    demo: "#",
                    github: "https://github.com/seanticzon/EnergAIze"
                }                    
            ],
            education: [
                {
                    id: 1,
                    degree: "Bachelor of Science in Information Technology",
                    institution: "Jose Rizal University",
                    duration: "2020 - 2024",
                    description: "Graduated with a focus on software development, data structures, and modern web technologies. Completed comprehensive coursework in programming, database management, and system analysis.",
                    highlights: [
                        "Graduated with latin honors Cum Laude",
                        "Graduated with Dean's List recognition",
                        "Specialized in Web Development and Data Analytics",
                        "Completed capstone project for Mandaluyong Dog Clinic",
                        "Active participant in programming competitions and hackathons"
                    ]
                },
                {
                    id: 2,
                    degree: "Senior High School - STEM Track",
                    institution: "Previous Institution",
                    duration: "2018 - 2020",
                    description: "Completed Science, Technology, Engineering, and Mathematics track with focus on computer programming and advanced mathematics.",
                    highlights: [
                        "Developed foundational programming skills in Java and C++",
                        "Participated in DOST project exhibitions and regional science fairs",
                    ]
                }
            ],
            achievements: [
                {
                    id: 1,
                    title: "Graduated Cum Laude",
                    issuer: "Jose Rizal University",
                    date: "2025",
                    icon: "fas fa-graduation-cap",
                    description: "Graduated with Latin Honors (Cum Laude) in recognition of academic excellence.",
                    skills: ["Academic Excellence", "Time Management", "Discipline"]
                },
                {
                    id: 2,
                    title: "AI Workshop Graduate",
                    issuer: "Cognizant – AI for Impact",
                    date: "2025",
                    icon: "fas fa-brain",
                    description: "Completed an intensive workshop on prompt engineering, generative AI, and LLM applications.",
                    skills: ["AI/ML", "Prompt Engineering", "LLMs"]
                },
                {
                    id: 3,
                    title: "Data Analytics Essentials",
                    issuer: "Cisco",
                    date: "2025",
                    icon: "fas fa-chart-line",
                    description: "Earned certification in foundational data analysis, visualization, and interpretation techniques.",
                    skills: ["Data Analytics", "Excel", "Dashboards"]
                },
                {
                    id: 4,
                    title: "HTML Essentials Certification",
                    issuer: "Cisco",
                    date: "2025",
                    icon: "fab fa-html5",
                    description: "Certified by Cisco for mastering HTML fundamentals and semantic markup.",
                    skills: ["HTML5", "Web Development", "Frontend Basics"]
                },
                {
                    id: 5,
                    title: "Certificate of Completion – OJT",
                    issuer: "Sutherland Global Services",
                    date: "2025",
                    icon: "fas fa-briefcase",
                    description: "Completed on-the-job training in desktop support and IT operations.",
                    skills: ["IT Support", "Active Directory", "SCCM"]
                },
                {
                    id: 6,
                    title: "Dean's Lister",
                    issuer: "Jose Rizal University",
                    date: "2024-2025",
                    icon: "fas fa-award",
                    description: "Recognized on the Dean's List for academic performance in 1st semester, SY 2024–2025.",
                    skills: ["Academic Excellence"]
                },
                {
                    id: 7,
                    title: "PSITE International Computing Studies Congress",
                    issuer: "PSITE",
                    date: "2025",
                    icon: "fas fa-globe",
                    description: "Attended a global seminar on cybersecurity resilience and digital transformation.",
                    skills: ["Cybersecurity", "Trends", "Digital Resilience"]
                },
                {
                    id: 8,
                    title: "The New Frontier: Remote Work & Gig Economy",
                    issuer: "Career Dev. Forum",
                    date: "2024",
                    icon: "fas fa-laptop-house",
                    description: "Explored emerging career paths in freelance tech work and remote team collaboration.",
                    skills: ["Remote Work", "Gig Economy"]
                },
                {
                    id: 9,
                    title: "Bootcamp: Welcome to the Outside World",
                    issuer: "Career Development Program",
                    date: "2023",
                    icon: "fas fa-rocket",
                    description: "Participated in a bootcamp designed to prepare students for the transition to industry roles.",
                    skills: ["Career Prep", "Industry Readiness"]
                },
                {
                    id: 10,
                    title: "Mastering Teamwork & Communication",
                    issuer: "Campus Training Program",
                    date: "2023",
                    icon: "fas fa-users",
                    description: "Workshop focused on improving teamwork and communication for tech professionals.",
                    skills: ["Teamwork", "Communication", "Soft Skills"]
                },
                {
                    id: 11,
                    title: "Writing Chapter 1 – Research Training",
                    issuer: "Academic Research Series",
                    date: "2023",
                    icon: "fas fa-book",
                    description: "Learned how to write strong research objectives and frame Chapter 1 of a thesis.",
                    skills: ["Research Writing", "Academic Planning"]
                },
                {
                    id: 12,
                    title: "Best Practices: Review of Related Literature",
                    issuer: "Academic Research Series",
                    date: "2023",
                    icon: "fas fa-book-reader",
                    description: "Trained in writing effective and well-sourced literature reviews for academic work.",
                    skills: ["Research", "Literature Review", "Citation Management"]
                },
                {
                    id: 13,
                    title: "IT Specialist – Database",
                    issuer: "Certiport",
                    date: "2023",
                    icon: "fas fa-database",
                    description: "Earned certification validating knowledge in relational databases, queries, and schema design.",
                    skills: ["SQL", "Database Management", "Normalization"]
                }
            ],
            socialLinks: [
                { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/sean-repti-miguel-ticzon-b6690b278" },
                { name: "GitHub", icon: "fab fa-github", url: "https://github.com/seanticzon" },
                { name: "Email", icon: "fas fa-envelope", url: "mailto:seanticzon@gmail.com" },
                { name: "Phone", icon: "fas fa-phone", url: "tel:+630915340432" }
            ]
        }
    },
    mounted() {
        this.initLoader();
        this.initCursor();
        this.initSmoothScroll();
        
        // Initialize other components after loader is done
        setTimeout(() => {
            this.initScrollProgress();
            this.initScrollIndicator();
            this.initTextReveal();
            this.initSkillMeters();
            this.initMagneticEffect();
            this.initSectionFade();
            this.initCardAnimations();
        }, 3500);
    },
    methods: {
        initLoader() {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    this.startMainAnimations();
                }, 500);
            }, 3000);
        },
        
        startMainAnimations() {
            // Staggered hero text animation
            const heroElements = document.querySelectorAll('#hero .text-reveal');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('is-inview');
                }, index * 150);
            });
            
            // Enhanced floating elements
            this.animateFloatingElements();
            
            // Trigger scroll-based animations
            this.triggerScrollAnimations();
        },
        
        animateFloatingElements() {
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((el, index) => {
                // Initial appearance
                el.style.animationDelay = `${index * 0.2}s`;
                
                // Continuous floating after appearing
                setTimeout(() => {
                    el.style.animation = `floatIn 2s ease-out forwards, float ${8 + index * 2}s ease-in-out infinite`;
                    el.style.animationDelay = `${index * 0.2}s, ${2 + index * 0.2}s`;
                }, 2000);
            });
        },
        
        initCursor() {
            const cursor = document.querySelector('.cursor');
            const follower = document.querySelector('.cursor-follower');
            
            if (!cursor || !follower || window.innerWidth <= 768) {
                if (cursor) cursor.style.display = 'none';
                if (follower) follower.style.display = 'none';
                document.body.style.cursor = 'auto';
                return;
            }
            
            let mouseX = 0, mouseY = 0;
            let followerX = 0, followerY = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
            });
            
            // Smooth follower animation
            const animateFollower = () => {
                followerX += (mouseX - followerX) * 0.1;
                followerY += (mouseY - followerY) * 0.1;
                
                follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
                requestAnimationFrame(animateFollower);
            };
            animateFollower();
        },
        
        initSmoothScroll() {
            if (typeof Lenis !== 'undefined' && window.innerWidth > 768) {
                try {
                    const lenis = new Lenis({
                        duration: 1.8,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        gestureDirection: 'vertical',
                        smooth: true,
                        smoothTouch: false,
                        touchMultiplier: 2,
                        infinite: false
                    });
                    
                    // Store lenis instance for other methods
                    this.lenis = lenis;
                    
                    const raf = (time) => {
                        lenis.raf(time);
                        requestAnimationFrame(raf);
                    };
                    requestAnimationFrame(raf);
                    
                    // Update scroll-based animations
                    lenis.on('scroll', (e) => {
                        this.updateScrollAnimations();
                    });
                    
                } catch (error) {
                    console.log('Smooth scroll not available, using default');
                }
            } else {
                // Fallback for mobile and when Lenis isn't available
                window.addEventListener('scroll', () => {
                    this.updateScrollAnimations();
                });
            }
        },
        
        updateScrollAnimations() {
            // Throttle for performance
            if (!this.scrollTicking) {
                requestAnimationFrame(() => {
                    this.triggerScrollAnimations();
                    this.scrollTicking = false;
                });
                this.scrollTicking = true;
            }
        },
        
        triggerScrollAnimations() {
            // Text reveals
            const reveals = document.querySelectorAll('.text-reveal:not(.is-inview)');
            reveals.forEach(reveal => {
                if (this.isInViewport(reveal, 0.1)) {
                    reveal.classList.add('is-inview');
                }
            });
            
            // Skill meters
            const meters = document.querySelectorAll('.skill-meter:not(.is-visible)');
            meters.forEach(meter => {
                if (this.isInViewport(meter, 0.7)) {
                    setTimeout(() => {
                        meter.classList.add('is-visible');
                    }, 100);
                }
            });
            
            // Section fades
            const sections = document.querySelectorAll('.section-fade:not(.is-visible)');
            sections.forEach(section => {
                if (this.isInViewport(section, 0.15)) {
                    section.classList.add('is-visible');
                }
            });
            
            // Cards
            const cards = document.querySelectorAll('.card-minimal:not(.is-visible)');
            cards.forEach((card, index) => {
                if (this.isInViewport(card, 0.2)) {
                    setTimeout(() => {
                        card.classList.add('is-visible');
                    }, index * 100);
                }
            });
        },
        
        isInViewport(element, threshold = 0.1) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;
            const triggerPoint = windowHeight * threshold;
            
            return rect.top + elementHeight * threshold < windowHeight - triggerPoint;
        },
        
        initScrollProgress() {
            const progressBar = document.getElementById('progressBar');
            if (!progressBar) return;
            
            const updateProgress = () => {
                const scrollTop = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (scrollTop / documentHeight) * 100;
                progressBar.style.width = Math.min(100, Math.max(0, scrollPercentage)) + '%';
            };
            
            if (this.lenis) {
                this.lenis.on('scroll', updateProgress);
            } else {
                window.addEventListener('scroll', updateProgress);
            }
            updateProgress();
        },
        
        initScrollIndicator() {
            const dots = document.querySelectorAll('.scroll-dot');
            const sections = document.querySelectorAll('section');
            
            if (!dots.length || !sections.length) return;
            
            const updateActiveSection = () => {
                let current = 'hero';
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.clientHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        current = section.getAttribute('id');
                    }
                });
                
                dots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('data-section') === current) {
                        dot.classList.add('active');
                    }
                });
            };
            
            if (this.lenis) {
                this.lenis.on('scroll', updateActiveSection);
            } else {
                window.addEventListener('scroll', updateActiveSection);
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const sectionId = dot.getAttribute('data-section');
                    const section = document.getElementById(sectionId);
                    if (section) {
                        if (this.lenis) {
                            this.lenis.scrollTo(section, { duration: 2 });
                        } else {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
            
            updateActiveSection();
        },
        
        initTextReveal() {
            if (typeof Splitting !== 'undefined') {
                Splitting();
            }
        },
        
        initSkillMeters() {
            // Skills will be animated via triggerScrollAnimations
        },
        
        initSectionFade() {
            // Add section-fade class to main sections
            const sections = document.querySelectorAll('section:not(#hero)');
            sections.forEach(section => {
                section.classList.add('section-fade');
            });
        },
        
        initCardAnimations() {
            // Cards will be animated via triggerScrollAnimations
        },
        
        initMagneticEffect() {
            const magneticElements = document.querySelectorAll('.magnetic');
            if (!magneticElements.length) return;
            
            magneticElements.forEach(el => {
                let bounds;
                
                el.addEventListener('mouseenter', () => {
                    bounds = el.getBoundingClientRect();
                });
                
                el.addEventListener('mousemove', (e) => {
                    if (!bounds) return;
                    
                    const x = (e.clientX - bounds.left - bounds.width / 2) * 0.15;
                    const y = (e.clientY - bounds.top - bounds.height / 2) * 0.15;
                    
                    el.style.transform = `translate(${x}px, ${y}px)`;
                });
                
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                    bounds = null;
                });
            });
        }
    }
}).mount('#app');
