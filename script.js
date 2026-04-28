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
          'Conducted observation sessions across Target locations, documenting shopper behavior and friction at loss-prevention touchpoints',
          'Ran in-depth interviews with shoppers to capture qualitative sentiment around locked cases, self-checkout restrictions, and security interactions',
          'Designed a Qualtrics survey to gather quantitative data on customer perceptions, trust, and likelihood to return',
          'Triangulated findings across all three methods to identify patterns that held across both qualitative and quantitative data'
        ]
      },
      {
        heading: 'Findings & Recommendations',
        items: [
          'Identified specific product categories and store zones where friction was highest and shopper frustration most acute',
          'Found that trust in staff interactions and perceived safety were key parts of return intent',
          'Developed store layout and signage recommendations to reduce perceived surveillance while maintaining deterrence',
          'Proposed staff training adjustments to improve customer interactions at high-friction points'
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
          'Built a one-year pilot plan with phased rollout, success metrics, and an integration approach with Microsoft Teams',
          'Modeled ROI logic around productivity, retention, and adoption assumptions'
        ]
      },
      {
        heading: 'Deliverables',
        items: [
          'Full consulting proposal deck with executive summary, competitive analysis, and implementation roadmap',
          'Three detailed employee personas with behavioral profiles and engagement recommendations',
          'ROI analysis projecting productivity and retention impact over a 12-month pilot period'
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
