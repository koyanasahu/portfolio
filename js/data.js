const portfolioData = {
  personal: {
    name: "KOYANA SAHU",
    monogram: "KS",
    badgeLabel: "PORTFOLIO",
    role: "Business Analyst | Data-Driven Problem Solver",
    targetRoles: "MBA Business Analytics | Business Analyst | BI & Data Analytics",
    location: "Punjab / Delhi, India",
    email: "koyanasahu12@gmail.com",
    phone: "+91-7077693111",
    linkedin: "https://linkedin.com/in/koyana-sahu",
    github: "https://github.com/koyanasahu",
    resumeUrl: "assets/resume/Koyana - 12527287 - Specialized CV(1).pdf",
    heroStats: [
      { value: 6, suffix: "+", label: "Analytics Projects" },
      { value: 290, suffix: "+", label: "Leads Audited" },
      { value: 100, suffix: "+", label: "Event Participants Led" }
    ],
    floatingSkills: [
      { name: "Power BI", type: "powerbi" },
      { name: "SQL", type: "sql" },
      { name: "Python", type: "python" },
      { name: "Excel", type: "excel" }
    ]
  },

  about: {
    tag: "01. OVERVIEW",
    heading: "About Me",
    subtitle: "Turning data into actionable business insights through analytics, visualization, and structured problem-solving.",
    summary: `MBA Business Analytics candidate with a solid B.Com (Hons.) foundation from Hansraj College, University of Delhi. Specializing in bridging data analytics with strategic business decisions through robust data modeling, visualization, and exploratory analytics.

As a former Business Analyst Intern at Zorgers Home Healthcare, I applied hands-on analytics in sales auditing, KPI tracking, customer segmentation, and market basket analysis—translating raw operational data into actionable executive recommendations that drive revenue and operational excellence.`,
    highlights: [
      "Translates complex multidimensional datasets into clear executive dashboards and KPI scorecards.",
      "Expertise in exploratory data analysis (EDA), SQL CTEs, window functions, and DAX modeling.",
      "Combines commerce-rooted business acumen with rigorous statistical and analytical methodologies."
    ]
  },

  skills: {
    categories: [
      {
        title: "Technical Skills",
        icon: "code",
        items: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-Learn",
          "SQL",
          "Power BI",
          "DAX",
          "MS Excel",
          "Data Analysis",
          "Data Visualization",
          "Statistical Analysis",
          "Variance Analysis",
          "KPI Analysis",
          "Risk Analysis"
        ]
      },
      {
        title: "Tools & Platforms",
        icon: "tool",
        items: [
          "Power BI Desktop",
          "Microsoft Excel",
          "SQL Server",
          "Jupyter Notebook",
          "PowerPoint",
          "Python",
          "Matplotlib"
        ]
      },
      {
        title: "Soft Skills & Business Acumen",
        icon: "users",
        items: [
          "Team Leadership",
          "Analytical Thinking",
          "Trailblazer",
          "Time Management & Prioritization",
          "Cognizant",
          "Sanguine",
          "Persistent",
          "Participant Coordination"
        ]
      }
    ]
  },

  education: [
    {
      degree: "Master of Business Administration – Business Analytics",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      duration: "Aug 2025 – Present",
      grade: "CGPA: 8.72",
      status: "Pursuing",
      details: "Focusing on Business Intelligence, Predictive Analytics, Financial & Marketing Analytics, and Big Data frameworks."
    },
    {
      degree: "Bachelor of Commerce (Hons.)",
      institution: "Hansraj College, University of Delhi",
      location: "Delhi",
      duration: "Jul 2020 – Apr 2023",
      grade: "76.67%",
      status: "Completed",
      details: "Rigorous coursework in Financial Accounting, Business Statistics, Operations Research, Management Auditing, and Corporate Finance."
    },
    {
      degree: "Intermediate",
      institution: "D.A.V Public School, Chandrasekharpur",
      location: "Bhubaneswar, Odisha",
      duration: "Apr 2019 – May 2020",
      grade: "91.2%",
      status: "Completed",
      details: "Senior secondary education with strong foundational mastery in mathematics, commerce, and analytical disciplines."
    }
  ],

  experience: [
    {
      role: "BUSINESS ANALYST INTERN",
      company: "ZORGERS HOME HEALTHCARE PVT. LTD.",
      subInitiative: "THE VINTAGE CLUB – ASSISTED LIVING INITIATIVE",
      logo: "assets/zorgers_logo.png",
      type: "Internship",
      location: "MOHALI, INDIA",
      duration: "JUNE – JULY 2026",
      description: "Worked across Zorgers (home healthcare) and The Vintage Club (assisted living) to solve business problems using data-driven insights that drive revenue growth, operational efficiency and strategic expansion.",
      kpis: [
        { value: 290, suffix: "+", label: "LEADS ANALYSED" },
        { value: 7, suffix: "", label: "MONTHS OF DATA ANALYSED" },
        { value: 22, suffix: "", label: "QUALIFIED LEADS IDENTIFIED" },
        { value: 200, suffix: "+", label: "SALES CALLS AUDITED" },
        { value: 20, suffix: "+", label: "COMPETITORS BENCHMARKED" },
        { value: "TOP 5", suffix: "", isText: true, label: "EXPANSION CITIES SHORTLISTED" }
      ],
      responsibilities: [
        "Analysed leads, sales calls and customer data to evaluate conversion funnels and identify growth opportunities",
        "Conducted market and competitor research for assisted living facilities across India",
        "Identified cross-sell and upsell opportunities to maximize ARPU and customer lifetime value",
        "Developed city expansion strategy and bed-capacity assessment for The Vintage Club",
        "Prepared investor-ready insights and strategic recommendations"
      ],
      highlightsSlides: [
        {
          tag: "SLIDE 01 / 03 — LEAD & REVENUE FUNNEL",
          title: "Lead Acquisition & Conversion Diagnostics",
          kpis: [
            { value: "290+", label: "LEADS ANALYSED" },
            { value: "7", label: "MONTHS OF DATA ANALYSED" },
            { value: "22", label: "QUALIFIED LEADS IDENTIFIED" }
          ],
          takeaway: "Audited multi-channel inquiry logs across 7 months, isolating conversion drop-offs to generate 22 high-intent qualified leads."
        },
        {
          tag: "SLIDE 02 / 03 — SALES AUDITING & MARKET BASKET",
          title: "Sales Quality & Cross-Sell Architecture",
          kpis: [
            { value: "200+", label: "SALES CALLS AUDITED" },
            { value: "3x", label: "SERVICE BUNDLE AFFINITY" },
            { value: "ARPU", label: "MAXIMIZATION STRATEGY" }
          ],
          takeaway: "Audited 200+ sales calls to eliminate objection bottlenecks and mapped cross-sell service combinations to increase customer lifetime value."
        },
        {
          tag: "SLIDE 03 / 03 — STRATEGIC EXPANSION & INVESTOR DECK",
          title: "Pan-India Market & Assisted Living Strategy",
          kpis: [
            { value: "20+", label: "COMPETITORS BENCHMARKED" },
            { value: "TOP 5", label: "EXPANSION CITIES SHORTLISTED" },
            { value: "100%", label: "INVESTOR-READY BRIEFINGS" }
          ],
          takeaway: "Benchmarked 20+ competitors and evaluated assisted living bed-capacities to formulate expansion roadmaps and investor-ready strategic recommendations."
        }
      ]
    }
  ],

  internshipProjects: [
    {
      id: "01",
      number: "01",
      iconType: "chart",
      title: "SALES CALL ASSESSMENT, ARPU & CROSS-SELLING OPTIMIZATION",
      company: "ZORGERS HOME HEALTHCARE PVT. LTD.",
      description: "Audited 200+ sales calls and 290+ customer records to evaluate call quality, customer needs and revenue opportunities.",
      keyImpact: [
        "Identified cross-sell & upsell opportunities",
        "Improved ARPU potential by 18–22%",
        "Created targeted service bundle suggestions"
      ]
    },
    {
      id: "02",
      number: "02",
      iconType: "funnel",
      title: "LEAD CONVERSION & SALES FUNNEL ANALYSIS",
      company: "ZORGERS HOME HEALTHCARE PVT. LTD.",
      description: "Analysed 119 leads and 15 conversions across 7 months to understand funnel performance and drop-off points.",
      keyImpact: [
        "Overall conversion rate of 12.61%",
        "Identified 22 potential leads",
        "Channel & region-wise conversion insights"
      ]
    },
    {
      id: "03",
      number: "03",
      iconType: "building",
      title: "ASSISTED-LIVING MARKET & COMPETITOR INTELLIGENCE",
      company: "THE VINTAGE CLUB",
      description: "Benchmarked 20+ assisted-living facilities across India through primary research and competitive analysis.",
      keyImpact: [
        "Built competitor database covering pricing, capacity, occupancy, services and GST",
        "Mapped market maturity",
        "Identified North India as approximately 10–15 years behind South India"
      ]
    },
    {
      id: "04",
      number: "04",
      iconType: "location",
      title: "CITY EXPANSION & BED-CAPACITY ANALYTICS",
      company: "THE VINTAGE CLUB",
      description: "Developed a data-driven framework to shortlist top expansion cities and estimate ideal bed capacity for Mohali using multiple linear regression.",
      keyImpact: [
        "Shortlisted Top 5 expansion cities",
        "Regression model used to estimate ideal bed capacity",
        "Considered 10+ demographic, economic and healthcare indicators"
      ]
    },
    {
      id: "05",
      number: "05",
      iconType: "pie",
      title: "MARKET OPPORTUNITY & INVESTOR ANALYSIS",
      company: "THE VINTAGE CLUB",
      description: "Developed TAM, SAM and SOM framework and prepared investor deck with strategic insights and financial opportunity.",
      keyImpact: [
        "Quantified market opportunity for The Vintage Club",
        "Prepared investor-ready deck with data-backed recommendations",
        "Defined growth roadmap and revenue potential"
      ]
    }
  ],

  featuredProjects: [
    {
      id: "proj-1",
      title: "Revenue Concentration, Product Mix & Retention",
      category: "Enterprise Financial Analytics",
      date: "Jul 2026",
      bullets: [
        "Quantified revenue concentration across 60K+ transactions, establishing Bikes as 96.5% of ₹29.36M sales to support product portfolio prioritization",
        "Surfaced customer retention gaps across 18K+ customers, with 62.9% one-time purchasers, supporting targeted customer retention and lifecycle strategies",
        "Segmented 295 products by revenue performance, classifying 66 as High, 58 as Mid and 6 as Low Performers to support portfolio performance management",
        "Benchmarked YoY product performance using CTEs, LAG() and window functions, surfacing growth/decline patterns against historical averages for KPI and performance management"
      ],
      tools: ["SQL Server", "SQL", "CTEs", "Window Functions", "Data Modelling"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    },
    {
      id: "proj-2",
      title: "Project Delivery, Risk & Resource Analytics",
      category: "Operations & Business Intelligence",
      date: "May 2026",
      bullets: [
        "Mapped fragmented project-tracking data across 15 projects and 189 tasks; integrated project, task, milestone, cost and resource data in Power BI to establish a centralized view of project health",
        "Diagnosed effort and productivity gaps through DAX-based variance analysis, flagging 76 overrun tasks with 2,127 excess hours and 11 critical blocked tasks",
        "Assessed schedule and cost exposure using milestone progress and budget variance analysis, uncovering 19 delayed milestones, 7 on-hold projects and a 95% complete project with a 7.9% cost overrun",
        "Prioritized delivery risks by segmenting task criticality, milestone delays and cost deviations, translating findings into resource allocation and delivery-prioritization insights"
      ],
      tools: ["Power BI", "DAX", "Excel", "Data Modelling", "Variance Analysis", "KPI Analysis", "Risk Analysis"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    },
    {
      id: "proj-3",
      title: "Customer Value Intelligence & Behavioral Segmentation",
      category: "Predictive Analytics & Machine Learning",
      date: "Mar 2026",
      bullets: [
        "Analysed customer behaviour patterns across 200 mall customers; conducted EDA and statistical analysis of age, annual income and spending score to identify purchasing behaviour",
        "Investigated customer targeting opportunities through data visualisation and income-spending analysis; identified patterns across $15K–$140K in annual income and 0–100 spending scores",
        "Evaluated customer segmentation by assessing 10 cluster configurations (K = 1–10) using the Elbow Method and WCSS, selecting K = 5 for K-Means clustering",
        "Derived customer profiles from clustering results, identifying 5 income-spending segments to inform targeted marketing, promotions, product placement and customer retention"
      ],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "K-Means Clustering"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    },
    {
      id: "proj-4",
      title: "Advanced Financial Analytics & Insights",
      category: "Corporate Finance & Business Intelligence",
      date: "Feb 2026",
      bullets: [
        "Integrated 27,900+ financial transactions across 7 markets and 3 years, consolidating account, territory, budget and FX data into a centralized financial data model",
        "Calculated revenue, gross profit, EBITDA, net profit, margins and financial ratios using DAX-based KPI analysis, covering 3 years of financial performance",
        "Compared Actual vs Budget performance across 7 markets, performing variance and profitability analysis across revenue, cost and financial KPIs",
        "Developed interactive P&L, Balance Sheet, Cash Flow and SoCE reports with drill-downs and multi-currency reporting to support management decision-making"
      ],
      tools: ["Power BI", "DAX", "Excel", "Data Modelling", "Variance Analysis"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    },
    {
      id: "proj-5",
      title: "Predictive Customer Lifetime Value (CLV) Analytics",
      category: "Predictive Analytics & Machine Learning",
      date: "Oct 2025",
      bullets: [
        "Processed 541,909 retail transactions; filtered 486,286 positive-quantity UK transactions covering 3,921 customers after removing returns and cancellations",
        "Engineered purchase frequency, repeat rate, churn rate, Average Order Value and profit-based CLV; estimated customer lifetime value using a 5% profit margin assumption",
        "Transformed six months of purchase history into a 3,921 × 6 customer-month matrix; computed cumulative purchase value as the CLV modelling target",
        "Applied Multiple Linear Regression to monthly customer purchases; achieved an R² of 0.967, MAE of 595.03 and RMSE of 1,454.01 on the test set"
      ],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    },
    {
      id: "proj-6",
      title: "Brand Development & Market Launch | Attar-A-Noor",
      category: "Product Analytics & Go-To-Market Strategy",
      date: "Sept 2025",
      bullets: [
        "Transformed an unbranded attar into a marketable consumer product by developing Attar-A-Noor as a distinct brand, with a defined identity, logo, and customer-facing positioning",
        "Built the product's physical and digital touchpoints by creating custom packaging and launching an Instagram page to establish brand visibility before market entry",
        "Tested product-market acceptance through a 6-hour campus selling experiment, using university and hostel stalls to directly engage prospective customers and drive purchase decisions",
        "Generated ₹15,000+ revenue in 2 days, validating the product's commercial potential through direct-to-consumer sales and on-ground market activation"
      ],
      tools: ["Market Validation", "Direct-to-Consumer Sales", "Brand Positioning", "Revenue Tracking"],
      githubUrl: "https://github.com/koyanasahu",
      dashboardUrl: ""
    }
  ],

  certifications: [
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      issueDate: "May 2026",
      credentialId: "QYDPIBQEF6PT",
      verificationUrl: "https://coursera.org/verify/QYDPIBQEF6PT",
      pdf: "assets/certificates/Data Analysis with Python.pdf",
      skillsCovered: ["Python", "Pandas", "NumPy", "SciPy", "Model Development", "Data Pipelines"],
      description: "Demonstrated proficiency in importing datasets, data wrangling, exploratory data analysis, statistical modeling, and building predictive models."
    },
    {
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      issueDate: "Apr 2026",
      credentialId: "OSTLKXS2NWRU",
      verificationUrl: "https://coursera.org/verify/OSTLKXS2NWRU",
      pdf: "assets/certificates/Databases and SQL for Data Science with Python.pdf",
      skillsCovered: ["SQL", "Relational Databases", "Joins & Subqueries", "Python DB-API", "Stored Procedures"],
      description: "Comprehensive hands-on mastery of relational database design, complex multi-table SQL queries, aggregate functions, and database connectivity with Python."
    },
    {
      title: "Excel Basics for Data Analysis",
      issuer: "IBM",
      issueDate: "Apr 2026",
      credentialId: "RJGDJ7DU9G9C",
      verificationUrl: "https://coursera.org/verify/RJGDJ7DU9G9C",
      pdf: "assets/certificates/Excel Basics for Data Analysis.pdf",
      skillsCovered: ["MS Excel", "Pivot Tables", "VLOOKUP/XLOOKUP", "Data Cleaning", "Logical Formulas"],
      description: "Hands-on expertise in data transformation, multi-variable lookup formulas, pivot charts, conditional formatting, and analytical spreadsheet design."
    }
  ],

  activities: {
    role: "Vice President | Programs & Operation Lead",
    organization: "Mission Power Skills Club",
    duration: "Academic Year 2024 – 2025",
    metrics: [
      { value: "100+", label: "Active Event Participants" },
      { value: "1,000+", label: "Digital Impressions" },
      { value: "12+", label: "Workshops Organized" }
    ],
    highlights: [
      "Coordinated and managed events with 100+ participants, overseeing participant coordination, group formation, execution, and on-ground operations.",
      "Analysed LinkedIn performance and optimized content strategy, contributing to 1,000+ impressions through improved content planning and audience-focused posts.",
      "Maintained documentation and records for events, activities, attendance, evaluations, and club operations.",
      "Mentored and trained mentees through structured sessions and webinars focused on professional and communication skills."
    ]
  },

  achievements: [
    {
      number: "01",
      icon: "trophy",
      title: "North Indian Deadlift Championship",
      result: "1st Position",
      date: "Jan 2023",
      description: "Achieved 1st position in the North Indian Deadlift Championship."
    },
    {
      number: "02",
      icon: "scroll",
      title: "CA Foundation (ICAI)",
      result: "Cleared on 1st Attempt",
      date: "Dec 2021",
      description: "Cleared the CA Foundation examination conducted by ICAI on the 1st attempt."
    }
  ],

  contact: {
    heading: "LET'S CONNECT",
    subtitle: "Have an opportunity, project, or idea? Let's connect.",
    directInquiriesHeading: "DIRECT INQUIRIES",
    resumePdf: "assets/resume/Koyana - 12527287 - Specialized CV(1).pdf",
    cards: [
      {
        type: "email",
        label: "EMAIL",
        value: "koyanasahu12@gmail.com",
        href: "mailto:koyanasahu12@gmail.com",
        icon: "mail"
      },
      {
        type: "phone",
        label: "PHONE",
        value: "+91-7077693111",
        href: "tel:+917077693111",
        icon: "phone"
      },
      {
        type: "linkedin",
        label: "LINKEDIN",
        value: "linkedin.com/in/koyana-sahu",
        href: "https://linkedin.com/in/koyana-sahu",
        icon: "linkedin"
      },
      {
        type: "github",
        label: "GITHUB",
        value: "github.com/koyanasahu",
        href: "https://github.com/koyanasahu",
        icon: "github"
      }
    ]
  }
};
