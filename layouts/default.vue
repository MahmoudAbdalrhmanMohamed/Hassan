<script setup lang="ts">
// Default layout for El Hassan Mohamed Resux Portfolio
</script>

<template>
  <div class="shell">
    <header class="nav" role="banner">
      <div class="nav-container">
        <!-- Brand Group -->
        <a href="/" class="brand-group">
          <ResuxImg src="/el-hassan-portrait.jpg" alt="El Hassan Mohamed" class="brand-avatar" width="40" height="40" sizes="40px" format="webp" quality="85" loading="eager" decoding="async" />
          <div class="brand-info">
            <span class="brand-name">El Hassan Mohamed</span>
            <span class="brand-role">Food Safety &amp; QA Specialist</span>
          </div>
        </a>

        <!-- Desktop Navigation Links (hidden on mobile) -->
        <nav class="nav-links desktop-only" aria-label="Primary Navigation">
          <a href="/#hero">Portfolio Overview</a>
          <a href="/cv">ATS CV Viewer</a>
          <a href="/#standards">ISO / HACCP Matrix</a>
        </nav>

        <!-- Desktop Action Buttons (hidden on mobile) -->
        <div class="nav-actions desktop-only">
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

        <!-- Mobile Quick Action & Responsive Menu Toggle -->
        <div class="mobile-nav-wrapper">
          <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-download-nav-compact" aria-label="Download CV (PDF)" title="Download CV (PDF)">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"/>
            </svg>
            <span>CV</span>
          </a>

          <details id="mobile-nav" class="mobile-nav-details">
            <summary class="mobile-hamburger-btn" aria-label="Toggle navigation menu">
              <!-- Hamburger Icon (visible when closed) -->
              <svg class="icon-hamburger" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="4" y1="18" x2="20" y2="18"/>
              </svg>
              <!-- Close X Icon (visible when open) -->
              <svg class="icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </summary>

            <nav class="mobile-nav-dropdown" aria-label="Mobile Navigation">
              <div class="mobile-dropdown-header">
                <span class="mobile-dropdown-title">Menu Navigation</span>
                <span class="mobile-dropdown-tag">Portfolio</span>
              </div>

              <div class="mobile-nav-links">
                <a href="/#hero" onclick="document.getElementById('mobile-nav')?.removeAttribute('open')">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  <span>Portfolio Overview</span>
                </a>
                <a href="/cv" onclick="document.getElementById('mobile-nav')?.removeAttribute('open')">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>ATS CV Viewer</span>
                </a>
                <a href="/#standards" onclick="document.getElementById('mobile-nav')?.removeAttribute('open')">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span>ISO / HACCP Matrix</span>
                </a>
              </div>

              <div class="mobile-nav-downloads">
                <span class="mobile-downloads-label">Download Verified Resume</span>
                <div class="mobile-download-buttons">
                  <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-mobile-pdf" onclick="document.getElementById('mobile-nav')?.removeAttribute('open')">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"/></svg>
                    <span>PDF CV</span>
                  </a>
                  <a href="/El_Hassan_Mohamed_CV.docx" download="El_Hassan_Mohamed_CV.docx" class="btn-mobile-docx" onclick="document.getElementById('mobile-nav')?.removeAttribute('open')">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                    <span>Word .DOCX</span>
                  </a>
                </div>
              </div>

              <div class="mobile-nav-contact">
                <a href="tel:+201143125143" class="mobile-contact-pill">
                  <span>Call: +201143125143</span>
                </a>
                <a href="mailto:hm6574062@gmail.com" class="mobile-contact-pill">
                  <span>Email: hm6574062@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/alhassan-mohamed-184a8a286/" target="_blank" rel="noopener noreferrer" class="mobile-contact-pill">
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>

    <slot />

    <footer class="footer" role="contentinfo">
      <div style="max-width: 1200px; margin: 0 auto;">
        <p><strong>El Hassan Mohamed Abd Alla Abd ElGhani</strong> • B.Sc. in Agriculture (Ain Shams University, 2024)</p>
        <p>Food Safety &amp; Quality Assurance Specialist (ISO 22000:2018, ISO 50001, ISO 14001, HACCP, PRPs, GMP, GHP) • Giza, Egypt</p>
        <p style="margin-top: 0.75rem; font-size: 0.75rem; color: #78716C;">
          Direct: <a href="tel:+201143125143">+201143125143</a> • Email: <a href="mailto:hm6574062@gmail.com">hm6574062@gmail.com</a> • LinkedIn: <a href="https://www.linkedin.com/in/alhassan-mohamed-184a8a286/" target="_blank" rel="noopener noreferrer">Profile</a> • Powered by <a href="https://github.com/MahmoudAbdalrhmanMohamed/resux" target="_blank" rel="noopener">Resux Framework</a>
        </p>
      </div>
    </footer>
  </div>
</template>
