<script setup lang="ts">
definePageMeta({
  layout: "default"
})

const config = useRuntimeConfig()
const appName = String(config.public.appName ?? "El Hassan Mohamed | Food Safety & QA Portfolio")

type PortfolioPayload = {
  candidate: {
    name: string
    title: string
    location: string
    phone: string
    email: string
    degree: string
    university: string
    graduationYear: number
    summary: string
  }
  standards: Array<{ code: string; name: string; category: string; focus: string }>
  experience: Array<{ role: string; org: string; period: string; highlights: string[] }>
  projects: Array<{ title: string; subtitle: string; bullets: string[] }>
  certifications: string[]
  technicalSkills: string[]
  computerSkills: string[]
  languages: Array<{ name: string; level: string }>
}

const { data, pending, error } = await useAsyncData("portfolio-data", ({ signal }) => {
  return $fetch<PortfolioPayload>("/api/portfolio", { signal })
})

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
  themeColor: "#059669"
})
</script>

<template>
  <main class="page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Available for QA / QC & Food Safety Roles • Giza & Cairo, Egypt</p>
        <h1>El Hassan Mohamed Abd Alla Abd ElGhani</h1>
        <p class="lede">
          Agriculture Graduate (Ain Shams University, 2024) &amp; Food Safety / Quality Management Systems Specialist trained in
          <strong>ISO 22000:2018</strong>, <strong>ISO 50001:2018</strong>, <strong>ISO 14001</strong>, <strong>HACCP</strong>, <strong>PRPs</strong>, <strong>GMP</strong>, and <strong>GHP</strong>.
        </p>
        <div class="actions">
          <a href="/El_Hassan_Mohamed_CV.pdf" download="El_Hassan_Mohamed_CV.pdf" class="btn-primary">
            Download CV (PDF)
          </a>
          <a href="/El_Hassan_Mohamed_CV.docx" download="El_Hassan_Mohamed_CV.docx" class="btn-secondary">
            Download Editable CV (DOCX)
          </a>
          <a href="mailto:hm6574062@gmail.com" class="btn-outline">
            Contact: hm6574062@gmail.com
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/hero-lab.jpg" alt="Food Safety and Quality Assurance Laboratory" width="640" height="360" loading="eager" fetchpriority="high" />
      </div>
    </section>

    <section class="vue-panel">
      <VueIsland name="StandardsMatrixIsland" :props="{ initialFilter: 'all' }" />
    </section>
  </main>
</template>
