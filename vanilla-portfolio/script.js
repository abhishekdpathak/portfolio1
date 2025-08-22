// Portfolio Data
const portfolioData = {
    skills: {
        marketing: [
            { name: "Marketing Strategy & Execution", level: 95 },
            { name: "Campaign Planning", level: 92 },
            { name: "Content Creation", level: 90 },
            { name: "Brand Management", level: 88 },
            { name: "Consumer Behavior Analysis", level: 85 }
        ],
        digital: [
            { name: "SEO/SEM", level: 90 },
            { name: "Social Media Management", level: 95 },
            { name: "Email Marketing", level: 92 },
            { name: "Google Analytics", level: 88 },
            { name: "A/B Testing", level: 85 }
        ],
        technical: [
            { name: "Adobe Creative Suite", level: 88 },
            { name: "Salesforce/HubSpot", level: 85 },
            { name: "Microsoft 365", level: 90 },
            { name: "HTML/CSS", level: 75 },
            { name: "Data Analysis", level: 85 }
        ],
        leadership: [
            { name: "Team Management", level: 90 },
            { name: "Project Coordination", level: 92 },
            { name: "Stakeholder Collaboration", level: 88 },
            { name: "Strategic Planning", level: 85 },
            { name: "Performance Optimization", level: 87 }
        ]
    },
    
    experience: [
        {
            title: "Email Marketing Advisor",
            duration: "2023 - Present",
            location: "Calgary, Canada",
            achievements: [
                "Developed marketing strategies enhancing customer engagement and lead generation",
                "Achieved 20% increase in email open rates through strategic campaign design",
                "Provided mentorship and performance feedback to team members",
                "Conducted A/B testing to refine messaging and improve customer response",
                "Created comprehensive reports and dashboards for KPI tracking"
            ]
        },
        {
            title: "Social Media & Marketing Specialist",
            duration: "2022 - 2023",
            location: "Calgary, Canada",
            achievements: [
                "Assisted in creation of diverse marketing content across multiple platforms",
                "Conducted market research on competitors and customer preferences",
                "Participated in contract negotiations and client relationship management",
                "Analyzed email campaign performance and provided optimization recommendations",
                "Supported proposal development and client presentations"
            ]
        },
        {
            title: "Digital Marketing Strategist",
            duration: "2020 - 2022",
            location: "Rajkot, India",
            achievements: [
                "Implemented go-to-market strategies resulting in 40% increase in brand awareness",
                "Designed 3+ campaigns for multiple product categories globally",
                "Drafted marketing materials including press releases and promotional content",
                "Leveraged social media platforms achieving 40% increase in brand reach",
                "Generated 15% increase in article views and social media engagement"
            ]
        }
    ],
    
    projects: [
        {
            title: "Brand Management Campaign",
            category: "Brand Strategy",
            description: "Designed comprehensive marketing campaign for salon business including customer feedback systems and brand awareness initiatives.",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwwfHx8fDE3NTU4NDY0MDV8MA&ixlib=rb-4.1.0&q=85",
            results: [
                "Significantly increased customer base",
                "Enhanced brand visibility in local market",
                "Improved customer satisfaction scores",
                "Established data-driven feedback loop"
            ],
            technologies: ["Marketing Analytics", "Survey Design", "Brand Strategy", "Customer Research"]
        },
        {
            title: "Strategic Marketing & Brand Extension",
            category: "Product Marketing",
            description: "Created marketing campaign and brand extension strategy for brewery's seltzer drink through comprehensive market research.",
            image: "https://images.pexels.com/photos/6476193/pexels-photo-6476193.jpeg",
            results: [
                "Increased sales for new product line",
                "Enhanced brand awareness in target market",
                "Successful product positioning strategy",
                "Effective audience resonance achieved"
            ],
            technologies: ["Market Research", "Brand Extension", "Consumer Analysis", "Campaign Development"]
        },
        {
            title: "Entrepreneurship Venture",
            category: "Business Development",
            description: "Developed business concept for customized men's formal shoes prioritizing comfort and style through market gap analysis.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwwfHx8fDE3NTU4NDY0MDV8MA&ixlib=rb-4.1.0&q=85",
            results: [
                "Identified untapped market opportunity",
                "Created comprehensive business plan",
                "Developed unique value proposition",
                "Designed customer-centric solution"
            ],
            technologies: ["Market Analysis", "Business Planning", "Product Development", "Consumer Research"]
        },
        {
            title: "Research & Development Initiative",
            category: "Innovation",
            description: "Led research project on carbon adsorbent development for CO2 capture using waste materials for environmental sustainability.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxzdHJhdGVneSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NTU4ODYxOTB8MA&ixlib=rb-4.1.0&q=85",
            results: [
                "Contributed to environmental sustainability research",
                "Developed cost-effective solution approach",
                "Advanced knowledge in carbon capture technology",
                "Published research findings"
            ],
            technologies: ["Research Methodology", "Environmental Analysis", "Technical Writing", "Project Management"]
        }
    ]
};

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
        
        if (mobileNav.classList.contains('show')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        } else {
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        }
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('show');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        });
    });

    // Smooth scrolling for navigation links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add sections to DOM after page loads
    addSkillsSection();
    addExperienceSection();
    addProjectsSection();
    addContactSection();
    addFooterSection();
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add Skills Section
function addSkillsSection() {
    const skillsHTML = `
    <section id="skills" class="skills animated-bg">
        <!-- Floating Elements -->
        <div class="bg-particles">
            <div class="floating-element floating-triangle float-1 emerald" style="top: 8%; left: 12%;"></div>
            <div class="floating-element floating-square float-3 blue-light" style="top: 25%; right: 8%;"></div>
            <div class="floating-element floating-circle float-5 purple-light" style="bottom: 25%; left: 6%;"></div>
            <div class="floating-element floating-hexagon float-2 emerald-light" style="bottom: 8%; right: 12%;"></div>
            <div class="floating-element floating-circle float-4 yellow-light" style="top: 60%; left: 85%;"></div>
            <div class="floating-element floating-square float-1 blue" style="top: 40%; left: 3%;"></div>
        </div>

        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Core <span class="emerald">Skills</span></h2>
                <div class="section-underline"></div>
                <p class="section-description">
                    A comprehensive skill set built through years of hands-on experience in marketing, 
                    digital strategy, and team leadership across diverse industries and markets.
                </p>
            </div>

            <div class="skills-grid">
                <div class="skill-category">
                    <div class="skill-header">
                        <i class="fas fa-bullseye emerald"></i>
                        <h3>Marketing Strategy</h3>
                    </div>
                    <div class="skills-list">
                        ${portfolioData.skills.marketing.map(skill => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress emerald-bg" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skill-category">
                    <div class="skill-header">
                        <i class="fas fa-chart-bar blue"></i>
                        <h3>Digital Marketing</h3>
                    </div>
                    <div class="skills-list">
                        ${portfolioData.skills.digital.map(skill => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress blue-bg" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skill-category">
                    <div class="skill-header">
                        <i class="fas fa-code purple"></i>
                        <h3>Technical Skills</h3>
                    </div>
                    <div class="skills-list">
                        ${portfolioData.skills.technical.map(skill => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress purple-bg" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skill-category">
                    <div class="skill-header">
                        <i class="fas fa-users yellow"></i>
                        <h3>Leadership</h3>
                    </div>
                    <div class="skills-list">
                        ${portfolioData.skills.leadership.map(skill => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress yellow-bg" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Technical Tools Section -->
            <div class="tools-section">
                <h3 class="tools-title">Professional <span class="emerald">Tools & Platforms</span></h3>
                <div class="tools-grid">
                    ${[
                        "Adobe Creative Suite", "Google Analytics", "Salesforce", "HubSpot", 
                        "Microsoft 365", "Canva", "Final Cut Pro", "After Effects", 
                        "ClickUp", "Wrike", "Affinity Designer", "HTML/CSS"
                    ].map(tool => `
                        <div class="tool-card">
                            <span>${tool}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>
    `;
    
    document.querySelector('#about').insertAdjacentHTML('afterend', skillsHTML);
}

// Add Experience Section  
function addExperienceSection() {
    const experienceHTML = `
    <section id="experience" class="experience animated-bg">
        <!-- Floating Elements -->
        <div class="bg-particles">
            <div class="floating-element floating-circle float-2 emerald-light" style="top: 10%; left: 8%;"></div>
            <div class="floating-element floating-hexagon float-4 blue-light" style="top: 30%; right: 12%;"></div>
            <div class="floating-element floating-square float-1 purple-light" style="bottom: 30%; left: 10%;"></div>
            <div class="floating-element floating-triangle float-5 emerald" style="bottom: 10%; right: 8%;"></div>
            <div class="floating-element floating-circle float-3 yellow-light" style="top: 70%; left: 88%;"></div>
        </div>

        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Professional <span class="emerald">Experience</span></h2>
                <div class="section-underline"></div>
                <p class="section-description">
                    A track record of delivering exceptional results across diverse marketing roles, 
                    consistently driving growth and innovation in every position.
                </p>
            </div>

            <div class="timeline">
                ${portfolioData.experience.map((exp, index) => `
                    <div class="timeline-item">
                        ${index !== portfolioData.experience.length - 1 ? '<div class="timeline-line"></div>' : ''}
                        <div class="timeline-dot"></div>
                        
                        <div class="experience-card">
                            <div class="experience-header">
                                <div class="experience-info">
                                    <h3 class="experience-title">${exp.title}</h3>
                                    <div class="experience-meta">
                                        <div class="meta-item">
                                            <i class="fas fa-calendar"></i>
                                            <span>${exp.duration}</span>
                                        </div>
                                        <div class="meta-item">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>${exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="experience-badge">
                                    Marketing Professional
                                </div>
                            </div>

                            <div class="experience-content">
                                <h4 class="achievements-title">Key Achievements & Responsibilities:</h4>
                                <div class="achievements-list">
                                    ${exp.achievements.map(achievement => `
                                        <div class="achievement-item">
                                            <i class="fas fa-check-circle emerald"></i>
                                            <span>${achievement}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Key Metrics Summary -->
            <div class="metrics-summary">
                <h3 class="metrics-title">Impact <span class="emerald">Highlights</span></h3>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-number emerald">20%</div>
                        <div class="metric-label">Email Open Rate Increase</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-number blue">40%</div>
                        <div class="metric-label">Brand Awareness Growth</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-number purple">15%</div>
                        <div class="metric-label">Content Engagement Boost</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-number yellow">10+</div>
                        <div class="metric-label">Product Categories Managed</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    
    document.querySelector('#skills').insertAdjacentHTML('afterend', experienceHTML);
}

// Continue with Projects and Contact sections...
function addProjectsSection() {
    const projectsHTML = `
    <section id="projects" class="projects animated-bg">
        <!-- Floating Elements -->
        <div class="bg-particles">
            <div class="floating-element floating-square float-3 emerald" style="top: 5%; left: 15%;"></div>
            <div class="floating-element floating-triangle float-1 blue-light" style="top: 20%; right: 10%;"></div>
            <div class="floating-element floating-hexagon float-4 purple-light" style="bottom: 20%; left: 8%;"></div>
            <div class="floating-element floating-circle float-2 emerald-light" style="bottom: 5%; right: 15%;"></div>
            <div class="floating-element floating-square float-5 yellow-light" style="top: 65%; left: 90%;"></div>
            <div class="floating-element floating-circle float-1 blue" style="top: 45%; left: 2%;"></div>
        </div>

        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Featured <span class="emerald">Projects</span></h2>
                <div class="section-underline"></div>
                <p class="section-description">
                    Showcasing strategic marketing initiatives and campaigns that delivered measurable results 
                    and drove significant business growth across various industries.
                </p>
            </div>

            <!-- Category Filter -->
            <div class="project-filters">
                <button class="filter-btn active" data-category="all">All</button>
                <button class="filter-btn" data-category="Brand Strategy">Brand Strategy</button>
                <button class="filter-btn" data-category="Product Marketing">Product Marketing</button>
                <button class="filter-btn" data-category="Business Development">Business Development</button>
                <button class="filter-btn" data-category="Innovation">Innovation</button>
            </div>

            <!-- Projects Grid -->
            <div class="projects-grid">
                ${portfolioData.projects.map(project => `
                    <div class="project-card" data-category="${project.category}">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}" />
                            <div class="project-overlay"></div>
                            <div class="project-category">${project.category}</div>
                        </div>
                        
                        <div class="project-content">
                            <div class="project-header">
                                <h3 class="project-title">${project.title}</h3>
                                <i class="fas fa-external-link-alt project-link"></i>
                            </div>
                            
                            <p class="project-description">${project.description}</p>

                            <div class="project-results">
                                <h4 class="results-title">
                                    <i class="fas fa-award emerald"></i>
                                    Key Results
                                </h4>
                                <div class="results-list">
                                    ${project.results.map(result => `
                                        <div class="result-item">
                                            <i class="fas fa-chart-line emerald"></i>
                                            <span>${result}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="project-technologies">
                                <h4 class="tech-title">SKILLS & TOOLS UTILIZED</h4>
                                <div class="tech-tags">
                                    ${project.technologies.map(tech => `
                                        <span class="tech-tag">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Call to Action -->
            <div class="projects-cta">
                <h3 class="cta-title">Ready to Drive Your Next Campaign?</h3>
                <p class="cta-description">
                    Let's collaborate to create data-driven marketing strategies that deliver exceptional results 
                    and accelerate your business growth.
                </p>
                <button class="btn btn-primary" onclick="scrollToSection('contact')">
                    Start a Conversation
                </button>
            </div>
        </div>
    </section>
    `;
    
    document.querySelector('#experience').insertAdjacentHTML('afterend', projectsHTML);
    
    // Add project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function addContactSection() {
    const contactHTML = `
    <section id="contact" class="contact animated-bg">
        <!-- Floating Elements -->
        <div class="bg-particles">
            <div class="floating-element floating-triangle float-2 emerald" style="top: 12%; left: 10%;"></div>
            <div class="floating-element floating-circle float-4 blue-light" style="top: 28%; right: 15%;"></div>
            <div class="floating-element floating-hexagon float-1 purple-light" style="bottom: 25%; left: 12%;"></div>
            <div class="floating-element floating-square float-5 emerald-light" style="bottom: 12%; right: 10%;"></div>
            <div class="floating-element floating-circle float-3 yellow-light" style="top: 60%; left: 85%;"></div>
        </div>

        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In <span class="emerald">Touch</span></h2>
                <div class="section-underline"></div>
                <p class="section-description">
                    Ready to take your marketing to the next level? Let's discuss how we can work together 
                    to achieve your business goals and drive exceptional results.
                </p>
            </div>

            <div class="contact-grid">
                <!-- Contact Information -->
                <div class="contact-info">
                    <h3 class="contact-title">Let's Start a Conversation</h3>
                    <p class="contact-description">
                        I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                        or share insights about marketing strategy and digital growth. Whether you're looking 
                        for a marketing professional or want to explore partnership opportunities, I'd love to hear from you.
                    </p>

                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-icon emerald">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <div class="contact-label">Email</div>
                                <a href="mailto:abhishekpathak1497@gmail.com" class="contact-value">
                                    abhishekpathak1497@gmail.com
                                </a>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon blue">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <div class="contact-label">Phone</div>
                                <a href="tel:+15874349045" class="contact-value">
                                    +1 (587) 434-9045
                                </a>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon purple">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <div class="contact-label">Location</div>
                                <div class="contact-value">
                                    Calgary (Open to relocate)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Call-to-Action Section -->
                <div class="contact-cta">
                    <div class="cta-card">
                        <div class="cta-icon">
                            <i class="fas fa-calendar emerald"></i>
                        </div>
                        <h4 class="cta-card-title">Ready to Collaborate?</h4>
                        <p class="cta-card-description">
                            I'm currently open to new opportunities and excited to bring my marketing expertise 
                            to forward-thinking organizations.
                        </p>
                        
                        <div class="cta-buttons">
                            <button class="btn btn-primary" onclick="window.open('mailto:abhishekpathak1497@gmail.com?subject=Marketing Collaboration Opportunity', '_blank')">
                                Send Email
                            </button>
                            <button class="btn btn-secondary" onclick="window.open('tel:+15874349045', '_blank')">
                                Call Now
                            </button>
                        </div>
                    </div>

                    <!-- Professional Highlights -->
                    <div class="highlights-card">
                        <h4 class="highlights-title">What I Bring</h4>
                        <div class="highlights-list">
                            ${[
                                "5+ years of proven marketing experience",
                                "Data-driven campaign optimization",
                                "Cross-functional team leadership",
                                "Multi-market experience (Canada & India)",
                                "Technical & creative skill combination",
                                "Results-focused approach"
                            ].map(highlight => `
                                <div class="highlight-item">
                                    <div class="highlight-bullet emerald"></div>
                                    <span>${highlight}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    
    document.querySelector('#projects').insertAdjacentHTML('afterend', contactHTML);
}

function addFooterSection() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3 class="footer-title emerald">Abhishek Pathak</h3>
                    <p class="footer-subtitle">Marketing Strategist & Digital Growth Expert</p>
                </div>

                <div class="footer-links">
                    <a href="#home" class="footer-link">Home</a>
                    <a href="#about" class="footer-link">About</a>
                    <a href="#skills" class="footer-link">Skills</a>
                    <a href="#experience" class="footer-link">Experience</a>
                    <a href="#projects" class="footer-link">Projects</a>
                    <a href="#contact" class="footer-link">Contact</a>
                </div>

                <div class="footer-scroll">
                    <button onclick="scrollToSection('home')" class="scroll-top-btn">
                        <span>Back to Top</span>
                        <i class="fas fa-chevron-up"></i>
                    </button>
                </div>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-bottom">
                <div class="footer-copyright">
                    © ${new Date().getFullYear()} Abhishek Pathak. All rights reserved.
                </div>
                
                <div class="footer-made-with">
                    <span>Made with</span>
                    <i class="fas fa-heart" style="color: #ef4444;"></i>
                    <span>for marketing excellence</span>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    document.querySelector('#contact').insertAdjacentHTML('afterend', footerHTML);
}