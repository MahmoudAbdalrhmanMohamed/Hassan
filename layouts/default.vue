<script setup lang="ts">
// Default layout for El Hassan Mohamed Resux Portfolio
</script>

<template>
  <div class="shell">
    <header class="nav" role="banner">
      <div class="nav-container">
        <a href="/" class="brand-group">
          <div class="brand-monogram">EH</div>
          <div class="brand-info">
            <span class="brand-name">El Hassan Mohamed</span>
            <span class="brand-role">Food Safety &amp; QA/QC Specialist</span>
          </div>
        </a>

        <nav class="nav-links" aria-label="Primary Navigation">
          <a href="/">Portfolio Overview</a>
          <a href="/cv">ATS CV Viewer</a>
          <a href="/#standards">ISO / HACCP Matrix</a>
        </nav>

        <div class="nav-actions">
          <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-download-nav">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"/>
            </svg>
            <span>Download CV (PDF)</span>
          </a>
          <a href="/El_Hassan_Mohamed_CV.docx" download="El_Hassan_Mohamed_CV.docx" class="btn-docx-nav" title="Download Word (.DOCX) CV">
            <span>.DOCX</span>
          </a>
        </div>
      </div>
    </header>

    <slot />

    <footer class="footer" role="contentinfo">
      <div style="max-width: 1200px; margin: 0 auto;">
        <p><strong>El Hassan Mohamed Abd Alla Abd ElGhani</strong> • B.Sc. in Agriculture (Ain Shams University, 2024)</p>
        <p>Food Safety &amp; Quality Assurance Specialist (ISO 22000:2018, ISO 50001, ISO 14001, HACCP, PRPs, GMP, GHP) • Giza, Egypt</p>
        <p style="margin-top: 0.75rem; font-size: 0.75rem; color: #78716C;">
          Direct: <a href="tel:+201143125143">+201143125143</a> • Email: <a href="mailto:hm6574062@gmail.com">hm6574062@gmail.com</a> • Powered by <a href="https://github.com/MahmoudAbdalrhmanMohamed/resux" target="_blank" rel="noopener">Resux Framework</a>
        </p>
      </div>
    </footer>
  </div>
</template>
