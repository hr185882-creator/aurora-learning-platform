export const courseModules = [
  {
    id: 1,
    title: "Strategic Intelligence Analysis",
    description: "Learn how to turn signals, evidence, and pressure points into action-ready analysis",
    icon: "🎯",
    color: "blue",
    sections: [
      {
        id: "intro",
        title: "Introduction to Decision Intelligence",
        content: "Strategic intelligence analysis is the discipline of converting raw uncertainty into disciplined judgment. Unlike generic research or competitive analysis, decision intelligence focuses on what forces action and what would prove you wrong.",
        subsections: [
          {
            title: "Why Traditional Frameworks Fall Short",
            content: "Most strategic planning frameworks lack source discipline, constraint analysis, and adversarial testing. They produce confident noise rather than actionable insight."
          },
          {
            title: "The AURORA GRID Advantage",
            content: "AURORA GRID combines signal detection, source audit, constraint forecasting, red-team critique, and action routing into a single disciplined process."
          }
        ]
      },
      {
        id: "framework",
        title: "The AURORA GRID Framework",
        content: "A six-layer system designed to prevent confident noise and convert analysis into specific decision states.",
        layers: [
          {
            name: "SCOUT",
            subtitle: "Signal Intake",
            description: "Detect anomalies, pressure points, market moves, policy shifts, and early regime-change clues before consensus hardens.",
            example: "Detecting sanctions escalation signals before official announcements"
          },
          {
            name: "SOURCEGRID",
            subtitle: "Record Architecture",
            description: "Build source packets from primary records, official releases, filings, transcripts, and high-quality secondary analysis.",
            example: "Compiling DSCA notices, State Department filings, and official outcome sources"
          },
          {
            name: "K-ALIGN",
            subtitle: "Source Audit",
            description: "Classify every claim as fact, inference, forecast, or speculation. Separate documented claims from narrative inflation.",
            example: "Distinguishing 'Poland requested Javelins' (fact) from 'Poland will receive approval' (forecast)"
          },
          {
            name: "CRF",
            subtitle: "Constraint Forecast",
            description: "Ask what blocks an outcome now, when that constraint fails, and whether the case is pressure-only or mechanism-live.",
            example: "Identifying budget constraints, political resistance, and technical blockers"
          },
          {
            name: "BLACKGLASS",
            subtitle: "Red Team",
            description: "Attack the thesis, test logic, name counterarguments, and expose failure modes. Embed adversarial logic into analysis.",
            example: "Testing whether Poland forecast holds if US policy shifts or budget cuts occur"
          },
          {
            name: "COMMAND",
            subtitle: "Action Router",
            description: "Convert evidence and forecast quality into a disciplined decision state: monitor, wait, reject, investigate, hedge, trade, publish, escalate, or prepare.",
            example: "Routing Poland analysis to 'publish' (verified) vs. 'monitor' (needs outcome confirmation)"
          }
        ]
      },
      {
        id: "vs-ooda",
        title: "AURORA GRID vs. OODA Loop",
        comparison: {
          framework: "OODA Loop",
          origin: "John Boyd, 1970s",
          structure: "Observe → Orient → Decide → Act",
          strengths: [
            "Emphasizes rapid decision cycles",
            "Includes feedback loops",
            "Accounts for cognitive and moral factors",
            "Time-competitive decision making"
          ],
          weaknesses: [
            "Lacks source discipline",
            "No evidence classification",
            "Doesn't separate constraint analysis",
            "No embedded red-team critique"
          ],
          auroraAdvantage: "AURORA GRID is deeper and more evidence-based, with K-ALIGN source classification, CRF constraint analysis, and BLACKGLASS red-team critique built in. OODA is faster but less rigorous."
        }
      },
      {
        id: "vs-ci",
        title: "AURORA GRID vs. Competitive Intelligence",
        comparison: {
          framework: "Competitive Intelligence (CI)",
          focus: "Competitor-focused market analysis",
          process: "Collect → Analyze → Inform",
          strengths: [
            "Systematic competitor tracking",
            "Market condition analysis",
            "Competitive landscape mapping",
            "Strategic decision support"
          ],
          weaknesses: [
            "No forecast verification standard",
            "Doesn't separate fact from speculation",
            "Lacks constraint analysis",
            "No adversarial testing"
          ],
          auroraAdvantage: "AURORA GRID is decision-focused rather than competitor-focused. It requires timestamped forecast evidence, separates claims by evidence type (K-ALIGN), analyzes what blocks outcomes (CRF), and includes red-team attack (BLACKGLASS)."
        }
      },
      {
        id: "case-study",
        title: "Case Study: Poland Javelin Forecast",
        content: "A verified forecast demonstrating AURORA GRID discipline in action.",
        caseDetails: {
          forecast: "State Department approves Poland request for 253 launch units and 2,500+ FGM-148F missiles / rounds around $800M.",
          timestamp: "Sept. 17, 2025, 11:33 PM",
          outcome: "Sept. 18 DSCA notice listed 253 LwCLUs, 2,506 missiles, estimated value $780M",
          verification: "Timestamp screenshot received, official DSCA outcome source linked",
          layers: [
            { layer: "SCOUT", action: "Detected policy shift signals and defense procurement pressure" },
            { layer: "SOURCEGRID", action: "Built source packet from DSCA notices and State Department filings" },
            { layer: "K-ALIGN", action: "Classified claim as forecast (not fact), separated from narrative" },
            { layer: "CRF", action: "Identified budget and political constraints, mechanism-live status" },
            { layer: "BLACKGLASS", action: "Tested whether US policy shift would block approval" },
            { layer: "COMMAND", action: "Routed to 'publish' (verified) with timestamp and outcome source" }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "System Design Architecture",
    description: "Learn how to design scalable, resilient systems that solve real-world problems",
    icon: "🏗️",
    color: "emerald",
    sections: [
      {
        id: "intro",
        title: "Introduction to System Architecture",
        content: "System design architecture is the discipline of structuring software to be scalable, maintainable, and resilient. It bridges business requirements with technical implementation.",
        subsections: [
          {
            title: "Why Architecture Matters",
            content: "Poor architecture leads to technical debt, scaling failures, and maintenance nightmares. Good architecture enables rapid iteration, team scaling, and business agility."
          },
          {
            title: "Key Principles",
            content: "Decomposition, scalability, resilience, maintainability, and cost-efficiency are the core principles of enterprise system design."
          }
        ]
      },
      {
        id: "patterns",
        title: "Architecture Patterns",
        patterns: [
          {
            name: "Monolithic Architecture",
            description: "Single deployable unit with all components tightly coupled",
            pros: ["Simple deployment", "Easier debugging", "Good for small teams"],
            cons: ["Hard to scale", "Technology lock-in", "Deployment risk"],
            useCase: "Early-stage products, simple applications"
          },
          {
            name: "Microservices Architecture",
            description: "Independent, loosely coupled services deployed separately",
            pros: ["Independent scaling", "Technology flexibility", "Fault isolation"],
            cons: ["Operational complexity", "Network latency", "Data consistency challenges"],
            useCase: "Large-scale systems, multiple teams, varied technology needs"
          },
          {
            name: "Domain-Driven Design (DDD)",
            description: "Model software based on business domain reality",
            pros: ["Business alignment", "Reduced complexity", "Maintainability"],
            cons: ["Requires domain expertise", "Learning curve", "Upfront design effort"],
            useCase: "Complex business domains, long-term products"
          },
          {
            name: "Event-Driven Architecture",
            description: "Components communicate through events rather than direct calls",
            pros: ["Loose coupling", "Scalability", "Real-time responsiveness"],
            cons: ["Eventual consistency", "Debugging complexity", "Event ordering"],
            useCase: "Real-time systems, high-volume data processing"
          },
          {
            name: "Serverless Architecture",
            description: "Functions as a service, managed by cloud provider",
            pros: ["No infrastructure management", "Auto-scaling", "Pay-per-use"],
            cons: ["Cold start latency", "Vendor lock-in", "Debugging difficulty"],
            useCase: "Event-driven workloads, variable traffic, rapid prototyping"
          }
        ]
      },
      {
        id: "design-principles",
        title: "Core Design Principles",
        principles: [
          {
            name: "Scalability",
            description: "Ability to handle growing load without rewriting the system",
            techniques: ["Horizontal scaling", "Caching", "Database sharding", "Load balancing"]
          },
          {
            name: "Resilience",
            description: "System continues operating when parts fail",
            techniques: ["Redundancy", "Circuit breakers", "Retry logic", "Graceful degradation"]
          },
          {
            name: "Maintainability",
            description: "Code is easy to understand, modify, and extend",
            techniques: ["Clear abstractions", "Separation of concerns", "Documentation", "Testing"]
          },
          {
            name: "Cost Efficiency",
            description: "Optimal resource utilization and operational cost",
            techniques: ["Right-sizing", "Automation", "Monitoring", "Optimization"]
          }
        ]
      },
      {
        id: "case-study",
        title: "Case Study: GrindWire Architecture",
        content: "How AURORA GRID's decision-intelligence platform is architectured for reliability and scalability.",
        architecture: {
          frontend: {
            tech: "Static HTML/CSS/JS",
            purpose: "Fast, cacheable presentation layer",
            benefits: "No server-side rendering overhead, global CDN delivery"
          },
          backend: {
            tech: "Node.js + Express (optional)",
            purpose: "API layer for form submissions and data processing",
            benefits: "Lightweight, JavaScript-based, easy to scale"
          },
          storage: {
            tech: "GitHub Pages + Cloud Storage",
            purpose: "Forecast portfolio and evidence storage",
            benefits: "Version control, audit trail, immutable records"
          },
          messaging: {
            tech: "WhatsApp + Email",
            purpose: "Client communication and brief requests",
            benefits: "Direct, immediate, no platform dependency"
          }
        }
      }
    ]
  },
  {
    id: 3,
    title: "Monetization Models",
    description: "Learn how successful frameworks and platforms generate revenue",
    icon: "💰",
    color: "amber",
    sections: [
      {
        id: "models",
        title: "Revenue Models",
        models: [
          {
            name: "Premium Consulting",
            example: "AURORA GRID",
            pricing: "$99-$199+ per brief, $150+ for sessions",
            pros: ["High margins", "Direct client relationships", "Credibility building"],
            cons: ["Not scalable", "Time-intensive", "Limited market size"],
            description: "High-touch service delivery with premium positioning"
          },
          {
            name: "SaaS Subscription",
            example: "Anaplan, Farseer",
            pricing: "$100-$10,000+ per month",
            pros: ["Recurring revenue", "Scalable", "Predictable"],
            cons: ["High CAC", "Churn risk", "Support overhead"],
            description: "Software-as-a-service with tiered pricing"
          },
          {
            name: "Enterprise Licensing",
            example: "Palantir",
            pricing: "$1M-$100M+ contracts",
            pros: ["High deal value", "Long-term contracts", "Strategic partnerships"],
            cons: ["Long sales cycles", "High support costs", "Complex implementations"],
            description: "Large-scale enterprise software licensing"
          },
          {
            name: "Freemium + Premium",
            example: "Gurobi",
            pricing: "Free tier + $50-$5,000+ per month",
            pros: ["Large user base", "Low friction", "Upsell funnel"],
            cons: ["Support costs", "Conversion challenges", "Feature parity"],
            description: "Free basic tier with premium features"
          }
        ]
      },
      {
        id: "comparison",
        title: "Model Comparison",
        content: "How different monetization models compare across key dimensions"
      },
      {
        id: "strategy",
        title: "Choosing Your Model",
        content: "Framework for selecting the right monetization strategy for your business"
      }
    ]
  },
  {
    id: 4,
    title: "Building Your Own Framework",
    description: "Practical guide to creating decision-intelligence systems and architectures",
    icon: "🛠️",
    color: "purple",
    sections: [
      {
        id: "framework-design",
        title: "Framework Design Process",
        steps: [
          {
            step: 1,
            title: "Identify the Problem",
            description: "What decision or system challenge are you solving?"
          },
          {
            step: 2,
            title: "Research Existing Solutions",
            description: "What frameworks, tools, and approaches already exist?"
          },
          {
            step: 3,
            title: "Design Your Layers",
            description: "What layers or components does your framework need?"
          },
          {
            step: 4,
            title: "Build Verification Standards",
            description: "How will you ensure rigor and prevent confident noise?"
          },
          {
            step: 5,
            title: "Test with Real Cases",
            description: "Validate your framework with actual problems"
          },
          {
            step: 6,
            title: "Document and Teach",
            description: "Create guides, case studies, and training materials"
          }
        ]
      },
      {
        id: "tools-templates",
        title: "Tools and Templates",
        content: "Ready-to-use templates for building your own frameworks"
      }
    ]
  }
];

export const comparisons = [
  {
    category: "Decision-Making Frameworks",
    frameworks: [
      {
        name: "AURORA GRID",
        layers: 6,
        sourceDiscipline: "Timestamped + official sources required",
        constraintAnalysis: "CRF layer dedicated",
        redTeam: "BLACKGLASS layer embedded",
        actionRouting: "COMMAND layer converts to decision states",
        verification: "Hall of Record with proof",
        monetization: "Premium consulting ($99-$199+)"
      },
      {
        name: "OODA Loop",
        layers: 4,
        sourceDiscipline: "Not specified",
        constraintAnalysis: "Not included",
        redTeam: "Not included",
        actionRouting: "Implicit in 'Act'",
        verification: "No verification standard",
        monetization: "Training/consulting"
      },
      {
        name: "Competitive Intelligence",
        layers: 3,
        sourceDiscipline: "Varies",
        constraintAnalysis: "Not included",
        redTeam: "Not included",
        actionRouting: "Implicit in strategy",
        verification: "No verification standard",
        monetization: "Consulting/tools"
      }
    ]
  },
  {
    category: "System Architecture Patterns",
    patterns: [
      {
        name: "Monolithic",
        scalability: "Limited",
        complexity: "Low",
        deployment: "Simple",
        teamSize: "Small",
        cost: "Low"
      },
      {
        name: "Microservices",
        scalability: "High",
        complexity: "High",
        deployment: "Complex",
        teamSize: "Large",
        cost: "High"
      },
      {
        name: "Serverless",
        scalability: "High",
        complexity: "Medium",
        deployment: "Simple",
        teamSize: "Small",
        cost: "Variable"
      }
    ]
  }
];
