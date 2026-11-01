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
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "bingbot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { property: "og:type", content: "profile" },
        { property: "og:site_name", content: "El Hassan Mohamed Portfolio" },
        { property: "og:title", content: "El Hassan Mohamed | Food Safety & Quality Assurance Specialist" },
        { property: "og:description", content: "Official portfolio & ATS resume of El Hassan Mohamed Abd Alla Abd ElGhani — Agriculture Graduate (Ain Shams University, 2024) & Food Safety / Quality Assurance Specialist (ISO 22000, HACCP, GMP) in Giza, Egypt." },
        { property: "og:image", content: "https://el-hassan-resux-portfolio.vercel.app/el-hassan-portrait.jpg" },
        { property: "og:url", content: "https://el-hassan-resux-portfolio.vercel.app/" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "El Hassan Mohamed | Food Safety & QA Specialist" },
        { name: "twitter:description", content: "Food Safety & QA Specialist trained in ISO 22000, HACCP, GMP. Agriculture graduate from Ain Shams University." },
        { name: "twitter:image", content: "https://el-hassan-resux-portfolio.vercel.app/el-hassan-portrait.jpg" },
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
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://el-hassan-resux-portfolio.vercel.app/#person",
                "name": "El Hassan Mohamed Abd Alla Abd ElGhani",
                "alternateName": [
                  "El Hassan Mohamed",
                  "Alhassan Mohamed",
                  "El Hassan Mohamed Abd ElGhani",
                  "الحسن محمد عبد اللاه عبد الغني"
                ],
                "jobTitle": "Food Safety & Quality Assurance Specialist",
                "description": "Agriculture Graduate (Ain Shams University, 2024) and Food Safety / Quality Assurance Specialist trained in ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP in Giza, Egypt.",
                "image": "https://el-hassan-resux-portfolio.vercel.app/el-hassan-portrait.jpg",
                "url": "https://el-hassan-resux-portfolio.vercel.app/",
                "sameAs": [
                  "https://www.linkedin.com/in/alhassan-mohamed-184a8a286/"
                ],
                "email": "mailto:hm6574062@gmail.com",
                "telephone": "+201143125143",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Giza",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Ain Shams University",
                  "department": "Faculty of Agriculture"
                },
                "knowsAbout": [
                  "Food Safety Management Systems (FSMS)",
                  "ISO 22000:2018",
                  "ISO 50001:2018",
                  "ISO 14001:2015",
                  "HACCP (Hazard Analysis Critical Control Point)",
                  "Good Manufacturing Practices (GMP)",
                  "Good Hygiene Practices (GHP)",
                  "Prerequisite Programs (PRPs)",
                  "Quality Assurance (QA)",
                  "Quality Control (QC)",
                  "Root Cause Analysis (RCA)",
                  "Corrective and Preventive Actions (CAPA)",
                  "Internal Auditing"
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Bachelor of Agricultural Sciences",
                    "credentialCategory": "degree",
                    "recognizedBy": {
                      "@type": "CollegeOrUniversity",
                      "name": "Ain Shams University"
                    }
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "ISO 22000:2018 Food Safety Management System Internal Auditor",
                    "credentialCategory": "certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "HACCP & PRPs Implementation & Verification",
                    "credentialCategory": "certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "ISO 50001:2018 Energy Management System",
                    "credentialCategory": "certification"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://el-hassan-resux-portfolio.vercel.app/#website",
                "url": "https://el-hassan-resux-portfolio.vercel.app/",
                "name": "El Hassan Mohamed | Food Safety & Quality Assurance Portfolio",
                "description": "Official ATS Resume and Professional Portfolio of El Hassan Mohamed, Food Safety & QA Specialist.",
                "publisher": {
                  "@id": "https://el-hassan-resux-portfolio.vercel.app/#person"
                },
                "inLanguage": ["en", "ar"]
              },
              {
                "@type": "ProfilePage",
                "@id": "https://el-hassan-resux-portfolio.vercel.app/#profilepage",
                "url": "https://el-hassan-resux-portfolio.vercel.app/",
                "name": "El Hassan Mohamed — Food Safety & QA/QC Specialist Profile",
                "isPartOf": {
                  "@id": "https://el-hassan-resux-portfolio.vercel.app/#website"
                },
                "about": {
                  "@id": "https://el-hassan-resux-portfolio.vercel.app/#person"
                },
                "mainEntity": {
                  "@id": "https://el-hassan-resux-portfolio.vercel.app/#person"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "@id": "https://el-hassan-resux-portfolio.vercel.app/#portrait",
                  "url": "https://el-hassan-resux-portfolio.vercel.app/el-hassan-portrait.jpg",
                  "contentUrl": "https://el-hassan-resux-portfolio.vercel.app/el-hassan-portrait.jpg",
                  "caption": "El Hassan Mohamed Abd Alla Abd ElGhani — Food Safety & QA Specialist"
                }
              }
            ]
          })
        }
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
