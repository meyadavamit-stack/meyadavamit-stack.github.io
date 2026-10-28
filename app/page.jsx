'use client';

import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  MapPin, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  Building2, 
  Calendar,
  Languages,
  CheckCircle2,
  ChevronDown,
  Layers
} from 'lucide-react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  const strategicInitiatives = [
    {
      title: 'Direct Courier Migration & Cost Optimization',
      company: 'White Brands (WhiteBrands Group)',
      tag: 'logistics',
      tagLabel: 'Supply Chain & Logistics',
      metric: '15% → 8–10%',
      metricDesc: 'Reduction in shipping costs',
      description: 'Shifted logistics operations away from aggregator platforms to direct courier partnerships. Negotiated regional and zonal rates to reduce Cost Per Shipment (CPS) and implemented same-day dispatch models that raised delivery success from 54% to 60%.',
      impactPoints: [
        'Cut shipping expenditure from 15% to 8–10% of revenue',
        'Increased delivery success rates from 54% to 60%',
        'Decreased order cancellations from 12% to 8% by filtering underperforming pincodes'
      ]
    },
    {
      title: 'Dynamic Courier Allocation Engine & Regional Pricing',
      company: 'NimbusPost',
      tag: 'logistics',
      tagLabel: 'Supply Chain & Logistics',
      metric: '18% → 23%',
      metricDesc: 'Gross profit margin growth',
      description: 'Spearheaded the development and execution of an intelligent courier allocation logic tailored to regional performance and service tiers. Introduced zonal flat pricing to enhance seller transparency and cost efficiency.',
      impactPoints: [
        'Boosted gross profit margins from 18% to 23%',
        'Negotiated incentive-based carrier rates, reducing high-volume billing by 5–10%',
        'Resolved unbooked order gaps in collaboration with Sales and Key Account Management'
      ]
    },
    {
      title: 'High-RTO Pricing Model & Delivery Integrity Framework',
      company: 'NimbusPost',
      tag: 'finance',
      tagLabel: 'Financial Operations',
      metric: '30%+',
      metricDesc: 'Landed revenue growth',
      description: 'Conceived and implemented a specialized dispatch pricing model for return-heavy (high-RTO) vendors. Simultaneously enforced stringent penalty frameworks on courier partners to curb fake delivery attempts.',
      impactPoints: [
        'Generated 30%+ growth in landed revenue from high-RTO merchant segments',
        'Enforced penalty systems that protected last-mile delivery integrity',
        'Conducted SKU weight audits to eliminate courier billing undercharges'
      ]
    },
    {
      title: 'Enterprise COD Reconciliation & Cash Flow Architecture',
      company: 'White Brands & NimbusPost',
      tag: 'finance',
      tagLabel: 'Financial Operations',
      metric: '100%',
      metricDesc: 'Receivable visibility & DSO reduction',
      description: 'Standardized full-cycle Cash-on-Delivery (COD) reconciliation processes to shorten remittance cycles, resolve vendor billing disputes, and improve working capital liquidity for enterprise accounts.',
      impactPoints: [
        'Built real-time receivable tracking systems for major enterprise clients including CRED and Meesho',
        'Minimized Days Sales Outstanding (DSO) through vendor ageing analysis and structured credit cycles',
        'Managed high-volume Accounts Payable (AP) disbursements across multiple 3PL providers'
      ]
    }
  ];

  const workExperience = [
    {
      role: 'Director of Finance And Operations',
      company: 'White Brands (WhiteBrands Group)',
      period: 'October 2023 – Present',
      location: 'Gurugram, Haryana, India',
      category: 'all',
      highlights: [
        'Negotiated zonal and regional courier rates, reducing Cost per Shipment (CPS) and improving last-mile delivery efficiency.',
        'Lowered shipping costs from 15% to 8–10% by shifting from aggregator platforms to direct courier partnerships.',
        'Boosted delivery success rates from 54% to 60% by implementing same-day dispatch models.',
        'Increased prepaid order share and prioritized their dispatch to reduce cancellations and enhance delivery performance.',
        'Reduced cancellation rates from 12% to 8% by filtering out underperforming pincodes.',
        'Segmented SKUs into fast-, slow-, and non-moving categories to improve inventory turnover and delivery rates.',
        'Adjusted product pricing and introduced bundling to improve unit economics for underperforming SKUs.',
        'Conducted SKU-level profitability audits on Amazon and Flipkart; retained high-margin products and removed low-performing ones.',
        'Managed end-to-end vendor relationships, including onboarding, SLA governance, and performance tracking.',
        'Handled high-volume AP processing across last-mile and 3PL vendors, ensuring timely and accurate disbursals.',
        'Executed vendor ageing analysis and negotiated credit cycles to reduce Days Sales Outstanding (DSO) and improve cash flow.',
        'Managed full-cycle COD reconciliation, resolving disputes and improving receivables turnaround.',
        'Developed financial risk frameworks to support vendor continuity and service reliability.',
        'Led logistics budget planning and vendor-based forecasting to align with growth and cost-efficiency goals.',
        'Built MIS dashboards to monitor real-time logistics KPIs, cost-to-serve, and SLA metrics.',
        'Conducted regular variance analysis (weekly, bi-weekly, monthly) to evaluate operational performance.',
        'Refocused media and operational efforts from high-revenue to high-ROI pincodes for better topline impact.',
        'Collaborated with marketing to pause underperforming campaigns and reallocate spend to high-performance zones.'
      ]
    },
    {
      role: 'Director Growth & Strategy',
      company: 'NimbusPost',
      period: 'April 2022 – April 2023 (1 year 1 month)',
      location: 'Gurugram, Haryana, India',
      category: 'all',
      highlights: [
        'Led the onboarding of new courier partners and designed dynamic pricing plans tailored to regional performance and service tiers.',
        'Developed and executed courier allocation logic, improving delivery efficiency and increasing gross profit from 18% to 23%.',
        'Introduced zonal flat pricing to enhance seller transparency and align courier assignments by regional performance and cost-effectiveness.',
        'Negotiated incentive-based courier rates, achieving a 5–10% reduction in overall billing for high-volume thresholds.',
        'Conducted SKU weight audits to eliminate undercharges, increasing revenue accuracy and preventing courier billing discrepancies.',
        'Worked with Key Account Managers and Sales teams to guide vendors on product resizing and packaging improvements, reducing volumetric shipping costs.',
        'Created and implemented a dispatch pricing model for high-RTO vendors, resulting in 30%+ growth in landed revenue.',
        'Enforced penalty frameworks on courier partners for fake delivery attempts, improving last-mile delivery integrity and accountability.',
        'Shortened courier cash remittance cycles by streamlining COD reconciliation processes, boosting liquidity and working capital turnover.',
        'Built real-time tracking systems to monitor outstanding payments from major clients such as CRED and Meesho.',
        'Partnered with enterprise clients to create customized, performance-driven logistics workflows tailored to their operational needs.',
        'Collaborated with Sales and KAM teams to resolve unbooked order gaps, maximizing seller utilization and increasing order throughput.'
      ]
    },
    {
      role: 'Lead Growth & Strategy',
      company: 'NimbusPost',
      period: 'January 2021 – April 2022 (1 year 4 months)',
      location: 'Gurugram, Haryana, India',
      category: 'all',
      highlights: [
        'Orchestrated growth strategy and carrier partner integration during rapid enterprise expansion.'
      ]
    },
    {
      role: 'Entrepreneur',
      company: 'Rao Enterprises',
      period: 'January 2020 – December 2020 (1 year)',
      location: 'New Delhi, Delhi, India',
      category: 'all',
      highlights: [
        'Founded and scaled a restaurant business with end-to-end control over procurement, vendor management, and inventory logistics.',
        'Achieved a 12% reduction in procurement costs through strategic supplier consolidation and automation of inventory systems.'
      ]
    },
    {
      role: 'Sr Manager Operations',
      company: 'LafaLafa Cashback & Coupons',
      period: 'July 2015 – September 2019 (4 years 3 months)',
      location: 'Gurugram, Haryana, India',
      category: 'all',
      highlights: [
        'Vendor Management: Oversaw affiliate partnerships with networks like Tyroo, OMG, DGM, and Payoom.',
        'Managed direct merchant partnerships and their payment cycles (Freecharge, Flipkart, Amazon, etc.).',
        'Business Development: Secured exclusive deals, offers, and cashback from merchants and affiliates to strengthen transaction volume.',
        'Data Management: Executed regular analytics and reporting to monitor business KPIs and inform marketing and product initiatives.',
        'Process Management: Developed and implemented operational processes focused on high customer satisfaction and zero defects in customer cashback payouts.',
        'Led team curating category-based deal additions for key accounts including Amazon, Paytm, Flipkart, and Snapdeal.',
        'Spearheaded international expansion by initiating business division in Hong Kong with international affiliates (Rakuten, CJ Affiliates, Chinese AN).'
      ]
    },
    {
      role: 'Operations Manager',
      company: 'Vdeliver.co.in',
      period: 'September 2012 – May 2015 (2 years 9 months)',
      location: 'New Delhi Area, India',
      category: 'all',
      highlights: [
        'Provided last-mile delivery and overall logistics solutions to Shopclues, Yebhi, Fashion and You, Snapdeal, and leading e-commerce platforms.',
        'Managed a team of 60 members responsible for vendor training, pick-up, and delivery operations.',
        'Conducted company-wide performance analysis, forecasting, and merchant relationship management.',
        'Negotiated and managed courier partners (FedEx, Blue Dart, Aramex, Delhivery, E-Com Express, GoJavas).',
        'Prepared and presented monthly LSP performance reports evaluating Delivery TAT, damaged/lost shipments, and RTO.',
        'Ensured prompt issuance of credit notes for damaged and lost shipments from multiple logistics service providers.'
      ]
    },
    {
      role: 'Operations Manager (Quality)',
      company: 'Chhotu.in',
      period: 'December 2010 – September 2012 (1 year 10 months)',
      location: 'Greater Delhi Area, India',
      category: 'all',
      highlights: [
        'Managed logistics operations across warehousing, last-mile delivery, and returns handling for 7,000–10,000 shipments per day.',
        'Developed Standard Operating Procedures (SOPs) for supply chain functions, reducing backlogs and enhancing partner compliance.',
        'Led a 120+ member cross-functional team, implementing MIS tools to optimize cost-efficiency and service performance.'
      ]
    }
  ];

  const filteredInitiatives = activeFilter === 'all' 
    ? strategicInitiatives 
    : strategicInitiatives.filter(i => i.tag === activeFilter);

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg text-ink tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-ink text-white inline-flex items-center justify-center text-sm font-extrabold">
              AY
            </span>
            <span>Amit Rao Yadav</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted">
            <a href="#about" className="hover:text-ink transition-colors">About</a>
            <a href="#featured" className="hover:text-ink transition-colors">Featured Work</a>
            <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
            <a href="#skills" className="hover:text-ink transition-colors">Skills</a>
            <a href="#education" className="hover:text-ink transition-colors">Education</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="mailto:amit58yadav@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-accent hover:bg-blue-700 rounded transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* Intro / Hero Section */}
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-ink-muted bg-surface-subtle border border-surface-border rounded-full">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>Gurugram, Haryana, India</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink tracking-tight leading-[1.08]">
              Amit Rao Yadav
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-brand-accent leading-snug">
              Director – Finance & Operations
            </p>
            <p className="text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed">
              Seasoned executive with over 13 years of cross-functional expertise in logistics, vendor management, supply chain strategy, and financial operations. Expert at optimizing operational performance, reducing delivery and procurement costs, and driving data-backed decisions through robust MIS frameworks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="https://www.linkedin.com/in/amit-rao-yadav-68635029/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-ink hover:bg-neutral-800 rounded transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <a 
              href="https://github.com/meyadavamit-stack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-ink bg-surface-card hover:bg-neutral-200 border border-surface-border rounded transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <a 
              href="/Profile.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-ink bg-white hover:bg-surface-subtle border border-surface-border rounded transition-colors"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>View Original PDF</span>
            </a>
          </div>

          {/* Key Executive Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-surface-border">
            <div className="p-4 bg-surface-subtle rounded border border-surface-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-ink">13+ Years</div>
              <div className="text-xs sm:text-sm text-ink-muted font-medium mt-1">Cross-functional executive leadership</div>
            </div>
            <div className="p-4 bg-surface-subtle rounded border border-surface-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">15% → 8–10%</div>
              <div className="text-xs sm:text-sm text-ink-muted font-medium mt-1">Shipping cost reduction via direct courier models</div>
            </div>
            <div className="p-4 bg-surface-subtle rounded border border-surface-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-ink">120+ Team</div>
              <div className="text-xs sm:text-sm text-ink-muted font-medium mt-1">Cross-functional team members led & scaled</div>
            </div>
            <div className="p-4 bg-surface-subtle rounded border border-surface-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">30%+ Growth</div>
              <div className="text-xs sm:text-sm text-ink-muted font-medium mt-1">Landed revenue growth via dispatch pricing</div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="space-y-6 pt-6 border-t border-surface-border">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">About Me</h2>
            <p className="text-sm text-ink-muted font-medium">Executive background and core operational scope</p>
          </div>

          <div className="p-6 sm:p-8 bg-surface-subtle rounded border border-surface-border space-y-5 leading-relaxed text-ink-muted text-base">
            <p>
              Seasoned and impact-driven finance and operations executive with over 13 years of cross-functional expertise in logistics, vendor management, supply chain strategy, and financial operations. Proven ability to optimize operational performance, reduce costs, and scale high-impact logistics solutions across dynamic business environments.
            </p>
            <p>
              Adept at managing multimillion-dollar budgets, aligning cross-functional teams, and driving data-backed decisions through robust MIS frameworks. Recognized for enhancing cash flow, minimizing Days Sales Outstanding (DSO), and improving last-mile delivery benchmarks through strategic vendor partnerships.
            </p>
            <p>
              Currently leading finance and operations at WhiteBrands Group, with a successful track record at Nimbuspost and other logistics-driven ventures. Passionate about building sustainable supply chains and transforming operations into value-generating functions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-surface-border">
              <div className="p-4 bg-white rounded border border-surface-border">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm mb-1">
                  <TrendingUp className="w-4 h-4 text-brand-accent" />
                  <span>Financial Operations</span>
                </div>
                <p className="text-xs text-ink-muted">Cash flow optimization, DSO reduction, AP processing, COD reconciliation, and unit economics.</p>
              </div>

              <div className="p-4 bg-white rounded border border-surface-border">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm mb-1">
                  <Truck className="w-4 h-4 text-brand-accent" />
                  <span>Supply Chain Strategy</span>
                </div>
                <p className="text-xs text-ink-muted">Last-mile carrier partnerships, rate negotiation, SKU segmentation, and returns mitigation.</p>
              </div>

              <div className="p-4 bg-white rounded border border-surface-border">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm mb-1">
                  <Languages className="w-4 h-4 text-brand-accent" />
                  <span>Languages</span>
                </div>
                <p className="text-xs text-ink-muted">English, Hindi, German.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work / Strategic Case Studies */}
        <section id="featured" className="space-y-6 pt-6 border-t border-surface-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Featured Strategic Work</h2>
              <p className="text-sm text-ink-muted font-medium">Core impact initiatives and operational turnarounds</p>
            </div>

            {/* Live Filter Controls */}
            <div className="inline-flex p-1 bg-surface-subtle border border-surface-border rounded text-xs font-semibold">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded transition-colors ${activeFilter === 'all' ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'}`}
              >
                All Areas
              </button>
              <button
                onClick={() => setActiveFilter('logistics')}
                className={`px-3 py-1.5 rounded transition-colors ${activeFilter === 'logistics' ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'}`}
              >
                Logistics & Supply Chain
              </button>
              <button
                onClick={() => setActiveFilter('finance')}
                className={`px-3 py-1.5 rounded transition-colors ${activeFilter === 'finance' ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'}`}
              >
                Finance & Cash Flow
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInitiatives.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white border border-surface-border rounded hover:border-brand-accent transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-surface-card text-ink">
                      {item.company}
                    </span>
                    <span className="text-xs font-medium text-brand-accent bg-blue-50 px-2 py-0.5 rounded">
                      {item.tagLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-brand-accent">{item.metric}</span>
                    <span className="text-xs text-ink-muted font-medium">{item.metricDesc}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-ink-muted">
                    {item.impactPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="space-y-6 pt-6 border-t border-surface-border">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Work Experience</h2>
            <p className="text-sm text-ink-muted font-medium">Chronological leadership and executive roles</p>
          </div>

          <div className="space-y-6">
            {workExperience.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 bg-white border border-surface-border rounded space-y-4 hover:border-neutral-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-surface-border">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
                    <div className="text-base font-semibold text-brand-accent mt-0.5">{exp.company}</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-surface-subtle border border-surface-border rounded text-ink">
                      {exp.period}
                    </span>
                    <div className="text-xs text-ink-subtle mt-1">{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-ink-muted leading-relaxed">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-brand-accent font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6 pt-6 border-t border-surface-border">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Skills & Core Capabilities</h2>
            <p className="text-sm text-ink-muted font-medium">Domain strengths, methodologies, and technical competencies</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-surface-subtle border border-surface-border rounded space-y-4">
              <div className="flex items-center gap-2 text-ink font-bold text-base">
                <TrendingUp className="w-5 h-5 text-brand-accent" />
                <span>Financial Operations & Cash Flow</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Financial Operations',
                  'Cash Flow Optimization',
                  'AP Processing',
                  'COD Reconciliation',
                  'DSO Reduction',
                  'Logistics Budget Planning',
                  'Vendor Forecasting',
                  'Unit Economics & Pricing',
                  'SKU-Level Profitability Audits'
                ].map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white border border-surface-border rounded text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-surface-subtle border border-surface-border rounded space-y-4">
              <div className="flex items-center gap-2 text-ink font-bold text-base">
                <Truck className="w-5 h-5 text-brand-accent" />
                <span>Supply Chain Strategy & Logistics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Supply Chain Strategy & Execution',
                  'Last-Mile Delivery Efficiency',
                  'Courier Rate Negotiation',
                  'Same-Day Dispatch Models',
                  '3PL & Courier Partner Onboarding',
                  'Zonal & Flat Pricing',
                  'RTO & Cancellation Reduction',
                  'SKU Segmentation & Turnover',
                  'Warehousing Operations'
                ].map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white border border-surface-border rounded text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-surface-subtle border border-surface-border rounded space-y-4">
              <div className="flex items-center gap-2 text-ink font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span>Vendor Lifecycle & Governance</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Vendor Lifecycle Management',
                  'Contract & SLA Governance',
                  'Performance Tracking',
                  'Vendor Ageing Analysis',
                  'Credit Cycles Negotiation',
                  'Penalty Framework Enforcement',
                  'Merchant Relationship Management',
                  'Dispute Resolution'
                ].map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white border border-surface-border rounded text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-surface-subtle border border-surface-border rounded space-y-4">
              <div className="flex items-center gap-2 text-ink font-bold text-base">
                <BarChart3 className="w-5 h-5 text-brand-accent" />
                <span>MIS, Analytics & Leadership</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'MIS Frameworks & Dashboards',
                  'Cost-to-Serve Metrics',
                  'Variance Analysis (Weekly/Monthly)',
                  'SOP Development',
                  'Team Leadership (120+ members)',
                  'Financial Risk Frameworks',
                  'Cross-functional Alignment',
                  'International Affiliate Expansion'
                ].map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white border border-surface-border rounded text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-6 pt-6 border-t border-surface-border">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Education</h2>
            <p className="text-sm text-ink-muted font-medium">Academic foundation</p>
          </div>

          <div className="p-6 bg-white border border-surface-border rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-ink">Delhi University</h3>
              <p className="text-base text-ink-muted mt-0.5">Bachelor of Science (B.Sc.) in Maths, Statistics</p>
            </div>
            <div className="px-4 py-1.5 text-sm font-semibold bg-surface-subtle border border-surface-border rounded text-brand-accent w-fit">
              2006 – 2009
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 pt-6 border-t border-surface-border pb-12">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Get In Touch</h2>
            <p className="text-sm text-ink-muted font-medium">Direct communication channels</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a 
              href="mailto:amit58yadav@gmail.com"
              className="p-6 bg-surface-subtle hover:bg-white border border-surface-border hover:border-brand-accent rounded transition-all group"
            >
              <Mail className="w-5 h-5 text-brand-accent mb-3" />
              <div className="text-xs font-semibold text-ink-subtle uppercase tracking-wider">Email</div>
              <div className="text-base font-bold text-ink mt-1 group-hover:text-brand-accent transition-colors break-all">
                amit58yadav@gmail.com
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/amit-rao-yadav-68635029/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-subtle hover:bg-white border border-surface-border hover:border-brand-accent rounded transition-all group"
            >
              <Linkedin className="w-5 h-5 text-brand-accent mb-3" />
              <div className="text-xs font-semibold text-ink-subtle uppercase tracking-wider">LinkedIn</div>
              <div className="text-base font-bold text-ink mt-1 group-hover:text-brand-accent transition-colors">
                amit-rao-yadav
              </div>
            </a>

            <a 
              href="https://github.com/meyadavamit-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-subtle hover:bg-white border border-surface-border hover:border-brand-accent rounded transition-all group"
            >
              <Github className="w-5 h-5 text-brand-accent mb-3" />
              <div className="text-xs font-semibold text-ink-subtle uppercase tracking-wider">GitHub</div>
              <div className="text-base font-bold text-ink mt-1 group-hover:text-brand-accent transition-colors">
                meyadavamit-stack
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-surface-border bg-surface-subtle py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-subtle">
          <div>
            © 2026 Amit Rao Yadav. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/amit-rao-yadav-68635029/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href="https://github.com/meyadavamit-stack" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href="mailto:amit58yadav@gmail.com" className="hover:text-ink">
              Email
            </a>
            <a href="/Profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Original PDF
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

