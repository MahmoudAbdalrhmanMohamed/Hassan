import { defineEventHandler } from "h3"

export default defineEventHandler(() => {
  return {
    candidate: {
      name: "El Hassan Mohamed Abd Alla Abd ElGhani",
      title: "Food Safety, Quality Assurance (QA) & Quality Control (QC) Specialist",
      location: "Giza, Egypt",
      phone: "+201143125143",
      email: "hm6574062@gmail.com",
      linkedin: "https://www.linkedin.com/in/alhassan-mohamed-184a8a286/",
      photo: "/el-hassan-portrait.jpg",
      degree: "Bachelor's Degree in Agriculture (Bachelor of Agriculture)",
      university: "Ain Shams University (ASU)",
      graduationYear: 2024,
      summary: "Agriculture graduate specializing in Food Safety and Quality Assurance (QA/QC), equipped with practical expertise in ISO standards (22000:2018, 50001:2018, 14001), HACCP, GMP, and GHP guidelines. Proficient in prerequisite programs (PRPs), biological and chemical risk assessments, standard operating procedures (SOPs), and audit compliance. Seeking an entry-level Quality Assurance, Quality Control, or Food Safety role in food manufacturing."
    },
    standards: [
      { code: "ISO 22000:2018", name: "Food Safety Management Systems", category: "International Standard" },
      { code: "ISO 50001:2018", name: "Energy Management Systems", category: "International Standard" },
      { code: "ISO 14001", name: "Environmental Management Systems", category: "International Standard" },
      { code: "HACCP", name: "Hazard Analysis and Critical Control Points", category: "Food Safety Program" },
      { code: "PRPs", name: "Prerequisite Programs", category: "Food Safety Program" },
      { code: "GMP", name: "Good Manufacturing Practices", category: "Food Safety Program" },
      { code: "GHP", name: "Good Hygiene Practices", category: "Food Safety Program" }
    ],
    education: {
      degree: "Bachelor's Degree in Agriculture (Bachelor of Agriculture)",
      institution: "Ain Shams University (ASU)",
      year: "2024",
      location: "Cairo, Egypt"
    },
    experience: [
      {
        role: "Food Quality and Safety Trainee (Food Quality and Safety Training Program)",
        organization: "Quality and Food Safety Institute",
        period: "2024",
        highlights: [
          "Mastered compliance frameworks and auditing principles across ISO 22000:2018, ISO 50001:2018, ISO 14001, PRPs, and Good Manufacturing Practices (GMP/GHP).",
          "Evaluated manufacturing workflows through simulated plant scenarios, assessing critical contamination risks and establishing preventive controls to satisfy regulatory food hygiene standards."
        ]
      },
      {
        role: "Poultry Production Trainee",
        organization: "Al-Sad Poultry Production Farms – Egypt",
        period: "Practical Training",
        highlights: [
          "Supported daily production workflows, flock monitoring, and housing management in an active commercial poultry facility.",
          "Implemented strict farm biosecurity protocols, sanitation routines, and disease prevention measures to ensure flock health and biosafety compliance."
        ]
      },
      {
        role: "Sales Representative – Chat Sales",
        organization: "LANS Academy",
        period: "2022 – 2023",
        highlights: [
          "Promoted medical analysis courses and communicated with prospective students.",
          "Provided information about available courses and supported course marketing activities."
        ]
      },
      {
        role: "Operations & Customer Support Associate",
        organization: "Talabat",
        period: "2021 – 2022",
        highlights: [
          "Handled order tracking and live customer inquiries in a high-volume delivery environment, resolving order discrepancies and delivery exceptions under tight time constraints."
        ]
      }
    ],
    projects: [
      {
        title: "Food Safety System Design – Training Project",
        bullets: [
          "Engineered a comprehensive Food Safety Plan model for food processing lines, developing operational flowcharts, PRPs, and hazard evaluation matrices.",
          "Identified Critical Control Points (CCPs) across biological, chemical, and physical parameters, establishing strict critical limits and continuous monitoring mechanisms.",
          "Formulated root-cause investigation workflows and Corrective and Preventive Action (CAPA) protocols to resolve simulated manufacturing nonconformities."
        ]
      }
    ],
    certifications: [
      "ISO 22000:2018 – Food Safety Management Systems (FSMS)",
      "ISO 50001:2018 – Energy Management Systems (EnMS)",
      "ISO 14001 – Environmental Management Systems (EMS)",
      "HACCP – Hazard Analysis and Critical Control Points",
      "PRPs – Prerequisite Programs",
      "GMP – Good Manufacturing Practices",
      "GHP – Good Hygiene Practices",
      "Food Quality and Safety Training Program – Quality and Food Safety Institute",
      "ICDL – Microsoft Office Applications"
    ],
    technicalSkills: [
      "HACCP Principles and Hazard Analysis",
      "Food Safety Risk Assessment",
      "Food Safety Management System Design",
      "Prerequisite Programs (PRPs)",
      "Good Manufacturing Practices (GMP)",
      "Good Hygiene Practices (GHP)",
      "Root Cause Analysis (RCA) & CAPA Procedures",
      "Food Safety Procedures and Documentation",
      "Corrective Actions and Nonconformity Handling"
    ],
    computerSkills: [
      "ICDL – Microsoft Office Applications",
      "Proficient in Microsoft Word, Excel, and PowerPoint"
    ],
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Advanced" }
    ]
  }
})
