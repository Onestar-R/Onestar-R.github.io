// ========================================
// Publications Data
// ========================================

const publicationsData = {
    // Dissertation & Thesis
    thesis: {
        title: "Optimization Model for Destination Allocation in Parcel Delivery",
        subtitle: "Master's Thesis",
        institution: "Inha University",
        date: "February 2023",
        description: "This thesis develops an optimization model for destination allocation in parcel delivery networks that balances route-income fairness among delivery workers with overall operational efficiency. The research introduces novel mathematical programming approaches to address the fairness-efficiency trade-off in last-mile logistics.",
        tags: ["Supply Chain", "Optimization", "Fairness", "Logistics"],
        links: {
            pdf: "#",
            cite: "#"
        }
    },

    // Journal Papers
    journalPapers: [
        {
            id: "paper0",
            year: "2025",
            yearColor: "green",
            title: "Enhancing the Korean Greenhouse Gas Emission Estimation Model through the Development of Road Gradient Correction Factor",
            authors: [
                { name: "Jinjae KIM", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Daejin KIM", isFirstAuthor: false },
                { name: "Soongbong LEE", isFirstAuthor: false },
                { name: "Seunghoon CHEON", isFirstAuthor: false },
                { name: "Gwanyong OH", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false }
            ],
            journal: "Journal of Korean Society of Intelligent Transport Systems, 24(3), 1-19",
            tags: ["KCI"],
            abstract: "While ongoing efforts and studies have been made to reduce greenhouse gas (GHG) emissions, less attention has been placed on calibrating discrepancies between calculated emissions and real-world emissions. However, since over 90% of emissions in the transportation system originate from roads, applying a precise model to calculate emissions and assess reduction policies is essential. As advanced form of calculating emissions, this study introduces correction factor application method designed to be adaptable to Korea's official emission model, referred to as the GIR Basic Model. In the process of adaptation, correction factors were initially developed for 16 vehicle/fuel types in Korea, aligned with the U.S. vehicle/fuel classification system. Later, based on available data, these 16 categories were aggregated into three main vehicle categories: Passenger Car, Bus, and Truck. Moreover, since high variability in the length of road segments within the dataset could lead to inconsistencies with gradient values, potentially affecting the accuracy of the results, we also considered methods to minimize the length dependency in gradient calculation. Regarding the results from both link-based and grid-based gradients, we chose to use both datasets and conducted comparison scenarios. Scenarios reveal that GHG emission increased with road gradients, with grid-based gradients showing more significant emission differences compared to link-based gradients. Quantitatively, applying road gradients resulted in a 12-15% change in MAPE bewteen models, and considering gradients led to a reduction in overall emissions. Due to the frequent variations in terrain, including uphills and downhills, across Korea, it is essential to consider road gradients not only for accurate emission assessments at the local government level but also for informing policies aimed at mitigating emissions through gradient modifications.",
            keywords: "Road Gradient Correction Factor , Emission Coefficient , Micropic Emission Analysis , Greenhouse Gas , MOVES-Matrix",
            firstAuthor: false
        },
        {
            id: "paper1",
            year: "2024",
            yearColor: "blue",
            title: "Development of a Regional Electric Vehicle Adoption Growth Prediction Model for Evaluating and Planning Future Electric Vehicle Charging Infrastructure Deployment Levels",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Gwanyong OH", isFirstAuthor: false },
                { name: "Jaeyeob SHIM", isFirstAuthor: false },
                { name: "Jihyun PARK", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Daejin KIM", isFirstAuthor: false }
            ],
            journal: "Journal of Transport Research, 31(3), 91-103",
            tags: ["KCI"],
            abstract: "As the demand for passenger and freight transportation increases, the transportation sector is accelerating its transition to eco-friendly vehicles as part of efforts to achieve carbon neutrality. To efficiently transition to eco-friendly vehicles, it is necessary to establish infrastructure development strategies that appropriately respond to charging demands based on the distribution trends and growth rates. This study predicts the distribution trends of electric passenger cars and electric freight vehicles in different regions using the Gompertz growth model. The prediction results identified that the acceleration periods of electric vehicle growth vary by region. It was also found that the growth and saturation periods differ between electric passenger cars and electric freight vehicles. These results can be utilized in selecting regional infrastructure charging priorities for the convenience of eco-friendly vehicle users and are expected to contribute to policy formulation, such as securing funding for subsidies and responding to the rapidly increasing charging demands of freight vehicles.",
            keywords: "Electric Vehicle, Eco-Friendly car, Freight Truck, Deployment of Electric Vehicle, Gompertz growth Model, Charging infrastructure",
            firstAuthor: true
        },
        {
            id: "paper2",
            year: "2024",
            yearColor: "blue",
            title: "Development of Acceleration Correction Factors for Microscopic Analysis of Automobile Greenhouse Gas Emissions",
            authors: [
                { name: "Daejin KIM", isFirstAuthor: false },
                { name: "Soongbong LEE", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Gwanyong OH", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Jinjae KIM", isFirstAuthor: false },
                { name: "Seunghoon CHEON", isFirstAuthor: false }
            ],
            journal: "Journal of Korean Society of Transportation, 42(3), 268-283",
            tags: ["KCI"],
            abstract: "This study aims to develop acceleration correction factors for enhancing the precision of micro-level automobile greenhouse gas (GHG) emissions estimation. By employing MOVESMatrix, a sophisticated automobile emissions calculation model, this study scrutinizes the sensitivity of GHG emissions to microscopic driving behaviors across various vehicle types. The study findings reveal a general decline in GHG emissions with increasing driving speeds, juxtaposed with an escalation as acceleration rates rise within the same speed range. In light of the results from the sensitivity analysis, the acceleration correction factors are devised for each of the 16 vehicle types, with additional refinements tailored for the generalized vehicle categories (i.e., passenger cars, buses, and freight trucks). Moreover, this study proposes a microscopic GHG emission calculation algorithm, integrating the acceleration correction factors. Scenario analyses demonstrate a discernible 6-15% disparity in GHG emissions upon the application of the acceleration correction factors compared to the scenarios where it is omitted, underscoring the substantive influence of microscopic vehicle driving behaviors, such as instant vehicle speed and acceleration rates, on GHG emissions. Consequently, this study is anticipated to afford a more precise estimation of GHG emissions, considering the microscopic driving behaviors of individual vehicles on roads. This study is anticipated to contribute to the enhancement of precision in estimating GHG emissions from transportation sector and the development of effective transportation policies and operational strategies aimed at mitigating GHG emissions.",
            keywords: "acceleration/deceleration correction factor, emission factor, greenhouse gas, microscopic analysis, MOVES-Matrix",
            firstAuthor: false
        },
        {
            id: "paper3",
            year: "2024",
            yearColor: "blue",
            title: "Analysis of Satisfaction/Dissatisfaction Factors for Digital Shared Logistics Services for Small Business Owners",
            authors: [
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minkoo KWON", isFirstAuthor: false },
                { name: "Hayan CHIO", isFirstAuthor: false }
            ],
            journal: "Journal of Transport Research, 31(2), 65-75",
            tags: ["KCI"],
            abstract: "This study aimed to evaluate the effectiveness of the digital shared logistics service implemented by Incheon City as a policy measure to address the issue of decreased logistics competitiveness among small businesses lacking digital and transportation capabilities, in the context of increased competitive pressures due to the rapid growth of the online distribution market and the entry of large corporations into the distribution sector. This service was developed with the aim of enhancing the logistics competitiveness of small businesses, and this study sought to analyze its actual impact and explore directions for improvement, thereby providing insights for the planning and execution of similar distribution and logistics support policies in the future. The research method involved conducting a survey among 231 small business enterprises, with an in-depth analysis of 13 items related to satisfaction. The analysis results revealed that small businesses showed the highest satisfaction with \"no limit on the minimum shipment volume,\" followed by satisfaction with the \"application and registration process.\" Conversely, dissatisfaction was relatively high with items such as \"differentiation of same-day and next-day collection times,\" \"variety of specifications,\" and \"customer service and response capability.\" Based on these satisfaction and dissatisfaction factors derived from the analysis, this study proposed improvement measures for future logistics services targeting small businesses.",
            keywords: "Small business owners, Support for small business owners, Shared logistics, Logistics competitiveness, Satisfaction survey",
            firstAuthor: false
        },
        {
            id: "paper4",
            year: "2024",
            yearColor: "blue",
            title: "Analysis of Hydrogen Supply Chain Trends through Semantic Network Analysis",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Sungho RYU", isFirstAuthor: false },
                { name: "Kiwon IM", isFirstAuthor: false }
            ],
            journal: "Journal of Transport Research, 31(1), 37-50",
            tags: ["KCI"],
            abstract: "The ascent of hydrogen energy is pivotal for carbon neutrality, with a noticeable rise in the adoption and public interest towards hydrogen vehicles. This study aims to gauge public sentiment on hydrogen energy by harvesting and scrutinizing hydrogen-related news data via text mining methodologies. Our analysis delineates the trends in both public and private sectors' engagement with hydrogen and associated policies, as well as discerns perceptions regarding the hydrogen supply chain, encompassing hydrogen vehicles and refueling stations. Previously perceived predominantly as a hazard, hydrogen has transitioned in its public image to a valuable energy resource, largely due to advancements in the hydrogen economy and relevant policies. The lexicon reflecting this transformation featured terms like \"safety standards\" and \"deregulation,\" countering prior concerns of safety and stringent regulations. This evolving recognition augments the potential for broader hydrogen energy adoption and facilitates the formulation of supportive policies and deregulation.",
            keywords: "Hydrogen, Hydrogen supply chain, Hydrogen policy, Carbon neutrality, Text mining, Semantic network analysis",
            firstAuthor: true
        },
        {
            id: "paper8",
            year: "2023",
            yearColor: "purple",
            title: "The Determinants of Cargo Fares Utilizing Big Data from a Digital Freight Carrier Platform",
            authors: [
                { name: "Hyein LEE", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Sanggeun CHO", isFirstAuthor: false }
            ],
            journal: "Journal of Transport Research, 30(4), 37-51",
            tags: ["KCI"],
            abstract: "The cargo transportation market is experiencing an increased emphasis on the collection and analysis of related data amidst changing environmental conditions. Stakeholders in the cargo transportation market traditionally rely on public data or limited private freight data to estimate cargo fare trends. However, due to the challenges in data collection and access, research related to cargo fares is not sufficiently developed. Using large-scale proprietary data from private cargo transactions, we conduct an in-depth analysis of the factors determining cargo fares in this market. The factors under consideration include cargo information, weight, loading and unloading locations, and types and tonnage of vehicles. Additionally, we statistically analyze the relationship between cargo fares and the regions where transportation demand originates.",
            keywords: "Cargo Fares, Digital Freight Carrier Platform, Freight Transportation, Determinants of Cargo Rates, Transportation transaction, Big Data",
            firstAuthor: false
        },
        {
            id: "paper5",
            year: "2023",
            yearColor: "purple",
            title: "A Marginal Effects Approach of Railway-based Urban Logistics Services",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            journal: "Korean Journal of Logistics, 31(4), 37-50",
            tags: ["KCI"],
            abstract: "From a logistics point of view, the current state of urban railway systems presents an opportunity to improve the quality of parcel delivery services and simultaneously drive increased usage of urban railways. Demand analysis, such as willingness to switch based on cost, needs to be conducted in advance in order to develop these urban logistics systems. Using demand analysis, we predict the rate of modal shift and demand, which are factors that drive operational objectives and system specifications. In this study, we conduct a stated preference(SP) survey of logistics companies and estimate their preferences using a conditional logistic regression model. We also analyze the marginal effects and potential customers' willingness to pay for railway-based urban logistics services. The research results reveal the resistance factors within this system, and demonstrate that factors such as cold-chain system and reliability are most crucial. Main finding is that the rent of distribution centers has a greater impact than delivery fare. Based on the analysis of individual factors, the examination of relative importance and marginal effect can provide insights into pricing strategies for a future service and the establishment of service objectives.",
            keywords: "Demand Shift, Demand Analysis, Urban Railway, Distribution Center, Stated Preference",
            firstAuthor: true
        },
        {
            id: "paper9",
            year: "2023",
            yearColor: "purple",
            title: "A Study on the Estimation and Prediction of Daily Delivery Service Volume in the Metropolitan Area: Focuses on the Case of Gyeonggi-Do",
            authors: [
                { name: "Byeongkwan KIM", isFirstAuthor: false },
                { name: "Jisun PARK", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            journal: "Korean Journal of Logistics, 31(2), 47-58",
            tags: ["KCI"],
            abstract: "Parcel delivery accounts for the largest share of urban living logistics and has become an integral part of people's daily lives. Over the last decade, the volume of parcel delivery has increased rapidly at an annual average of over 11% and the number of delivery parcels consumed per capita have risen by almost 18% annually over the same period. The explosive growth of e-commerce and the COVID-19-driven preference for non-face-to-face consumption have impacted the parcel delivery industry significantly, and the demand for urban logistics is expected to continue to rise in the future. Traditionally, the problem of estimating parcel delivery volume for large populated areas has been seen as difficult because there are multiple companies that serve the areas and are unwilling to share parcel volume data. In this study, we use statistical techniques on data obtained from single delivery company to estimate total parcel delivery volume and predict future parcel volumes for the metropolitan area of Gyeonggi-do. The results of this study are expected to be used as fundamental guidelines for developing facilities and formulating policies for urban logistic companies in metropolitan areas.",
            keywords: "Urban Logistics Courier Volume, Parcel Delivery, Estimation, Prediction, Metropolitan Area",
            firstAuthor: false
        },
        {
            id: "paper10",
            year: "2023",
            yearColor: "purple",
            title: "Risks in Parts Supply Chain and Their Impact on Supply Chains and Shipping Sector: Focusing on Automobile Industry",
            authors: [
                { name: "Byeongil CHOI", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Sunkyu KIM", isFirstAuthor: false }
            ],
            journal: "Journal of the Korean Production and Operations Management Society, 34(1), 111-128",
            tags: ["KCI"],
            abstract: "Of late, various risk factors, such as the closure of container ports due to the COVID-19 pandemic, decline in container fleets, and instability in final demand, have had a detrimental impact on the business environment. Such negative effects could prevent companies from achieving their goals. Therefore, it is necessary to identify the risk and implement appropriate risk management strategies based on the impact factors of the risk. This study analyzed the impact of supply chain risks on the domestic automobile production network and maritime car carrier market. We quantified supply chain risks that arise in domestic automobile production processes and employed the vector auto regression models to analyze the effects of these risks on the automobile supply chain and pure car carrier market. In addition, using impact reaction function, we analyzed the process through which the risk in the supply chain extends to automobile production and pure car carrier market. It is expected that this study will help set long-term and short-term targets for production plans and demarcate corporate strategies through effective response to market conditions.",
            keywords: "supply chain risk, risk management, vector autoregressive model, automotive supply chain, establishment of supply chain planning",
            firstAuthor: false
        },
        {
            id: "paper6",
            year: "2022",
            yearColor: "yellow",
            title: "Factors Affecting Preferences of the Urban Railway-based Logistics Services",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Minyoung PARK", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            journal: "Korean Journal of Logistics, 30(5), 55-63",
            tags: ["KCI"],
            abstract: "Increased freight vehicles due to the rapid increase in the number of parcel deliveries cause traffic congestion, environmental pollution, and safety problems. Distribution centers in the city help freight vehicles reduce traffic and help meet today's logistics goals of fast delivery. In this context, the Micro Fulfillment Center(MFC) in the city with subway and underground idle space is one of the alternatives. In this study, in order to analyze the demand for distribution centers using idle space in subways in Seoul and distribution transportation services using subways, we conducted a preference survey of major distribution and logistics companies. We applied a stated preference analysis methodology and conditional logit model for statistical analysis of how willing companies are to switch from existing trucking to our services.\n<br>In this model, we explained the conversion demand, change, and marginal cost according to the cost of service, service time, and scheduled transportation ratio. A questionnaire survey was conducted targeting logistics personnel of major domestic distribution and logistics companies, and as a result of statistical analysis of preferences, significant preferences for new logistics services were confirmed. It is expected that this research will be able to calculate the demand that will be converted when a new distribution center is set up or new services are introduced and to enter the market.",
            keywords: "Parcel Delivery, Logistics Center, Micro Fulfillment Center, Sated Preference, Conditional Logit Model",
            firstAuthor: true
        },
        {
            id: "paper7",
            year: "2021",
            yearColor: "orange",
            title: "A Study on Dispatching Area Minimizing Last Mile Delivery Time",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            journal: "Journal of Logistics Science & Technology (JLST), 2(2), 52-61",
            tags: [],
            abstract: "The purpose of this study is to establish an appropriate delivery area for the increasing last-mile delivery. At the same time, as the parcel delivery industry is growing explosively, regional delivery centers such as micro-fulfillment centers are moving toward demanding destinations. Also, the density of the center in an urban area is increasing. As the number of centers in the city center rises, it is necessary to set the delivery area rationally. In a situation where multiple centers are located in an urban area, we present a methodology for setting a delivery area using an actual road network and a single-to-many destination shortest path algorithm. The developed model is assumed to utilize the idle land of the transfer station in Seoul. As a result of the analysis, the developed model showed that the delivery area could be set rationally and efficiently compared to the existing circular buffer type delivery area setup.",
            keywords: "Last-Mile, Micro Fulfillment Center, Delivery Area, Travel Time",
            firstAuthor: true
        }
    ],

    // International Conference Presentations
    internationalConferences: [
        {
            id: "intl-conf1",
            date: "Oct. 2024",
            dateColor: "blue",
            title: "An experimental study of large language model for human interactive robots in a warehouse management",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "INFORMS 2024 Annual Meeting",
            location: "Seattle, WA, US"
        },
        {
            id: "intl-conf2",
            date: "Oct. 2024",
            dateColor: "blue",
            title: "Exploring Digital Logistics Living Lab: Implementing Vehicle-to-Vehicle Transshipment for Small Business Expedited Delivery",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "INFORMS 2024 Annual Meeting",
            location: "Seattle, WA, US"
        },
        {
            id: "intl-conf3",
            date: "Jun. 2024",
            dateColor: "blue",
            title: "Envy-based Parcel Delivery Workload Balancing Problem Considering Drivers Stated Preferences",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Riju Lavanya", isFirstAuthor: false },
                { name: "Ting Jiang", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "35th IEEE Intelligent Vehicles Symposium (IEEE IV)",
            location: "Jeju Island, South Korea"
        },
        {
            id: "intl-conf4",
            date: "Jun. 2024",
            dateColor: "blue",
            title: "A Lagrangian Relaxation Algorithm for the Drone Routing Problem with Backhauls and Wind",
            authors: [
                { name: "Ting Jiang", isFirstAuthor: false },
                { name: "Riju Lavanya", isFirstAuthor: false },
                { name: "Yihuai Liang", isFirstAuthor: false },
                { name: "HanByul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "35th IEEE Intelligent Vehicles Symposium (IEEE IV)",
            location: "Jeju Island, South Korea"
        },
        {
            id: "intl-conf5",
            date: "Jan. 2024",
            dateColor: "blue",
            title: "An Envy-based Parcel Delivery Workload Balancing Problem with Heterogeneous Drivers' Preferences",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Riju Lavanya", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Transportation Research Board (TRB) 103rd Annual Meeting",
            location: "Washington, D.C, US"
        },
        {
            id: "intl-conf6",
            date: "Oct. 2022",
            dateColor: "yellow",
            title: "An Agent-based Model for Fair and Efficient Delivery Area Allocations",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "INFORMS 2022 Annual Meeting",
            location: "Indianapolis, US"
        },
        {
            id: "intl-conf7",
            date: "Oct. 2021",
            dateColor: "orange",
            title: "Last Mile Delivery Area : Based on Travel Time",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "INFORMS 2021 Annual Meeting (Poster)",
            location: "Virtual"
        }
    ],

    // Conference Papers
    conferencePapers: [
        {
            id: "conf1",
            year: "2024",
            title: "Improvement Directions of Future Logistics Robot Business Through Best Practice Analysis",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Spring Conference, The Korea Logistics Research Association",
            tags: ["Domestic"],
            abstract: "This study aims to analyze cases of logistics robot businesses and draw improvement directions. As urbanization and e-commerce expand, logistics demand is increasing, and robots are being spotlighted as a solution to inefficiency and labor shortages in logistics centers and delivery. Representative companies such as Amazon Robotics, Starship Technologies, Nuro, and Woowa Brothers are successfully operating logistics robots and are expanding their business areas. Based on this best practice analysis, this study derived improvement directions including the establishment of an integrated robot management platform, consideration of cargo characteristics, strengthening of safety standards, and construction of specialized infrastructure. Through this, it proposes a direction for sustainable development of the logistics robot industry.",
            keywords: "Autonomous delivery robots, Logistics robots, Last-mile delivery, Autonomous mobile robots, best practice",
            firstAuthor: true
        },
        {
            id: "conf2",
            year: "2024",
            title: "Development and Validation of a Simulation Model for Analyzing Delivery Delays and Parcel Accumulation in Parcel Hubs",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study develops a simulation model to analyze delivery delays and parcel accumulation at parcel delivery hubs, using queuing theory to account for demand fluctuations. Real operational data from a major delivery company was applied to create a realistic model that reflects various hub conditions. Key findings show that parcel accumulation peaks occur on Mondays and Fridays, with evening shifts facing the highest workload. Low processing rates cause bottlenecks, requiring strategic resource allocation. Sensitivity analysis indicates that minor reductions in service time significantly improve processing capacity. The model, validated through convergence tests and sensitivity analyses, offers decision-making support for delivery hub operations and can be adapted for various logistics facility scenarios.",
            keywords: "Parcel hub, Queuing theory, Simulation, Delivery delay, Parcel processing capacity",
            firstAuthor: true
        },
        {
            id: "conf3",
            year: "2024",
            title: "Comparative Analysis of Confidence Interval Estimation Models for Parcel Delivery Demand: Addressing Uncertainties in Demand",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Summer Conference, The Korea Logistics Research Association",
            tags: ["Domestic"],
            abstract: "This study compares and analyzes confidence interval estimation models for parcel delivery demand to evaluate the optimal forecasting method. Accurate demand forecasting is crucial for efficient resource allocation in parcel hubs, as demand varies significantly over time. Traditional methods like mean and median fail to consider variations, while confidence interval-based models provide more comprehensive predictions. Using real delivery hub data, we compared four models: normal, t-distribution, Bootstrap, and quantile-based methods. Results show that quantile-based methods performed best for data with significant variability and outliers, while normal distribution models excelled under stable conditions. T-distribution and Bootstrap methods offered intermediate performance with moderate sensitivity. This study provides practical guidance for selecting appropriate forecasting models based on different operational characteristics.",
            keywords: "Parcel delivery demand forecasting, Confidence interval estimation, Bootstrap method, Quantile method, Hub operation optimization",
            firstAuthor: true
        },
        {
            id: "conf4",
            year: "2024",
            title: "Measures to Reduce Logistics Costs and Strengthen Competitiveness of Small and Medium-sized Shippers",
            authors: [
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study develops a simulation model to analyze the effects of logistics cost reduction measures for small and medium-sized shippers and explores ways to enhance their competitiveness. As SMEs' share of GDP is significant yet their logistics costs remain high compared to larger firms, this research proposes intervention strategies through hub systems and bulk transportation. Three scenarios were analyzed: baseline (AS-IS), hub consolidation (TO-BE 1), and bulk transportation (TO-BE 2). Results show substantial cost savings through both strategies, with hub systems providing additional benefits like inventory reduction and delivery speed improvements. The study emphasizes the need for collaborative approaches and infrastructure investment to support SME logistics efficiency. Policy recommendations include establishing shared logistics centers and promoting cooperative delivery systems.",
            keywords: "SME logistics, Logistics cost reduction, Hub system, Bulk transportation, Small and medium shippers",
            firstAuthor: false
        },
        {
            id: "conf5",
            year: "2024",
            title: "Analysis of Future Hydrogen Fuel Cell Electric Truck Demand in Gyeonggi-do Freight Sector",
            authors: [
                { name: "Gwanyong OH", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Daejin KIM", isFirstAuthor: false }
            ],
            conference: "Spring Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study analyzes future demand for hydrogen fuel cell electric trucks in Gyeonggi-do's freight sector to support infrastructure planning. As part of carbon neutrality goals, eco-friendly commercial vehicles including hydrogen trucks are gaining attention. Using registration data and the Gompertz growth model, we forecasted hydrogen truck adoption across different tonnage classes through 2040. Results indicate that 5-ton trucks will see the fastest adoption, followed by smaller trucks, with larger trucks showing slower growth. Peak growth is expected around 2028-2030, requiring proactive hydrogen refueling infrastructure development. The findings provide data-driven insights for policymakers to establish targeted support measures and infrastructure investment strategies for each vehicle class.",
            keywords: "Hydrogen fuel cell truck, Freight vehicle, Gompertz model, Demand forecasting, Carbon neutrality",
            firstAuthor: false
        },
        {
            id: "conf6",
            year: "2024",
            title: "Case Study on the Application and Limitations of Estimating Greenhouse Gas Emission Coefficients for Logistics Facilities",
            authors: [
                { name: "Gwanyong OH", isFirstAuthor: false },
                { name: "Hanbyul RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Daejin KIM", isFirstAuthor: false }
            ],
            conference: "Spring Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study examines the applicability and limitations of greenhouse gas emission coefficient estimation methods for logistics facilities, particularly delivery terminals. While transportation sector emissions are well-studied, emissions from logistics facilities remain underexplored despite their significance. Using a case study approach with a major delivery terminal, we estimated Scope 1 and Scope 2 emissions from energy consumption (electricity, gas, diesel). Results reveal substantial emissions from both direct and indirect sources, with electricity consumption being a major contributor. However, limitations include lack of facility-specific data, exclusion of Scope 3 emissions, and insufficient standardized methodologies. The study emphasizes the need for comprehensive emission accounting frameworks that consider facility characteristics and operational patterns for effective carbon reduction strategies in logistics.",
            keywords: "Logistics facilities, Greenhouse gas emissions, Delivery terminal, Emission coefficients, Scope 1 and 2",
            firstAuthor: false
        },
        {
            id: "conf7",
            year: "2023",
            title: "Analysis of Time Series Characteristics of Urban Logistics Demand According to Spatial Unit Changes: Focus on Seoul's Origin-Destination Freight Volume",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Yongjae KIM", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation Policy and Economics",
            tags: ["Domestic"],
            abstract: "This study analyzes temporal patterns of urban logistics demand in Seoul across different spatial aggregation levels to provide data-driven insights for logistics planning. Using freight OD data from 2019-2023, we examined demand patterns at city-wide, district (Gu), and sub-district (Dong) levels through time series analysis including trend decomposition and autocorrelation. Results show consistent growth trends across all spatial scales with strong weekly and daily seasonality. However, micro-level data (Dong) exhibits higher variability and noise, requiring more sophisticated forecasting methods. District-level analysis provides optimal balance between detail and stability for practical planning. The findings highlight the importance of selecting appropriate spatial units based on planning objectives and the need for multi-scale approaches in urban logistics management.",
            keywords: "Urban freight demand, Spatial unit analysis, Time series analysis, OD data, Logistics planning",
            firstAuthor: true
        },
        {
            id: "conf8",
            year: "2023",
            title: "Development of a Fair Delivery Zone Allocation Model Considering Workload Balance Among Parcel Delivery Workers",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study develops an optimization model for fair delivery zone allocation that balances workload among parcel delivery workers while maintaining operational efficiency. The model uses mathematical programming to minimize workload variance across zones while considering constraints such as zone connectivity and capacity limits. Applied to a real-world case study in Seoul, the model successfully reduced workload imbalances by 23% compared to existing allocations. Sensitivity analysis demonstrates the model's robustness under varying demand conditions. The framework can be adapted for different organizational contexts and provides practical decision support for delivery companies seeking to improve worker satisfaction and retention while maintaining service quality.",
            keywords: "Delivery zone allocation, Fairness optimization, Workload balance, Mathematical programming, Last-mile delivery",
            firstAuthor: true
        },
        {
            id: "conf9",
            year: "2023",
            title: "Investigation of Factors Influencing Hydrogen Fuel Cell Vehicle Adoption Using Semantic Network Analysis",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Sungho RYU", isFirstAuthor: false },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Hyunjun YOO", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study investigates factors influencing hydrogen fuel cell vehicle (HFCV) adoption through semantic network analysis of news articles and social media content. As HFCVs gain attention as a clean energy solution, understanding public perception and key adoption factors is crucial for policy development. Using text mining on 5 years of data, we identified key themes including infrastructure development, cost concerns, safety perceptions, and environmental benefits. Network analysis revealed strong connections between infrastructure availability and adoption intention, while safety concerns showed decreasing centrality over time. Policy implications include prioritizing refueling station expansion, addressing cost barriers through subsidies, and continuing public education on safety. The methodology provides a scalable approach for monitoring and responding to evolving public sentiment.",
            keywords: "Hydrogen fuel cell vehicle, Technology adoption, Semantic network analysis, Text mining, Public perception",
            firstAuthor: true
        },
        {
            id: "conf10",
            year: "2023",
            title: "Analysis of Determinants of Rail-based Urban Logistics Service Usage Using Ordered Probit Model",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            conference: "Spring Conference, The Korea Logistics Research Association",
            tags: ["Domestic"],
            abstract: "This study analyzes factors determining willingness to use rail-based urban logistics services using an ordered probit model with survey data from 500 Seoul residents. As last-mile delivery causes increasing urban congestion and emissions, rail-based logistics emerges as a sustainable alternative. Results identify key positive factors including environmental consciousness, delivery frequency, parking constraints, and pet ownership. Younger demographics and apartment residents showed higher usage intention. Marginal effects analysis reveals that environmental awareness has the strongest impact on usage willingness. The findings inform targeted marketing strategies and suggest infrastructure priorities for rail-based logistics implementation. Policy recommendations include incentive programs for environmentally conscious users and integration with existing public transit systems.",
            keywords: "Rail-based logistics, Urban freight, Ordered probit model, Sustainable logistics, Last-mile delivery",
            firstAuthor: true
        },
        {
            id: "conf11",
            year: "2023",
            title: "Study on Improvement of Railway-based Urban Logistics Services Through AHP Analysis",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            conference: "Spring Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study employs Analytic Hierarchy Process (AHP) to identify priority improvement areas for railway-based urban logistics services from stakeholder perspectives. Expert surveys from logistics professionals, policymakers, and academics evaluated criteria including operational efficiency, environmental impact, cost-effectiveness, and user convenience. Results show that infrastructure development and service reliability rank highest in importance, followed by cost considerations and environmental benefits. Sub-criteria analysis highlights the critical need for integrated transfer facilities and real-time tracking systems. The multi-stakeholder approach reveals diverging priorities: operators emphasize efficiency while policymakers prioritize environmental outcomes. Recommendations include phased implementation focusing on high-priority infrastructure investments and developing standardized service protocols for rail-based urban logistics.",
            keywords: "Railway logistics, AHP analysis, Stakeholder analysis, Service improvement, Urban freight",
            firstAuthor: true
        },
        {
            id: "conf12",
            year: "2022",
            title: "Factors Affecting the Intention to Use Railway-based Urban Logistics Services",
            authors: [
                { name: "Hanbyul RYU", isFirstAuthor: true },
                { name: "Daisik NAM", isFirstAuthor: false },
                { name: "Minyoung PARK", isFirstAuthor: false }
            ],
            conference: "Fall Conference, Korean Society of Transportation",
            tags: ["Domestic"],
            abstract: "This study examines factors affecting consumer intention to use railway-based urban logistics services, addressing growing concerns about delivery vehicle emissions and urban congestion. Using a structured survey of urban residents, we analyzed demographic, behavioral, and attitudinal factors influencing adoption intention. Key findings indicate that environmental awareness, delivery frequency, residential parking availability, and age are significant predictors. Younger consumers and those without parking show stronger adoption intention. Pet owners also demonstrate higher interest, likely due to convenience in receiving pet supplies. The research provides insights for service design and marketing strategies, suggesting targeted campaigns toward environmentally conscious and high-frequency delivery users. Infrastructure development should prioritize areas with limited parking and high population density.",
            keywords: "Urban logistics, Railway-based delivery, Consumer behavior, Adoption intention, Sustainable transportation",
            firstAuthor: true
        }
    ]
};
