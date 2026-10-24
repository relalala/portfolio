import type { ExperienceItem, Certificate, Eligibility } from '../type/portfolio';

export const experienceData: ExperienceItem[] = [
    // --- WORK & INTERNSHIP EXPERIENCE ---
    {
        id: 1,
        role: 'Embedded Systems & Workstation OJT Trainee',
        organization: 'Department of Information and Communications Technology (DICT) Region II',
        period: 'May 2026 – July 2026',
        location: 'Tuguegarao City, Cagayan',
        type: 'OJT / Internship',
        description: [
            'Designed 3D hardware CAD enclosures for microcontrollers and IoT telemetry sensors.',
            'Facilitated ICT literacy, TECH4ED skills training, and hardware repair workshops for senior citizens.',
            'Maintained workstation infrastructure and performed hardware diagnostic troubleshooting.'
        ],
        badgeColor: 'badge-blue',
    },

    // --- MAJOR SUMMITS & CONFERENCES ---
    {
        id: 2,
        role: 'Summit Delegate & Participant',
        organization: 'Regional Information Technology and Engineering Summit 2026 (SPUP)',
        period: 'July 20, 2026 – July 22, 2026',
        location: 'St. Paul University Philippines, Tuguegarao City',
        type: 'Summit / Seminar',
        description: [
            'Attended technical sessions on "Building Smarter Futures through Technology and Engineering".',
            'Engaged with regional IT and engineering leaders on emerging web frameworks, cloud architecture, and industrial automation.'
        ],
        badgeColor: 'badge-blue',
    },
    {
        id: 3,
        role: 'Conference Participant & Researcher',
        organization: 'Frontiers of Computer Engineering: 2025 International Conference',
        period: 'December 12, 2025 – December 13, 2025',
        location: 'CSU Carig / ICpEP-Singapore (Virtual)',
        type: 'International Conference',
        description: [
            'Participated in technical conference sessions on Scopus & Clarivate article indexing using AI tools, Enterprise Cybersecurity, and Ransomware Resilience.',
            'Explored advanced topics in Project Management in Engineering, Smart AI Imaging Systems in Biomedical applications, and Proactive AI Defense.'
        ],
        badgeColor: 'badge-blue',
    },

    // --- KEY PROJECTS HIGHLIGHTS ---
    {
        id: 4,
        role: 'Lead Embedded Systems & Telemetry Developer',
        organization: 'HydroCast Flood Risk Mapping & Telemetry System',
        period: '2026',
        location: 'Tuguegarao City, Cagayan',
        type: 'Major Project',
        description: [
            'Engineered an ESP32 and LoRa-based early warning flood risk mapping network integrated with real-time sensor updates and Open-Meteo API forecasts.'
        ],
        badgeColor: 'badge-blue',
    },
    {
        id: 5,
        role: 'Hardware & Research Contributor',
        organization: 'Project FLAMES (Fire Life-saving Alarm with Message Encrypted System)',
        period: '2025 – 2026',
        location: 'CSU Carig Campus',
        type: 'Class Project',
        description: [
            'Collaborated in developing a prototype that detects smoke/fire, alarms occupants, and transmits encrypted emergency notification messages to authorities.',
            'Assisted in circuit assembly, wiring, and soldering; initiated the formulation of the technical research paper.'
        ],
        badgeColor: 'badge-blue',
    },
    {
        id: 6,
        role: 'Full-Stack Developer & UI Designer',
        organization: 'Computer Engineering Alumni Job Portal & OASIS Platforms',
        period: '2025 – 2026',
        location: 'CSU Carig Campus',
        type: 'Class Project',
        description: [
            'Developed centralized web platforms using Vue 3 and TypeScript for alumni career tracking, skill profiling, and academic administrative data supervision.'
        ],
        badgeColor: 'badge-blue',
    },

    // --- WEBINAR SERIES & TRAINING HIGHLIGHTS ---
    {
        id: 7,
        role: 'Participant – DICT National ICT Month 2026 & TECH4ED Series',
        organization: 'Department of Information and Communications Technology (DICT Region II)',
        period: 'June 2026',
        location: 'Tuguegarao City / Zoom',
        type: 'Training & Webinars',
        description: [
            'Completed TECH4ED-DTC ICT Skills Training covering Hour of AI, Cyber Hygiene, and Social Media Marketing.',
            'Attended National ICT Month sessions on Intellectual Property Rights (IPR) basics and digital economic opportunities for Filipinos.'
        ],
        badgeColor: 'badge-blue',
    },
    {
        id: 8,
        role: 'Webinar Series Participant',
        organization: 'ICpEP Region 2 (TalakTech Series)',
        period: 'September 2025 – December 2025',
        location: 'Virtual / Zoom',
        type: 'Technical Webinars',
        description: [
            'Participated in a multi-part technical series covering Data Analytics 101, Machine & Deep Learning Algorithms, Quantum Computing, Smart Cities & E-Governance, and IP Rights.'
        ],
        badgeColor: 'badge-blue',
    }
];

