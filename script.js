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
    overview: 'During my Marketing Specialist internship at Daikin Applied Americas, I was tasked with identifying which U.S. markets the company should prioritize for recruiting campaigns. The challenge: Daikin had limited recruiting budget and needed a data-driven way to rank markets rather than relying on intuition.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Pulled and cleaned multi-source labor market data including wage trends, workforce size, unemployment rates, and HVAC-specific demand signals',
          'Built a weighted scoring framework in Excel to rank markets across dimensions: talent availability, cost competitiveness, growth trajectory, and market demand',
          'Stress-tested the model by adjusting weighting assumptions to validate that top markets held across different scenarios',
          'Translated findings into a prioritized market list with supporting rationale for each recommendation'
        ]
      },
      {
        heading: 'Outcome',
        items: [
          'Delivered a ranked list of high-priority U.S. recruiting markets to marketing leadership',
          'Framework was designed to be reusable — weights could be updated as market conditions changed',
          'Recommendations directly informed campaign targeting decisions for the recruiting team'
        ]
      }
    ]
  },

  llm: {
    tag: 'Analytics',
    title: 'LLM Consumer Behavior Analytics',
    tools: 'R · Data cleaning · Cohort analysis · Visualization',
    overview: 'This project examined how the rapid adoption of large language model (LLM) tools like ChatGPT shifted consumer app usage behavior. Using large-scale digital behavioral data, the goal was to identify whether — and how — generative AI tools were displacing or reshaping engagement with other consumer apps.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Cleaned and processed a large behavioral dataset in R, handling missing values, outliers, and inconsistent timestamps',
          'Segmented users into cohorts based on LLM adoption timing to isolate behavioral shifts pre- and post-adoption',
          'Ran cohort-level analysis to compare app session frequency, duration, and category mix before and after LLM adoption',
          'Visualized findings using ggplot2 to communicate patterns clearly across multiple audience segments'
        ]
      },
      {
        heading: 'Findings',
        items: [
          'Identified measurable shifts in engagement patterns in specific app categories following LLM adoption',
          'Cohort analysis revealed differences in substitution effects across user segments',
          'Produced visualizations showing trend lines across adoption cohorts over time'
        ]
      }
    ]
  },

  rotation: {
    tag: 'Entrepreneurship',
    title: 'Rotation: Business Plan & Investor Pitch',
    tools: 'Financial modeling · Business planning · GTM strategy · Pitch design',
    overview: 'Rotation is a consumer mobile app concept built around wardrobe analytics and spending optimization. The idea: most people own far more clothing than they wear, spend inconsistently, and have no visibility into their wardrobe ROI. Rotation gives users data on what they actually wear, what to buy next, and how to spend smarter. Built as part of the Carlson Ventures Enterprise course.',
    pdf: 'assets/rotation-pitch.pdf',
    sections: [
      {
        heading: 'What We Built',
        items: [
          'Full investor-ready business plan including market sizing, competitive landscape, and positioning strategy',
          'Financial model with 3-year projections, unit economics, and valuation using comparable SaaS multiples',
          'Pricing and monetization strategy across freemium, premium subscription, and brand partnership tiers',
          'Go-to-market plan targeting college-aged women as the initial segment with an influencer-led growth loop',
          'Pitch deck designed for a mock investor audience — embedded below'
        ]
      }
    ]
  },

  target: {
    tag: 'Consumer Research',
    title: 'Target Retail Theft & Customer Experience',
    tools: 'Qualtrics · Ethnographic observation · In-depth interviews · Statistical analysis',
    overview: 'This project investigated a tension that has become central to modern retail: as Target and other large retailers invest heavily in theft prevention — locked cases, receipt checks, reduced store hours — how does this affect the shopping experience for legitimate customers? The goal was to generate data-driven recommendations that balanced loss prevention with customer trust.',
    sections: [
      {
        heading: 'Methodology',
        items: [
          'Conducted ethnographic observation sessions across multiple Target locations, documenting shopper behavior and friction points at loss-prevention touchpoints',
          'Ran in-depth interviews with shoppers to capture qualitative sentiment around locked cases, self-checkout restrictions, and security interactions',
          'Designed and deployed a Qualtrics survey to gather quantitative data on customer perceptions, trust, and likelihood to return',
          'Triangulated findings across all three methods to identify patterns that held across both qualitative and quantitative data'
        ]
      },
      {
        heading: 'Findings & Recommendations',
        items: [
          'Identified specific product categories and store zones where friction was highest and shopper frustration most acute',
          'Found that perceived safety and trust in staff interactions were stronger drivers of return intent than merchandise availability',
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
    overview: 'U.S. Bank faced a measurable decline in employee engagement following the pandemic — a challenge common across large financial institutions. This consulting project developed a comprehensive proposal to address engagement through an AI-driven gamification platform (Spinify), with a focus on motivation, recognition, and community building.',
    sections: [
      {
        heading: 'Approach',
        items: [
          'Benchmarked competitor approaches to employee engagement at peer financial institutions to identify gaps in U.S. Bank\'s current strategy',
          'Developed three distinct employee personas representing the range of U.S. Bank\'s workforce — each with different engagement drivers, pain points, and motivations',
          'Designed a Spinify implementation proposal tailored to each persona, with specific feature recommendations and adoption pathways',
          'Built a one-year pilot plan including phased rollout, success metrics, and integration approach with Microsoft Teams',
          'Modeled expected ROI based on engagement lift benchmarks from comparable enterprise gamification deployments'
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
    overview: 'Following the closure of the Society to Improve Diagnosis in Medicine (SIDM), a gap emerged in the medical diagnosis improvement space. This project re-envisioned the Community for Improving Diagnosis in Medicine (CIDM) as a sustainable, independent organization capable of carrying that mission forward. Co-authored as a full strategic consulting report.',
    sections: [
      {
        heading: 'Scope of Work',
        items: [
          'Conducted an environmental analysis of peer organizations in the healthcare quality and patient safety space to map the competitive and collaborative landscape',
          'Developed a new brand identity for CIDM — including positioning, messaging framework, and visual identity direction — to distinguish it from SIDM and establish credibility independently',
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
      <h2>${p.title}</h2>
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

function openModal(key) {
  modalContent.innerHTML = buildModal(key);
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal').scrollTop = 0;
}

function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.project);
  });
});

overlay.querySelector('.modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
