<template>
  <div class="shell">
    <header class="nav" role="banner">
      <div class="brand-group">
        <ResuxLink to="/" class="brand-logo">
          <span class="badge-dot"></span>
          El Hassan Mohamed
        </ResuxLink>
        <span class="framework-pill">Resux SSR • Zero-Hydration</span>
      </div>
      <nav aria-label="Primary Navigation">
        <ResuxLink to="/">Portfolio</ResuxLink>
        <ResuxLink to="/cv">Interactive CV</ResuxLink>
        <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-download-nav">
          Download CV (PDF)
        </a>
      </nav>
    </header>
    <slot />
    <footer class="footer" role="contentinfo">
      <p>© 2026 El Hassan Mohamed Abd Alla Abd ElGhani • Giza, Egypt (+201143125143) • Built with <a href="https://github.com/MahmoudAbdalrhmanMohamed/resux" target="_blank" rel="noopener">Resux</a></p>
    </footer>
  </div>
</template>
