import { defineEventHandler } from "h3"

export default defineEventHandler(() => {
  return {
    candidate: {
      name: "El Hassan Mohamed Abd Alla Abd ElGhani",
      title: "Food Safety, Quality Assurance (QA) & Quality Control (QC) Specialist",
      location: "Giza, Egypt",
      phone: "+201143125143",
      email: "hm6574062@gmail.com",
      degree: "Bachelor's Degree in Agriculture (Bachelor of Agriculture)",
      university: "Ain Shams University (ASU)",
      graduationYear: 2024,
      summary: "Agriculture graduate with professional training in Food Safety and Quality Management Systems. Completed theoretical and practical training in ISO standards, HACCP, PRPs, GMP, and GHP, including system design, hazard analysis, problem-solving, and food safety procedures. Seeking an entry-level opportunity in Quality Assurance, Quality Control, or Food Safety within the food manufacturing industry."
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
          "Completed theoretical and practical training in food safety and quality management systems (ISO 22000:2018, ISO 50001:2018, ISO 14001, HACCP, PRPs, GMP, and GHP).",
          "Applied food safety concepts through practical projects involving system design, hazard analysis, problem-solving, and food safety procedures."
        ]
      },
      {
        role: "Poultry Production Trainee",
        organization: "Al-Sad Poultry Production Farms – Egypt",
        period: "Practical Training",
        highlights: [
          "Completed practical training in poultry production operations.",
          "Gained practical exposure to poultry farm management, biosecurity, and production practices."
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
          "Developed communication, time management, and problem-solving skills in a fast-paced work environment."
        ]
      }
    ],
    projects: [
      {
        title: "Food Safety System Design – Training Project",
        bullets: [
          "Participated in practical exercises involving food safety system design.",
          "Practiced identifying potential food safety hazards and determining appropriate control measures.",
          "Worked on simulated food safety scenarios and problem-solving procedures for food manufacturing operations."
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
      "Food Safety Problem-Solving",
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
