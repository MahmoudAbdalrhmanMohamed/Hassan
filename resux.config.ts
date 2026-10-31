process.env.RESUX_HALAL_REPORT_SIGNING_SECRET =
  process.env.RESUX_HALAL_REPORT_SIGNING_SECRET || "resux-halal-report-secret-32-chars-minimum-token-abc123"

export default defineResuxConfig({
  deploy: {
    target: "auto"
  },
  app: {
    head: {
      title: "El Hassan Mohamed | Food Safety & Quality Assurance Specialist (ISO 22000, HACCP, GMP)",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Official portfolio & ATS resume of El Hassan Mohamed Abd Alla Abd ElGhani — Agriculture Graduate (Ain Shams University, 2024) & Food Safety / Quality Assurance Specialist trained in ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP in Giza, Egypt."
        },
        { name: "author", content: "El Hassan Mohamed Abd Alla Abd ElGhani" },
        { name: "geo.region", content: "EG-GZ" },
        { name: "geo.placename", content: "Giza, Egypt" },
        { name: "geo.position", content: "30.0131;31.2089" },
        { name: "ICBM", content: "30.0131, 31.2089" },
        { name: "google-site-verification", content: "googlecc11456c182b76e5" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/favicon.svg" },
        { rel: "preload", as: "style", href: "/styles.css" },
        { rel: "stylesheet", href: "/styles.css" },
        { rel: "canonical", href: "https://el-hassan-resux-portfolio.vercel.app/" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      appName: "El Hassan Mohamed | Food Safety & QA Portfolio",
      candidateName: "El Hassan Mohamed Abd Alla Abd ElGhani",
      location: "Giza, Egypt",
      phone: "+201143125143",
      email: "hm6574062@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/alhassan-mohamed-184a8a286/",
      photoUrl: "/el-hassan-portrait.jpg",
      cvPdfUrl: "/El_Hassan_Mohamed_CV.pdf",
      cvDocxUrl: "/El_Hassan_Mohamed_CV.docx",
      image: {
        format: "webp",
        quality: 85
      }
    }
  }
})
