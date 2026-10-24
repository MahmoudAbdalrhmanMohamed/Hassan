process.env.RESUX_HALAL_REPORT_SIGNING_SECRET =
  process.env.RESUX_HALAL_REPORT_SIGNING_SECRET || "resux-halal-report-secret-32-chars-minimum-token-abc123"

export default defineResuxConfig({
  deploy: {
    target: "auto"
  },
  modules: [
    "resux:security",
    "resux:performance"
  ],
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
        { name: "ICBM", content: "30.0131, 31.2089" }
      ],
      link: [
        { rel: "stylesheet", href: "/styles.css" },
        { rel: "canonical", href: "https://elhassan-foodsafety.eg/" }
      ],
      script: [
        { src: "https://cdn.tailwindcss.com/3.4.17" },
        {
          innerHTML: `tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                  display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
                  serif: ['Calibri', 'Carlito', 'Segoe UI', 'sans-serif'],
                  mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace']
                },
                colors: {
                  paper: { 50: '#FAF8F5', 100: '#F3EFEA', 200: '#E6E0D6', 300: '#D5CBBF' },
                  forest: { 50: '#F0F7F4', 100: '#DCECE3', 600: '#2D6A4F', 700: '#1B4332', 800: '#132F23', 900: '#0D2018' },
                  ochre: { 50: '#FFFBEB', 100: '#FEF3C7', 600: '#B45309', 700: '#9A3412', 800: '#7C2D12' },
                  ink: { 900: '#18181B', 700: '#3F3F46', 500: '#57534E', 400: '#78716C' }
                }
              }
            }
          }`
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
      cvPdfUrl: "/El_Hassan_Mohamed_CV.pdf",
      cvDocxUrl: "/El_Hassan_Mohamed_CV.docx"
    }
  }
})
