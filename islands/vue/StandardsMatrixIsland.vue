<script setup lang="ts">
import { computed, ref } from "vue"

const props = defineProps<{
  initialFilter?: string
}>()

const activeFilter = ref(props.initialFilter ?? "all")

const standards = [
  { code: "ISO 22000:2018", title: "Food Safety Management Systems (FSMS)", category: "iso", desc: "End-to-end food chain hazard control, interactive communication, system management, and PRPs." },
  { code: "ISO 50001:2018", title: "Energy Management Systems (EnMS)", category: "iso", desc: "Systematic energy performance optimization and resource efficiency in food manufacturing plants." },
  { code: "ISO 14001", title: "Environmental Management Systems (EMS)", category: "iso", desc: "Environmental compliance, waste reduction, and sustainable manufacturing operations." },
  { code: "HACCP", title: "Hazard Analysis & Critical Control Points", category: "program", desc: "7 principles of biological, chemical, and physical hazard identification, CCP monitoring, and verification." },
  { code: "PRPs", title: "Prerequisite Programs", category: "program", desc: "Foundational sanitary and operational conditions required across food processing environments." },
  { code: "GMP", title: "Good Manufacturing Practices", category: "program", desc: "Process control, equipment calibration, cross-contamination prevention, and batch documentation." },
  { code: "GHP", title: "Good Hygiene Practices", category: "program", desc: "Personal hygiene, cleaning & sanitization schedules, pest control, and allergen management." }
]

const filtered = computed(() => {
  if (activeFilter.value === "all") return standards
  return standards.filter(item => item.category === activeFilter.value)
})
</script>

<template>
  <div id="standards" class="island-card">
    <div class="island-header">
      <h2>Core Standards &amp; Food Safety Programs</h2>
      <div class="filter-bar">
        <button :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">All (7)</button>
        <button :class="{ active: activeFilter === 'iso' }" @click="activeFilter = 'iso'">ISO Standards (3)</button>
        <button :class="{ active: activeFilter === 'program' }" @click="activeFilter = 'program'">Food Safety Programs (4)</button>
      </div>
    </div>
    <div class="standards-grid">
      <article v-for="std in filtered" :key="std.code" class="standard-item">
        <span class="std-code">{{ std.code }}</span>
        <h3>{{ std.title }}</h3>
        <p>{{ std.desc }}</p>
      </article>
    </div>
  </div>
</template>
