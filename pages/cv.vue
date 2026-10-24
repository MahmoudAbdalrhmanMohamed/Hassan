<script setup lang="ts">
definePageMeta({
  layout: "default"
})

useSeoMeta({
  title: "ATS CV | El Hassan Mohamed — Food Safety & QA/QC Specialist",
  description: "Exact ATS-compliant CV of El Hassan Mohamed Abd Alla Abd ElGhani. Downloadable as PDF and editable Word DOCX.",
  themeColor: "#1B4332"
})
</script>

<template>
  <main class="page">
    <!-- Top Action Bar -->
    <div style="background: #FFFFFF; border: 1px solid var(--border-stone); border-radius: 1.25rem; padding: 1.5rem 2rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 2rem; box-shadow: 0 2px 10px rgba(24, 24, 27, 0.03);" class="no-print">
      <div>
        <span class="eyebrow" style="margin-bottom: 0.35rem;">ATS-Compliant Document Replica</span>
        <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--text-ink); margin: 0;">Exact Bordered Calibri CV Preview</h1>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.25rem 0 0 0;">Matches the single-column bordered table format. Optimized for applicant tracking systems.</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
        <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-primary" style="padding: 0.65rem 1.15rem; font-size: 0.85rem;">
          Download PDF CV
        </a>
        <a href="/El_Hassan_Mohamed_CV.docx" download="El_Hassan_Mohamed_CV.docx" class="btn-secondary" style="padding: 0.65rem 1.15rem; font-size: 0.85rem;">
          Download Editable DOCX
        </a>
        <button type="button" onclick="window.print()" class="btn-outline" style="padding: 0.65rem 1.15rem; font-size: 0.85rem; cursor: pointer;">
          Print CV
        </button>
      </div>
    </div>

    <!-- White Paper Sheet Replica -->
    <div class="cv-paper-container">
      <table class="cv-paper-table">
        <tbody>
          <!-- 1. Contact Information -->
          <tr>
            <td>
              <div style="font-size: 1.35rem; font-weight: 700; color: #111111;">El Hassan Mohamed Abd Alla Abd ElGhani</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: #111111; margin-top: 2px;">Giza, Egypt &nbsp;+201143125143</div>
              <div style="margin-top: 2px;">
                <a href="mailto:hm6574062@gmail.com" style="font-size: 0.95rem; color: #1B4332; text-decoration: underline;">hm6574062@gmail.com</a>
              </div>
            </td>
          </tr>

          <!-- 2. Summary -->
          <tr>
            <td>
              <div class="cv-heading">Summary</div>
              <p style="font-size: 0.9rem; line-height: 1.6; margin: 0; color: #222222;">
                Agriculture graduate with professional training in Food Safety and Quality Management Systems. Completed theoretical and practical training in ISO standards (ISO 22000:2018, ISO 50001:2018, ISO 14001), HACCP, PRPs, GMP, and GHP, with hands-on practice in system design, hazard analysis, root cause investigation (RCA), and corrective action procedures (CAPA). Seeking an entry-level opportunity in Quality Assurance, Quality Control, or Food Safety within the food manufacturing industry.
              </p>
            </td>
          </tr>

          <!-- 3. Education -->
          <tr>
            <td>
              <div class="cv-heading">Education</div>
              <div style="font-size: 0.9rem; line-height: 1.6; padding-left: 0.5rem; color: #222222;">
                <p style="margin: 0 0 4px 0;"><strong>Degree:</strong> Bachelor's Degree in Agriculture (Bachelor of Agriculture)</p>
                <p style="margin: 0 0 4px 0;"><strong>University:</strong> Ain Shams University (ASU) – Egypt</p>
                <p style="margin: 0;"><strong>Graduation Year:</strong> 2024</p>
              </div>
            </td>
          </tr>

          <!-- 4. Work Experience -->
          <tr>
            <td>
              <div class="cv-heading">Work Experience</div>
              <div style="font-size: 0.9rem; line-height: 1.6; padding-left: 0.5rem; color: #222222;">
                <div style="margin-bottom: 1rem;">
                  <p style="margin: 0 0 2px 0;"><strong>Job Title:</strong> Food Quality and Safety Trainee (Food Quality and Safety Training Program)</p>
                  <p style="margin: 0 0 4px 0;"><strong>Organization:</strong> Quality and Food Safety Institute</p>
                  <p style="margin: 0 0 2px 0;"><strong>Responsibilities &amp; Achievements:</strong></p>
                  <ul style="margin: 0; padding-left: 1.5rem;">
                    <li>Completed theoretical and practical training in food safety and quality management systems (ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP).</li>
                    <li>Applied food safety concepts through practical projects involving system design, hazard analysis, root cause analysis (RCA), and standard operating procedures (SOPs).</li>
                  </ul>
                </div>

                <div style="margin-bottom: 1rem;">
                  <p style="margin: 0 0 2px 0;"><strong>Job Title:</strong> Poultry Production Trainee</p>
                  <p style="margin: 0 0 4px 0;"><strong>Company:</strong> Al-Sad Poultry Production Farms – Egypt</p>
                  <p style="margin: 0 0 2px 0;"><strong>Responsibilities &amp; Achievements:</strong></p>
                  <ul style="margin: 0; padding-left: 1.5rem;">
                    <li>Completed practical training in poultry production operations.</li>
                    <li>Gained practical exposure to poultry farm management, biosecurity, and production practices.</li>
                  </ul>
                </div>

                <div style="margin-bottom: 1rem;">
                  <p style="margin: 0 0 2px 0;"><strong>Job Title:</strong> Sales Representative – Chat Sales</p>
                  <p style="margin: 0 0 2px 0;"><strong>Company:</strong> LANS Academy</p>
                  <p style="margin: 0 0 4px 0;"><strong>Duration:</strong> 2022 – 2023</p>
                  <p style="margin: 0 0 2px 0;"><strong>Responsibilities &amp; Achievements:</strong></p>
                  <ul style="margin: 0; padding-left: 1.5rem;">
                    <li>Promoted medical analysis courses and communicated with prospective students.</li>
                    <li>Provided information about available courses and supported course marketing activities.</li>
                  </ul>
                </div>

                <div>
                  <p style="margin: 0 0 2px 0;"><strong>Company:</strong> Talabat</p>
                  <p style="margin: 0 0 4px 0;"><strong>Duration:</strong> 2021 – 2022</p>
                  <ul style="margin: 0; padding-left: 1.5rem;">
                    <li>Handled order tracking and customer inquiries in a high-volume delivery environment, resolving order discrepancies and delivery exceptions under tight time constraints.</li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>

          <!-- 5. Academic & Practical Projects -->
          <tr>
            <td>
              <div class="cv-heading">Academic &amp; Practical Projects</div>
              <div style="font-size: 0.9rem; line-height: 1.6; padding-left: 0.5rem; color: #222222;">
                <p style="margin: 0 0 4px 0;"><strong>Project:</strong> Food Safety System Design – Training Project</p>
                <ul style="margin: 0; padding-left: 1.5rem;">
                  <li>Participated in practical exercises involving food safety system design.</li>
                  <li>Practiced identifying potential food safety hazards and determining appropriate control measures.</li>
                  <li>Worked on simulated food safety scenarios, nonconformity tracking, and corrective action protocols (CAPA) for food manufacturing operations.</li>
                </ul>
              </div>
            </td>
          </tr>

          <!-- 6. Certifications -->
          <tr>
            <td>
              <div class="cv-heading">Certifications</div>
              <ul style="margin: 0; padding-left: 1.75rem; font-size: 0.9rem; line-height: 1.65; color: #222222;">
                <li>ISO 22000:2018 – Food Safety Management Systems (FSMS)</li>
                <li>ISO 50001:2018 – Energy Management Systems (EnMS)</li>
                <li>ISO 14001 – Environmental Management Systems (EMS)</li>
                <li>HACCP (Hazard Analysis and Critical Control Points)</li>
                <li>PRPs (Prerequisite Programs)</li>
                <li>GMP (Good Manufacturing Practices)</li>
                <li>GHP (Good Hygiene Practices)</li>
                <li>Food Quality and Safety Training Program – Quality and Food Safety Institute</li>
                <li>ICDL – Microsoft Office Applications</li>
              </ul>
            </td>
          </tr>

          <!-- 7. Technical Skills & Computer Skills -->
          <tr>
            <td>
              <div class="cv-heading">Technical Skills</div>
              <ul style="margin: 0 0 1rem 0; padding-left: 1.75rem; font-size: 0.9rem; line-height: 1.65; color: #222222;">
                <li>HACCP Principles and Hazard Analysis</li>
                <li>Food Safety Risk Assessment</li>
                <li>Food Safety Management System Design</li>
                <li>Prerequisite Programs (PRPs)</li>
                <li>Good Manufacturing Practices (GMP)</li>
                <li>Good Hygiene Practices (GHP)</li>
                <li>Root Cause Analysis (RCA) &amp; CAPA Procedures</li>
                <li>Food Safety Procedures and Documentation</li>
                <li>Corrective Actions and Nonconformity Handling</li>
              </ul>

              <div class="cv-heading">Computer Skills</div>
              <ul style="margin: 0 0 1rem 0; padding-left: 1.75rem; font-size: 0.9rem; line-height: 1.65; color: #222222;">
                <li>ICDL – Microsoft Office Applications</li>
                <li>Proficient in Microsoft Word, Excel, and PowerPoint</li>
              </ul>

              <div class="cv-heading">Languages</div>
              <ul style="margin: 0; padding-left: 1.75rem; font-size: 0.9rem; line-height: 1.65; color: #222222;">
                <li>Arabic – Native</li>
                <li>English – Advanced</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
