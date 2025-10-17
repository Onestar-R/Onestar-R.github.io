// ========================================
// About Page Data
// ========================================

const aboutData = {
    // Biography
    biography: {
        paragraphs: [
            "I am currently pursuing a Ph.D. in Supply Chain Management, with research interests in digital logistics, behavioral analytics, operations research, and data-driven decision-making in logistics and transportation systems. I hold both a Bachelor’s and a Master’s degree in Logistics from Inha University, South Korea.",
            "During my graduate studies, I explored how behavioral analytics and optimization can enhance the efficiency and fairness of logistics operations. My work includes studies on last-mile delivery optimization, demand forecasting, and behavioral modeling of logistics service users.  I have also participated in several government- and industry-funded projects—such as hydrogen supply chain optimization, digital logistics demonstration design and analysis, and preference modeling for underground logistics services—bridging theoretical modeling with real-world applications. ",
            "My recent research extends to applying generative models in logistics decision environments. I have presented my work at major international conferences, including the INFORMS Annual Meeting and the TRB Annual Meeting. Methodologically, I employ econometric modeling, discrete choice analysis, and optimization approaches to address emerging challenges in digital and urban logistics systems."
        ]
    },

    // Education
    education: [
        {
            degree: "Ph.D. Candidate in Supply Chain Logistics",
            institution: "Graduate School of Logistics, Inha University, Incheon, South Korea",
            date: "Feb. 2023 - Present",
            isCurrent: true
        },
        {
            degree: "Master of Science in Logistics",
            institution: "Graduate School of Logistics, Inha University, Incheon, South Korea",
            date: "Feb. 2023",
            isCurrent: false,
            thesis: "Destination Allocation Model Considering Route-income Fairness and Efficiency",
            award: "Highest Academic Achievement Award"
        },
        {
            degree: "Bachelor of Logistics",
            institution: "Asia Pacific School of Logistics, Inha University, Incheon, South Korea",
            date: "Feb. 2021",
            isCurrent: false,
            major: "Logistics",
            interdisciplinary: "Software Convergence Engineering"
        }
    ],

    // Experiences
    experiences: {
        // Research
        research: [
            {
                category: "RESEARCH",
                categoryColor: "blue",
                title: "Visiting Student",
                institution: "University of California, Irvine (UCI), United States",
                date: "Dec. 2021 - Feb. 2022",
                activities: [
                    "Involved in Professor R. Jayakrishnan Project \n<br> Title: <span class=\"italic\"> A Smart Mobility Platform with Fair Congestion Pricing and Efficiently Distributed Incentives to Equitably Reduce VMT</span>",
                    "Audited a class, Transportation Networks. I"
                ]
            }
        ],
        
        // Teaching
        teaching: [
            {
                category: "TEACHING",
                categoryColor: "green",
                title: "Lecturer",
                isMultiple: true,
                entries: [
                    {
                        institution: "Inha University, Incheon, South Korea",
                        date: "2024",
                        courses: ["Introduction to Computer Programming (Fall 2024)"]
                    },
                    {
                        institution: "Incheon National University, Incheon, South Korea",
                        date: "2024",
                        courses: ["Urban Data Mining (Spring 2024)"]
                    }
                ]
            },
            {
                category: "TEACHING",
                categoryColor: "green",
                title: "Teaching Assistant",
                institution: "Inha University, Incheon, South Korea",
                date: "2021 - 2023",
                activities: [
                    "Introduction to Computer Programming (Fall 2023, Fall 2022, Fall 2021)",
                    "Mathematics for Logistics (Spring 2022)",
                    "AI Programming in Logistics (Spring 2022)"
                ]
            }
        ],

        // Extracurricular
        extracurricular: [
            {
                category: "EXTRACURRICULAR",
                categoryColor: "purple",
                title: "Inha Tutoring Program",
                institution: "Inha University, Incheon, South Korea",
                date: "Fall 2023",
                activities: [
                    "Assisted master's degree students in the Smart Freight Mobility course and provided guidance on research paper development"
                ]
            },
            {
                category: "EXTRACURRICULAR",
                categoryColor: "purple",
                title: "Resident Assistant",
                institution: "Inha University, Incheon, South Korea",
                date: "Feb. 2021 - Jan. 2023",
                activities: [
                    "Assisted international students with problem solving in English and performed administrative responsibilities for the dormitory twice a week"
                ]
            },
            {
                category: "EXTRACURRICULAR",
                categoryColor: "purple",
                title: "Club Association",
                isMultiple: true,
                entries: [
                    {
                        position: "President",
                        institution: "Inha University Club Association, Incheon, South Korea",
                        date: "Jan. 2018 - Dec. 2018",
                        activities: [
                            "Led the university-wide club association, coordinating activities among student organizations and representing their interests to the administration"
                        ]
                    },
                    {
                        position: "Member",
                        institution: "Inha University Club Association, Incheon, South Korea",
                        date: "Aug. 2016 - Dec. 2017",
                        activities: [
                            "Planned and managed projects and events for student clubs across the university"
                        ]
                    }
                ]
            },
            {
                category: "EXTRACURRICULAR",
                categoryColor: "purple",
                title: "English as a Second Language Program",
                institution: "University of Regina, Regina, Canada",
                date: "Jun. 2017 - Jul. 2017",
                activities: []
            }
        ]
    },

    // Awards and Honors
    awards: {
        conferenceAndPapers: [
            {
                title: "Outstanding Paper Award",
                organization: "<span class=\"italic\">Korean Society of Transportation Policy and Economics</span>",
                month: "Mar. 2025",
                paper: "Analysis of Time Series Characteristics of Urban Logistics Demand According to Spatial Unit Changes: Focus on Seoul's Origin-Destination Freight Volume",
                badges: []
            },
            {
                title: "Outstanding Paper Award",
                organization: "<span class=\"italic\">The Korea Logistics Research Association</span>",
                month: "Nov. 2024",
                paper: "Comparative Analysis of Confidence Interval Estimation Models for Parcel Delivery Demand: Addressing Uncertainties in Demand",
                badges: []
            },
            {
                title: "Honorable Mention Award",
                organization: "<span class=\"italic\">Korean Society of Transportation Policy and Economics</span>",
                month: "Mar. 2024",
                paper: "Development of a Regional Electric Vehicle Adoption Growth Prediction Model for Evaluating and Planning Future Electric Vehicle Charging Infrastructure Deployment Levels",
                badges: ["FA"]
            },
            {
                title: "Honorable Mention Award",
                organization: "<span class=\"italic\">Korean Society of Transportation Policy and Economics</span>",
                month: "Mar. 2024",
                paper: "Analysis of Satisfaction/Dissatisfaction Factors for Digital Shared Logistics Services for Small Business Owners",
                badges: []
            },
            {
                title: "Best Paper Award",
                organization: "<span class=\"italic\">The Korean Society of Intelligent Transportation Systems</span>",
                month: "Nov. 2023",
                paper: "A Study on the Accessibility Assessment of Hydrogen Vehicle Charging Infrastructure: A Case Study of Ulsan City",
                badges: ["FA", "star"]
            },
            {
                title: "Outstanding Paper Award",
                organization: "<span class=\"italic\">The Society of Logistics Science and Technology</span>",
                month: "Nov. 2023",
                paper: "Analysis of Electric Vehicle Demand Characteristics for Establishing Highway Electric Vehicle Charging Station Deployment Strategy",
                badges: ["FA"]
            },
            {
                title: "Best Paper Award",
                organization: "<span class=\"italic\">Korean Society of Transportation Policy and Economics</span>",
                month: "Sep. 2023",
                paper: "The Determinants of Cargo Rates Utilizing Big Data from a Digital Freight Carrier Platform",
                badges: ["star"]
            },
            {
                title: "Honorable Mention Award",
                organization: "<span class=\"italic\">Korean Society of Transportation Policy and Economics</span>",
                month: "Sep. 2023",
                paper: "Analysis of Hydrogen Supply Chain Trends through Semantic Network Analysis",
                badges: ["FA"]
            },
            {
                title: "Best Paper Award",
                organization: "<span class=\"italic\">Korea Logistics Society</span>",
                month: "May. 2023",
                paper: "A Marginal Effects Approach of Railway-based Urban Logistics Services",
                badges: ["FA", "star"]
            },
            {
                title: "Best Paper Award",
                organization: "<span class=\"font-semibold text-gray-700\">Paper Competition</span>, <span class=\"italic\">The Korea Logistics Research Association</span>",
                month: "Dec. 2022",
                paper: "Market analysis of container ships considering supply chain risks: Ocean freight rate forecast using panel data",
                badges: []
            },
            {
                title: "Outstanding Paper Award",
                organization: "<span class=\"font-semibold text-gray-700\">Paper Competition</span>, <span class=\"italic\">The Korean Production and Operations Management Society</span>",
                month: "Nov. 2022",
                paper: "Risks in Parts Supply Chain and Their Impact on Supply Chains and Shipping Sector: Focusing on Automobile Industry",
                badges: ["star"]
            },
            {
                title: "Bronze Award",
                organization: "<span class=\"font-semibold text-gray-700\">Data Analysis Competition</span>, <span class=\"italic\">Kakao Mobility</span>",
                month: "Sep. 2022",
                paper: "Kakao Mobility Data Contest: Parking Lot Occupancy Prediction Problem",
                badges: ["FA", "star"]
            },
            {
                title: "Outstanding Paper Award",
                organization: "<span class=\"italic\">Korea Logistics Society</span>",
                month: "May. 2022",
                paper: "Analysis of Factors Affecting Preference of Urban Railway based Logistics Services",
                badges: ["FA"]
            },
            {
                title: "Grand Prize",
                organization: "<span class=\"font-semibold text-gray-700\">Paper Competition</span>, <span class=\"italic\">The Korean Society of Supply Chain Management</span>",
                month: "Apr. 2022",
                paper: "Optimal Design of Hydrogen Supply Chain Considering Hydrogen Consumers' Travel Patterns and Energy Accessibility",
                badges: ["FA", "star"],
                starColor: "yellow-500"
            },
            {
                title: "Best Paper Award",
                organization: "<span class=\"italic\">The Society of Logistics Science and Technology</span>",
                month: "Nov. 2021",
                paper: "Development of an Optimization Model for Determining the Optimal Service Level of Micro-Fulfillment in Urban Areas",
                badges: ["FA", "star"]
            },
            {
                title: "Honorable Mention Award",
                organization: "<span class=\"font-semibold text-gray-700\">Paper Competition</span>, <span class=\"italic\">The Society of Logistics Science and Technology</span>",
                month: "Nov. 2021",
                paper: "A Study on Dispatching Area Minimizing Last Mile Delivery Time",
                badges: ["FA"]
            }
        ],
        scholarshipsAndRecognition: [
            {
                title: "BK (Brain Korea) INSTAR Scholarships",
                organization: "<span class=\"italic\">Inha University</span>",
                year: "2021 - 2025",
                description: "Awarded to qualified graduate students, full-tuition, and stipend",
                borderColor: "blue-500"
            },
            {
                title: "Award of Excellence",
                organization: "<span class=\"italic\">Incheon Metropolitan Council</span>",
                year: "2021",
                description: "Recognized for outstanding academic performance and exemplary conduct",
                borderColor: "blue-500"
            },
            {
                title: "Digital Logistics Specialist Scholarship",
                organization: "<span class=\"italic\">Inha University</span>",
                year: "2020",
                description: "Awarded for outstanding academic achievement and specialization in digital logistics",
                borderColor: "blue-500"
            },
            {
                title: "Leadership Scholarships",
                organization: "<span class=\"italic\">Inha University</span>",
                year: "Fall 2016 - Fall 2019",
                description: "Granted in recognition of service as President and Member of the Student Club Association",
                borderColor: "blue-500"
            }
        ]
    },

    // Technical Skills
    technicalSkills: {
        programming: {
            language: ["Python", "C", "C++", "Java"],
            statistics: ["STATA", "R"],
            database: ["SQL", "PostgreSQL"],
            gis: ["ArcGIS", "QGIS"],
            optimization: ["Gurobi", "CPLEX"]
        },
        researchMethodology: ["Optimization", "Discrete Choice Model", "Econometrics", "Text-mining", "Growth Modeling", "Traffic Flow Analysis", "Simulation"]
    }
};
