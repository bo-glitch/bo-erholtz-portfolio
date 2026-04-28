// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project data
const projects = {
  recruiting: {
    tag: 'Corporate Strategy',
    title: 'National Recruiting Market Strategy',
    tools: 'Excel · Labor market research · Market prioritization',
    overview: 'During my Marketing Specialist internship at Daikin Applied Americas, I worked on a practical recruiting question: where should the company focus campaign dollars when every market can make a plausible case for attention? I built a repeatable way to compare markets using labor, wage, growth, and demand signals instead of relying on instinct alone.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Pulled and cleaned labor market inputs including wage trends, workforce size, unemployment rates, and HVAC-related demand signals',
          'Built a weighted Excel scoring framework across talent availability, cost competitiveness, growth trajectory, and market demand',
          'Tested how rankings changed when assumptions shifted, so the recommendations were not dependent on one fragile weighting scheme',
          'Turned the model into a prioritized market list with plain-language rationale for each recommendation'
        ]
      },
      {
        heading: 'Outcome',
        items: [
          'Delivered a ranked list of high-priority U.S. recruiting markets to marketing leadership',
          'Created a framework the team could reuse as hiring needs or market conditions changed',
          'Helped move campaign targeting conversations from broad preference to comparable evidence'
        ]
      }
    ]
  },

  llm: {
    tag: 'Analytics',
    title: 'LLM Consumer Behavior Analytics',
    tools: 'R · Data cleaning · Cohort analysis · Visualization',
    overview: 'This analytics project looked at a question that is easy to speculate about and harder to measure: when people adopt tools like ChatGPT, what happens to the rest of their digital behavior? I used large-scale behavioral data to compare usage patterns before and after adoption across user cohorts.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Cleaned and processed behavioral data in R, handling missing values, outliers, and inconsistent timestamps',
          'Segmented users into cohorts based on LLM adoption timing to isolate behavioral shifts pre- and post-adoption',
          'Ran cohort-level analysis to compare app session frequency, duration, and category mix before and after LLM adoption',
          'Built visualizations in R to make changes visible across cohorts and categories'
        ]
      },
      {
        heading: 'Findings',
        items: [
          'Identified app categories where engagement shifted after LLM adoption',
          'Found that substitution effects were not uniform across user segments',
          'Produced cohort visuals that made the timing and direction of behavior changes easier to discuss'
        ]
      }
    ]
  },

  tcloony: {
    tag: 'Data Visualization',
    title: 'TCLoony Challenge Dashboard Analysis',
    tools: 'Tableau · Excel · segmentation · revenue analysis',
    overview: 'This project used Twin Cities Motion data from the TC Loony Challenge to answer two connected business questions: how should marketing target the right participant segments, and how could the event increase registration revenue? We created two interactive dashboards for different decision-makers: a Director of Marketing and a Director of Finance.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Focused the analysis on one event, the TC Loony Challenge, to keep variables consistent and interpretation clear',
          'Classified registration pricing tiers in Excel before bringing the refined data into Tableau',
          'Built a marketing dashboard around demographics, geography, education, awareness channels, and participation patterns',
          'Built a finance dashboard around gender-based revenue, age group revenue, household income, and pricing tier behavior'
        ]
      },
      {
        heading: 'Insights',
        items: [
          'Identified educated women ages 35-45 as a core high-engagement, high-revenue audience',
          'Found that the TCM website and word-of-mouth drove the majority of registrations, while social media was underutilized',
          'Showed participation concentration in the Twin Cities metro area and higher-income suburban regions',
          'Recommended geo-targeted marketing, referral campaigns, premium tier promotion, and corporate/group registration opportunities'
        ]
      }
    ]
  },

  rotation: {
    tag: 'Entrepreneurship',
    title: 'Rotation: Business Plan & Investor Pitch',
    tools: 'Financial modeling · Business planning · GTM strategy · Pitch design',
    overview: 'Rotation is a consumer mobile app concept built around wardrobe analytics and spending optimization. The starting insight was simple: people often own more clothing than they use and have very little visibility into cost-per-wear, gaps, or redundant purchases. The project turned that behavior problem into a venture plan for Carlson Ventures Enterprise.',
    pdf: 'assets/rotation-pitch.pdf',
    sections: [
      {
        heading: 'What We Built',
        items: [
          'Built a business plan with market sizing, competitive landscape, positioning, and target customer logic',
          'Created a 3-year financial model with unit economics, revenue assumptions, and valuation logic',
          'Developed monetization across freemium, premium subscription, and brand partnership paths',
          'Designed a go-to-market plan around college-aged women as an initial wedge',
          'Created the investor-style pitch deck embedded below'
        ]
      }
    ]
  },

  target: {
    tag: 'Consumer Research',
    title: 'Target Retail Theft & Customer Experience',
    tools: 'Qualtrics · Ethnographic observation · In-depth interviews · Statistical analysis',
    overview: 'This project investigated a tension in modern retail: stores need to reduce theft, but theft-prevention measures can also make honest shoppers feel watched, delayed, or distrusted. The goal was to understand that tradeoff and recommend ways to protect the business without damaging the customer experience.',
    sections: [
      {
        heading: 'Methodology',
        items: [
          'Conducted observation sessions across Dinkytown, Roseville, Nicollet, and other Target locations, documenting shopper behavior and friction at loss-prevention touchpoints',
          'Ran focus groups and in-depth interviews to capture qualitative sentiment around locked cases, self-checkout restrictions, product availability, and security interactions',
          'Designed a Qualtrics survey to gather quantitative data on customer perceptions, trust, and likelihood to return',
          'Triangulated findings across all three methods to identify patterns that held across both qualitative and quantitative data'
        ]
      },
      {
        heading: 'Findings & Recommendations',
        items: [
          'Found that customers shop Target primarily for convenience and prefer minimal employee interaction, while locked displays often force unwanted interactions',
          'Identified beauty, personal care, electronics, laundry, medicine, and similar categories as high-friction locked-product areas',
          'Recommended in-app display unlocking and live chat support to reduce wait time and preserve convenience',
          'Proposed pairing theft prevention with social support strategies for essential items such as hygiene products'
        ]
      }
    ]
  },

  aldi: {
    tag: 'Community Strategy',
    title: 'Fueling Student Success: Aldi at UMN',
    tools: 'Market research · location analysis · persuasive strategy',
    overview: 'This persuasive strategy project made the case for establishing an Aldi near the University of Minnesota to address student food insecurity. The work connected student need, site feasibility, cost comparisons, and community impact into one recommendation.',
    sections: [
      {
        heading: 'Problem & Evidence',
        items: [
          'Framed food insecurity as a student success issue, citing that 19.1% of University of Minnesota students experience limited or uncertain access to adequate food',
          'Analyzed the weekly food budget gap for food-insecure students and the way grocery access affects nutrition, energy, and academic focus',
          'Compared nearby grocery options and showed how limited, expensive, or inconvenient access pushes students toward lower-nutrient choices',
          'Built a cost comparison showing Aldi at $10.92 for a basic grocery basket versus $14.65 at Target and higher baskets at other nearby retailers'
        ]
      },
      {
        heading: 'Recommendation',
        items: [
          'Proposed the Fourth Street Parking Ramp area as a potential location based on proximity to Coffman, student housing, Athletes Village, traffic, and site size',
          'Estimated that repeated Aldi trips could save students hundreds of dollars over time compared with other grocery options',
          'Connected the store concept to student employment, internships, campus ambassador roles, and broader community economic benefits',
          'Addressed implementation challenges including zoning, parking, competition, and Aldi corporate approval requirements'
        ]
      }
    ]
  },

  lumeon: {
    tag: 'Product Innovation',
    title: 'Lumeon Adaptive Lighting Concept',
    tools: 'Product strategy · market validation · revenue model · competitive analysis',
    overview: 'Lumeon is a smart adaptive monitor light bar concept designed around human performance. The product responds to time of day, calendar context, and user presence to improve focus, reduce eye strain, and support employee well-being in desk-based work.',
    sections: [
      {
        heading: 'Product Concept',
        items: [
          'Defined the problem around harsh office lighting, eye strain, sleep disruption, low energy, reduced focus, and uninspiring work environments',
          'Designed a circadian-aligned light bar that shifts brightness and color temperature throughout the day',
          'Built the concept around Microsoft Graph API integrations for calendar events, Teams meetings, and presence status',
          'Mapped the product workflow from API call to data processing to automatic light control'
        ]
      },
      {
        heading: 'Business Model',
        items: [
          'Benchmarked direct and indirect competitors including BenQ ScreenBar, Philips Hue, Hatch, LIFX, and light therapy products',
          'Positioned the concept around hands-free productivity, workplace wellness, and calendar-aware automation',
          'Outlined cost structure assumptions including electronics, packaging, software development, maintenance, marketing, and distribution',
          'Developed revenue paths across direct product sales, premium subscriptions, and corporate wellness partnerships'
        ]
      }
    ]
  },

  spinify: {
    tag: 'Consulting',
    title: 'Level Up with Spinify — U.S. Bank Employee Engagement',
    tools: 'Competitor benchmarking · Persona development · ROI modeling · Strategic planning',
    overview: 'This consulting project started from a post-pandemic engagement problem at U.S. Bank and asked what kind of intervention could realistically change day-to-day motivation. The proposal used Spinify as the platform concept, but the core work was diagnosing employee needs, designing a pilot, and making the business case.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Benchmarked employee engagement approaches at peer financial institutions to identify gaps in U.S. Bank\'s current strategy',
          'Developed three employee personas with different engagement drivers, pain points, and motivations',
          'Designed a Spinify implementation proposal tailored to each persona, with specific feature recommendations and adoption pathways',
          'Recommended a one-year pilot for 500 users, starting with Spinify\'s Scale plan before considering an enterprise rollout',
          'Built a phased implementation timeline covering research and development, partial implementation, testing and feedback, and full rollout'
        ]
      },
      {
        heading: 'Deliverables',
        items: [
          'Full consulting proposal deck with executive summary, industry analysis, tool analysis, and implementation roadmap',
          'Three detailed employee personas with behavioral profiles and engagement recommendations',
          'AI-agent recommendations for onboarding, personalized program suggestions, manager insights, and automated engagement tracking'
        ]
      }
    ]
  },

  cidm: {
    tag: 'Strategic Consulting',
    title: 'Strengthening CIDM: A Business Model for Sustainable Impact',
    tools: 'Environmental analysis · Brand strategy · Financial sustainability planning · Stakeholder mapping',
    overview: 'Following the closure of the Society to Improve Diagnosis in Medicine, this project looked at what it would take for the Community for Improving Diagnosis in Medicine to become a credible, sustainable organization. The work was co-authored as a strategic consulting report for a real stakeholder context.',
    sections: [
      {
        heading: 'Scope of Work',
        items: [
          'Conducted an environmental analysis of peer organizations in the healthcare quality and patient safety space to map the competitive and collaborative landscape',
          'Developed new positioning, messaging, and visual identity direction to help CIDM stand apart and build credibility independently',
          'Built a financial sustainability model identifying realistic revenue streams including grants, memberships, partnerships, and events',
          'Proposed a leadership and governance framework to support long-term organizational stability',
          'Designed a community engagement strategy to rebuild and activate the diagnostic medicine community post-SIDM'
        ]
      },
      {
        heading: 'Outcome',
        items: [
          'Delivered a full strategic consulting report with actionable recommendations across brand, finance, operations, and community',
          'Report was structured for a real stakeholder audience with decision-making authority over CIDM\'s future direction'
        ]
      }
    ]
  }
};

// Build modal HTML
function buildModal(key) {
  const p = projects[key];
  if (!p) return '';

  const sectionsHTML = p.sections.map(s => `
    <div class="modal-section">
      <h4>${s.heading}</h4>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');

  const pdfHTML = p.pdf ? `
    <div class="modal-pdf-wrap">
      <p class="modal-pdf-label">Pitch deck</p>
      <iframe src="${p.pdf}" class="modal-pdf" title="Pitch deck"></iframe>
      <a href="${p.pdf}" target="_blank" class="modal-pdf-link">Open full screen →</a>
    </div>
  ` : '';

  return `
    <div class="modal-header">
      <span class="tag">${p.tag}</span>
      <h2 id="modalTitle">${p.title}</h2>
      <p class="modal-tools">${p.tools}</p>
    </div>
    <p class="modal-overview">${p.overview}</p>
    ${sectionsHTML}
    ${pdfHTML}
  `;
}

// Modal logic
const overlay = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
let lastFocusedElement = null;

function openModal(key) {
  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = buildModal(key);
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal').scrollTop = 0;
  overlay.querySelector('.modal-close').focus();
}

function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
}

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

overlay.querySelector('.modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
