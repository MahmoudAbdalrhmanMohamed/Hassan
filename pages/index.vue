<script setup lang="ts">
definePageMeta({
  layout: "default"
})

const config = useRuntimeConfig()
const appName = String(config.public.appName ?? "El Hassan Mohamed | Food Safety & QA Portfolio")

useSeoMeta({
  title: "El Hassan Mohamed | Food Safety, QA/QC & ISO 22000 Specialist (Giza, Egypt)",
  description: "Agriculture graduate (Ain Shams University, 2024) trained in Food Safety & Quality Management Systems: ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP.",
  keywords: [
    "El Hassan Mohamed Abd Alla Abd ElGhani",
    "Food Safety Specialist Egypt",
    "Quality Assurance Specialist Giza",
    "Quality Control Food Manufacturing",
    "ISO 22000:2018",
    "ISO 50001:2018",
    "ISO 14001",
    "HACCP",
    "PRPs",
    "GMP",
    "GHP",
    "Ain Shams University Agriculture"
  ],
  ogTitle: "El Hassan Mohamed | Food Safety & Quality Assurance Portfolio",
  ogDescription: "Explore El Hassan Mohamed's Food Safety & QA/QC qualifications, ISO certifications, HACCP system design projects, and downloadable ATS CV.",
  twitterCard: "summary_large_image",
  themeColor: "#1B4332"
})
</script>