export const eligibilitiesData: Eligibility[] = [
    {
        id: 1,
        title: 'Civil Service Examination (CSE) – Professional Level',
        issuer: 'Civil Service Commission (CSC)',
        date: 'Passer',
        licenseNo: 'CSC-PROF',
        description: 'Government professional eligibility granting permanent appointment qualification for professional and technical positions in civil service.'
    },
    {
        id: 2,
        title: 'Computer Systems Servicing NC II (CSS NC II)',
        issuer: 'TESDA (Technical Education and Skills Development Authority)',
        date: 'Certified Qualification',
        licenseNo: 'CXA-05-795-02031-001',
        description: 'National qualification for setting up computer networks, maintaining servers, and performing computer hardware and system repair.'
    },
    {
        id: 3,
        title: 'Safety Officer 2 (SO2) Certification',
        issuer: 'Mastery Consultancy OPC',
        date: 'Certified',
        licenseNo: 'MASTERY BOSH-2026-0513-0995',
        description: 'Basic Occupational Safety and Health (BOSH) certification for implementing safety protocols, hazard evaluation, and accident prevention.'
    }
];

export const certificatesData: Certificate[] = [
    // --- 2026 CERTIFICATES (Sorted Newest to Oldest) ---
    {
        id: 1,
        title: 'Best Presenter – Basic Occupational Safety and Health Training (SO2)',
        issuer: 'Mastery Consultancy OPC (DOLE OSHC Accredited)',
        date: 'September 13, 2026',
        image: '/images/SO2 BEST PRESENTER.png',
        skills: ['Occupational Safety', 'SO2', 'Public Speaking', 'Hazard Evaluation']
    },
    {
        id: 2,
        title: 'Regional ITE Summit 2026: Building Smarter Futures through Technology and Engineering',
        issuer: 'St. Paul University Philippines / SITE',
        date: 'July 22, 2026',
        image: '/images/ITE SUMMIT CERT.png',
        skills: ['Smart Systems', 'Engineering', 'IT Innovation']
    },
    {
        id: 3,
        title: 'How to Get Started in Cybersecurity (For Beginners Only)',
        issuer: 'Tech Academy (Billy Ramirez IT Solutions)',
        date: 'July 4, 2026',
        image: '/images/Certificate for Xyrrelle Faith  for _Certificate of Participatio._ (2)-1.png',
        skills: ['Cybersecurity', 'Network Security', 'Digital Defense']
    },
    {
        id: 4,
        title: 'TECH4ED-DTC ICT Skills Training',
        issuer: 'DICT Region II & ILCDB',
        date: 'June 18, 2026',
        image: '/images/TECH4ED CERT.png',
        skills: ['AI for MSMEs', 'Digital Literacy', 'Cyber Hygiene', 'Social Media Marketing']
    },
    {
        id: 5,
        title: 'Your Work, Your Rights: IPR Basics for Freelancers and Digital Workers',
        issuer: 'DICT Region II / National ICT Month 2026',
        date: 'June 17, 2026',
        image: '/images/IPR RIGHTS CERT.png',
        skills: ['Intellectual Property', 'Digital Rights', 'Copyright']
    },
    {
        id: 6,
        title: 'How Technology Creates Opportunities for Filipinos',
        issuer: 'DICT Region II / National ICT Month 2026',
        date: 'June 16, 2026',
        image: '/images/HOW TECHNOLOGY CREATES OPPORTUNITIES FOR FILIPINOS CERT.png',
        skills: ['Digital Economy', 'Tech Trends', 'Career Development']
    },
    {
        id: 7,
        title: 'Stay Secure in a Digital World (Cyber Security Webinar)',
        issuer: 'CSU Carig - College of Information & Computing Sciences',
        date: 'April 10, 2026',
        image: '/images/Xyrrelle Faith Cauilan Cybersec E-cert-1.png',
        skills: ['Cybersecurity', 'Digital Safety', 'Data Protection']
    },

    // --- 2025 CERTIFICATES (Sorted Newest to Oldest) ---
    {
        id: 8,
        title: 'Frontiers of Computer Engineering: 2025 International Conference (Day 2 - Project Management & Smart AI Imaging)',
        issuer: 'Cagayan State University & ICpEP-Singapore',
        date: 'December 13, 2025',
        image: '/images/INTERNATIONAL CONVENTION D2.jpg',
        skills: ['Project Management', 'AI in Biomedical Application', 'Cybersecurity Redefinition']
    },
    {
        id: 9,
        title: 'Frontiers of Computer Engineering: 2025 International Conference (Day 1 - Scopus Publishing & Ransomware Resilience)',
        issuer: 'Cagayan State University & ICpEP-Singapore',
        date: 'December 12, 2025',
        image: '/images/INTERNATIONAL CONVENTION D1.jpg',
        skills: ['Scopus Research', 'Enterprise Cybersecurity', 'Ransomware Resilience']
    },
    {
        id: 10,
        title: 'Design. Develop. Deliver: The Engineer\'s Guide in Research Writing and Presentation',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'December 8, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-9.png',
        skills: ['Research Writing', 'Technical Presentation']
    },
    {
        id: 11,
        title: 'Digital Transformation in Smart Cities and E-Governance',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'December 8, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-8.png',
        skills: ['Smart Cities', 'E-Governance', 'IoT']
    },
    {
        id: 12,
        title: 'From Concept to Protection: Understanding Patent and IP Rights in Engineering and Technology',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'December 8, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-7.png',
        skills: ['Patents', 'Intellectual Property', 'Engineering Law']
    },
    {
        id: 13,
        title: 'The Digital Mirror: Nurturing Emotional Intelligence and Ethical Awareness in an AI-Driven World',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'November 29, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-5.png',
        skills: ['AI Ethics', 'Emotional Intelligence']
    },
    {
        id: 14,
        title: 'Quantum Computing',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'October 18, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-6.png',
        skills: ['Quantum Computing', 'Emerging Tech']
    },
    {
        id: 15,
        title: 'Machine Learning and Deep Learning Algorithms',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'October 11, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-4.png',
        skills: ['Machine Learning', 'Deep Learning', 'AI Algorithms']
    },
    {
        id: 16,
        title: 'Data Analytics 101: Making Sense of Data',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'October 4, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-3.png',
        skills: ['Data Analytics', 'Data Processing']
    },
    {
        id: 17,
        title: 'Mind Over Matter: Time and Stress Management for Student Engineers',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'September 20, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-1.png',
        skills: ['Time Management', 'Professional Wellness']
    },
    {
        id: 18,
        title: 'Engineering Your Online Reputation: Social Media and Professional Identity',
        issuer: 'ICpEP Region 2 (TalakTech Series)',
        date: 'September 20, 2025',
        image: '/images/Cauilan, Xyrrelle Faith A. (2)-2.png',
        skills: ['Professional Branding', 'Digital Ethics']
    },
    {
        id: 19,
        title: 'Best Practices for Personal Data Protection: Safeguarding Your Digital Life',
        issuer: 'DOST-SEI AGENTS / CSU Carig',
        date: 'April 4, 2025',
        image: '/images/__Name (To be used in your Certificate of Participation_ i.e. Juan S. Dela Cruz)__ (2)-1.png',
        skills: ['Data Privacy', 'Personal Data Protection', 'Digital Security']
    }
];