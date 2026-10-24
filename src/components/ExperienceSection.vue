<script setup lang="ts">
import { ref } from 'vue';
import { experienceData, certificatesData, eligibilitiesData } from '../data/experience';
import type { Certificate } from '../type/portfolio';

const selectedCert = ref<Certificate | null>(null);
</script>

<template>
  <section id="experience" class="container py-section">
    <div class="text-center header">
      <span class="badge badge-blue">Milestones & Qualifications 🍃</span>
      <h2 class="section-title">Experience, Eligibilities & Certificates</h2>
      <p class="section-sub">Hands-on technical internships, formal qualifications, and verified credentials.</p>
    </div>

    <div class="exp-grid">
      <!-- Left Column: Work Timeline -->
      <div class="timeline-col">
        <h3 class="col-heading"><span>🐾</span> Work & Event Timeline</h3>
        <div class="timeline">
          <div v-for="item in experienceData" :key="item.id" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="card-meta">
                <span class="badge badge-blue">{{ item.type }}</span>
                <span class="period">{{ item.period }}</span>
              </div>
              <h4 class="role">{{ item.role }}</h4>
              <p class="org">{{ item.organization }} • {{ item.location }}</p>
              <ul class="bullet-list">
                <li v-for="(point, idx) in item.description" :key="idx">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Eligibilities & Certificates -->
      <div class="side-col">
        <!-- Section 1: Eligibilities -->
        <div class="sub-block">
          <h3 class="col-heading"><span>🏅</span> Formal Eligibilities</h3>
          <div class="eligibility-list">
            <div v-for="item in eligibilitiesData" :key="item.id" class="eligibility-card">
              <div class="card-meta">
                <span class="badge badge-blue">Verified</span>
                <span class="period">{{ item.date }}</span>
              </div>
              <h4 class="elig-title">{{ item.title }}</h4>
              <p class="elig-issuer">{{ item.issuer }}</p>
              <p class="elig-desc">{{ item.description }}</p>
              <span v-if="item.licenseNo" class="license-tag">Credential ID: {{ item.licenseNo }}</span>
            </div>
          </div>
        </div>

        <!-- Section 2: Certificates with Image Preview -->
        <div class="sub-block">
          <h3 class="col-heading"><span>📜</span> Certificates</h3>
          <div class="certs-grid">
            <div v-for="cert in certificatesData" :key="cert.id" class="cert-card">
              <div class="cert-thumb" @click="selectedCert = cert">
                <img :src="cert.image" :alt="cert.title" @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/E0F2FE/0284C7?text=Certificate+Preview'" />
                <div class="overlay">Click to view 🔍</div>
              </div>
              <h4 class="cert-title">{{ cert.title }}</h4>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <button @click="selectedCert = cert" class="view-btn">View Certificate &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Lightbox for Certificates -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedCert" class="modal-backdrop" @click.self="selectedCert = null">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h3>{{ selectedCert.title }}</h3>
                <p>{{ selectedCert.issuer }} • {{ selectedCert.date }}</p>
              </div>
              <button @click="selectedCert = null" class="close-btn">✕</button>
            </div>
            <div class="modal-body">
              <img :src="selectedCert.image" :alt="selectedCert.title" @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/E0F2FE/0284C7?text=Certificate+Image'" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.py-section { padding-top: 4rem; padding-bottom: 4rem; }
.header { margin-bottom: 2.5rem; }
.section-title { font-size: 1.875rem; font-weight: 700; margin-top: 0.5rem; }
.section-sub { font-size: 0.875rem; color: var(--color-text-subtle); margin-top: 0.25rem; }

.exp-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
}

.col-heading {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sub-block {
  margin-bottom: 2rem;
}

/* Timeline Styles */
.timeline {
  border-left: 2px solid var(--color-blue-border);
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item { position: relative; }

.timeline-dot {
  position: absolute;
  left: -1.95rem;
  top: 0.35rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background: var(--color-white);
  border: 2px solid var(--color-blue-text);
}

.timeline-card {
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  padding: 1.25rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.period { font-family: monospace; font-size: 0.75rem; color: var(--color-text-subtle); }
.role { font-size: 1rem; font-weight: 700; }
.org { font-size: 0.75rem; color: var(--color-blue-text); font-weight: 600; margin-bottom: 0.75rem; }

.bullet-list {
  padding-left: 1rem;
  font-size: 0.75rem;
  color: var(--color-text-subtle);
}

/* Eligibility Styles */
.eligibility-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.eligibility-card {
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  padding: 1.125rem;
}

.elig-title { font-size: 0.9375rem; font-weight: 700; }
.elig-issuer { font-size: 0.75rem; color: var(--color-blue-text); font-weight: 600; margin-bottom: 0.375rem; }
.elig-desc { font-size: 0.75rem; color: var(--color-text-subtle); margin-bottom: 0.5rem; }

.license-tag {
  display: inline-block;
  font-family: monospace;
  font-size: 0.6875rem;
  background: var(--color-blue-light);
  color: var(--color-blue-dark);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
}

/* Certificates Styles */
.certs-grid { display: flex; flex-direction: column; gap: 1rem; }

.cert-card {
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  padding: 1rem;
}

.cert-thumb {
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  height: 120px;
  cursor: pointer;
  margin-bottom: 0.75rem;
  background: var(--color-blue-light);
}

.cert-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cert-thumb .overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 41, 59, 0.4);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0;
  transition: var(--transition-fast);
}

.cert-thumb:hover .overlay { opacity: 1; }

.cert-title { font-size: 0.875rem; font-weight: 700; }
.cert-issuer { font-size: 0.75rem; color: var(--color-text-subtle); margin-bottom: 0.5rem; }

.view-btn {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-blue-text);
}

.modal-header { display: flex; justify-content: space-between; margin-bottom: 1rem; }
.modal-header h3 { font-size: 1.125rem; font-weight: 700; }
.modal-header p { font-size: 0.75rem; color: var(--color-text-subtle); }
.close-btn { width: 30px; height: 30px; border-radius: 50%; background: #F1F5F9; font-weight: bold; }

.modal-body img {
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

@media (max-width: 850px) {
  .exp-grid { grid-template-columns: 1fr; }
}
</style>