<template>
  <main class="page">
    <!-- Editorial Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">
          <span style="display:inline-block; width:7px; height:7px; border-radius:50%; background:var(--accent-forest); margin-right:4px;"></span>
          DOSSIER NO. ASU-2024-FSMS • AVAILABLE FOR QA / QC ROLES
        </p>

        <h1>
          El Hassan Mohamed <span class="highlight">Abd Alla Abd ElGhani</span>
        </h1>

        <p class="hero-subtitle">
          Food Safety, Quality Assurance (QA) &amp; Quality Control (QC) Specialist • B.Sc. in Agriculture (Ain Shams University, 2024)
        </p>

        <p class="lede">
          Agriculture graduate with intensive theoretical and practical training in <strong>Food Safety and Quality Management Systems</strong>. Experienced in designing food safety systems, conducting biological, chemical, and physical hazard analysis, implementing <strong>ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP</strong>, and executing structured root cause investigation (RCA) and corrective actions (CAPA) for food manufacturing plants.
        </p>

        <!-- Standards Pills -->
        <div class="standards-pills">
          <span class="pill-iso">ISO 22000:2018</span>
          <span class="pill-iso">ISO 50001:2018</span>
          <span class="pill-iso">ISO 14001</span>
          <span class="pill-program">HACCP</span>
          <span class="pill-program">PRPs</span>
          <span class="pill-program">GMP</span>
          <span class="pill-program">GHP</span>
          <span class="pill-neutral">ICDL Certified</span>
        </div>

        <!-- Action Buttons -->
        <div class="actions">
          <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"/>
            </svg>
            <span>Download CV (PDF)</span>
          </a>

          <a href="/El_Hassan_Mohamed_CV.docx" download="El_Hassan_Mohamed_CV.docx" class="btn-secondary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>Download Editable (.DOCX)</span>
          </a>

          <a href="/cv" class="btn-secondary" style="border-color: var(--accent-forest); color: var(--accent-forest) !important;">
            <span>Preview Formatted ATS CV</span>
          </a>

          <a href="mailto:hm6574062@gmail.com" class="btn-outline">
            <span>Contact: hm6574062@gmail.com</span>
          </a>
        </div>

        <!-- Contact Strip -->
        <div class="contact-strip">
          <div class="contact-card">
            <p class="contact-label">Location</p>
            <p class="contact-value">Giza, Egypt</p>
          </div>
          <div class="contact-card">
            <p class="contact-label">Phone</p>
            <p class="contact-value"><a href="tel:+201143125143">+201143125143</a></p>
          </div>
          <div class="contact-card">
            <p class="contact-label">Email</p>
            <p class="contact-value" style="font-size: 0.78rem;"><a href="mailto:hm6574062@gmail.com">hm6574062@gmail.com</a></p>
          </div>
        </div>
      </div>

      <!-- Right Column: Visual Box -->
      <div class="hero-visual">
        <img src="/hero-lab.jpg" alt="Sunlit Food Quality Assurance and Safety Laboratory" width="640" height="360" loading="eager" fetchpriority="high" />
        <div class="visual-meta">
          <p class="meta-title">Verified Food Safety Specialist</p>
          <p class="meta-desc">Ain Shams University (B.Sc. in Agriculture, 2024) • Trained in ISO 22000, HACCP, PRPs, GMP, and GHP • Ready for QA/QC roles in Giza &amp; Greater Cairo.</p>
        </div>
      </div>
    </section>

    <!-- Key Metrics 4-Card Strip -->
    <section class="metrics-grid">
      <div class="metric-card">
        <div class="metric-num">7</div>
        <div class="metric-label">Food Safety Standards</div>
        <p class="metric-sub">ISO 22000:2018, ISO 50001, ISO 14001, HACCP, PRPs, GMP &amp; GHP.</p>
      </div>

      <div class="metric-card">
        <div class="metric-num">2024</div>
        <div class="metric-label">Ain Shams University</div>
        <p class="metric-sub">B.Sc. in Agriculture with Food Quality &amp; Safety Institute certification.</p>
      </div>

      <div class="metric-card">
        <div class="metric-num">100%</div>
        <div class="metric-label">ATS-Compliant CV</div>
        <p class="metric-sub">Standard single-column tabular layout matching corporate ATS parsers.</p>
      </div>

      <div class="metric-card">
        <div class="metric-num">GZ/CAI</div>
        <div class="metric-label">Giza &amp; Greater Cairo</div>
        <p class="metric-sub">Local resident, available immediately for full-time manufacturing QA/QC roles.</p>
      </div>
    </section>

    <!-- Interactive Standards Matrix Island -->
    <section class="vue-panel">
      <VueIsland name="StandardsMatrixIsland" :props="{ initialFilter: 'all' }" />
    </section>

    <!-- Experience & Projects Section Grid -->
    <section class="section-grid">
      <!-- Professional Experience Timeline -->
      <div class="section-card">
        <h2>Professional Experience &amp; Training</h2>

        <div class="timeline-item">
          <p class="timeline-role">Food Quality and Safety Trainee</p>
          <p class="timeline-org">Quality and Food Safety Institute • 2024</p>
          <ul class="timeline-bullets">
            <li>Completed theoretical and practical training in food safety and quality management systems (ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP).</li>
            <li>Applied food safety concepts through practical projects involving system design, hazard analysis, root cause analysis (RCA), and standard operating procedures (SOPs).</li>
          </ul>
        </div>

        <div class="timeline-item">
          <p class="timeline-role">Poultry Production Trainee</p>
          <p class="timeline-org">Al-Sad Poultry Production Farms – Egypt • Practical Training</p>
          <ul class="timeline-bullets">
            <li>Completed practical training in poultry production operations.</li>
            <li>Gained practical exposure to poultry farm management, biosecurity, and sanitary production practices.</li>
          </ul>
        </div>

        <div class="timeline-item">
          <p class="timeline-role">Sales Representative – Chat Sales</p>
          <p class="timeline-org">LANS Academy • 2022 – 2023</p>
          <ul class="timeline-bullets">
            <li>Promoted medical analysis courses and communicated with prospective students.</li>
            <li>Provided information about available courses and supported marketing activities.</li>
          </ul>
        </div>

        <div class="timeline-item">
          <p class="timeline-role">Operations &amp; Customer Support Associate</p>
          <p class="timeline-org">Talabat • 2021 – 2022</p>
          <ul class="timeline-bullets">
            <li>Handled high-volume order tracking, discrepancy resolution, and operational communications in a fast-paced environment.</li>
          </ul>
        </div>
      </div>

      <!-- Academic & Practical Projects -->
      <div class="section-card">
        <h2>Practical Projects &amp; Credentials</h2>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-ink); margin: 0 0 0.25rem 0;">
            Food Safety System Design – Training Project
          </h3>
          <p style="font-size: 0.8rem; font-weight: 600; color: var(--accent-ochre); margin: 0 0 0.75rem 0;">
            Quality and Food Safety Institute • 2024
          </p>
          <ul class="timeline-bullets">
            <li>Participated in hands-on exercises designing end-to-end food safety management workflows.</li>
            <li>Identified critical biological, chemical, and physical hazards across manufacturing stages and established preventive control points (CCPs).</li>
            <li>Practiced simulated nonconformity resolution, CAPA tracking, and food safety audit documentation.</li>
          </ul>
        </div>

        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-ink); margin: 0 0 0.85rem 0;">
          Verified Certifications
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.6rem;">
          <div style="background: var(--bg-paper); border: 1px solid var(--border-stone); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.85rem; font-weight: 600;">
            • ISO 22000:2018 – Food Safety Management Systems (FSMS)
          </div>
          <div style="background: var(--bg-paper); border: 1px solid var(--border-stone); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.85rem; font-weight: 600;">
            • ISO 50001:2018 – Energy Management Systems (EnMS)
          </div>
          <div style="background: var(--bg-paper); border: 1px solid var(--border-stone); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.85rem; font-weight: 600;">
            • ISO 14001 – Environmental Management Systems (EMS)
          </div>
          <div style="background: var(--bg-paper); border: 1px solid var(--border-stone); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.85rem; font-weight: 600;">
            • HACCP, PRPs, GMP &amp; GHP Comprehensive Programs
          </div>
          <div style="background: var(--bg-paper); border: 1px solid var(--border-stone); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.85rem; font-weight: 600;">
            • ICDL – Microsoft Office Applications (Word, Excel, PowerPoint)
          </div>
        </div>
      </div>
    </section>

    <!-- Technical & Computer Skills Grid -->
    <section class="section-card" style="margin-bottom: 2.5rem;">
      <h2>Core Technical Skills, Computer Proficiency &amp; Languages</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.25rem;">
        <div>
          <h3 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-forest); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.85rem 0;">
            Technical QA / QC Competencies
          </h3>
          <div class="skills-badge-grid">
            <span class="skill-badge"><span class="skill-badge-dot"></span>HACCP Principles &amp; Hazard Analysis</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Food Safety Risk Assessment</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>FSMS System Design</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Prerequisite Programs (PRPs)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Good Manufacturing Practices (GMP)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Good Hygiene Practices (GHP)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Root Cause Analysis (RCA)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>CAPA Procedures</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Corrective Actions &amp; Nonconformity</span>
          </div>
        </div>

        <div>
          <h3 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-forest); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.85rem 0;">
            Computer Proficiency
          </h3>
          <div class="skills-badge-grid" style="margin-bottom: 1.5rem;">
            <span class="skill-badge"><span class="skill-badge-dot"></span>ICDL Certified</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Microsoft Word (QA/SOP Documentation)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Microsoft Excel (Inspection Logs &amp; Metrics)</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>Microsoft PowerPoint (Audit Presentations)</span>
          </div>

          <h3 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-forest); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.85rem 0;">
            Languages
          </h3>
          <div class="skills-badge-grid">
            <span class="skill-badge"><span class="skill-badge-dot"></span>Arabic — Native</span>
            <span class="skill-badge"><span class="skill-badge-dot"></span>English — Advanced Professional</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
