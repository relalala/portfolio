<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/NavBar.vue';
import ProjectsSection from './components/ProjectSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import CatMascot from './components/Catto.vue';
import { projectsData } from './data/projects';

const projects = ref(projectsData);
const toastMessage = ref<string | null>(null);

const triggerToast = (msg: string) => {
  toastMessage.value = msg;
  setTimeout(() => { toastMessage.value = null; }, 3000);
};

const handleAddPurr = (projectId: number) => {
  const target = projects.value.find(p => p.id === projectId);
  if (target) {
    target.purrs++;
    triggerToast(`You sent a purr to ${target.title}! 🐾`);
  }
};

const copyToClipboard = (text: string, label: string) => {
  navigator.clipboard.writeText(text);
  triggerToast(`Copied ${label} to clipboard! 📋`);
};
</script>

<template>
  <div class="app-shell">
    <Navbar />

    <main>
      <!-- Hero Section -->
      <section id="about" class="container hero text-center">
        <div class="avatar-frame">
          <img src="/images/catto.jpg" alt="Avatar" class="avatar-img" />
        </div>
        <h1 class="hero-title">Pawsing by? Glad you made it to my corner of the web! 🐾</h1>
        <p class="hero-sub">
          Computer Engineering student & full-time cat whisperer, meow meow, pspspspspsps.
        </p>

        <!-- Integrated Contact Information Section -->
        <div class="contact-card">
          <h3 class="contact-card-title">📫 Let's Connect!</h3>
          <div class="contact-grid">
            <div class="contact-item" @click="copyToClipboard('cxyrrelle770@gmail.com', 'Email')">
              <span class="icon">✉️</span>
              <div class="details">
                <span class="label">Email</span>
                <span class="value">cxyrrelle770@gmail.com</span>
              </div>
            </div>

            <div class="contact-item">
              <span class="icon">📍</span>
              <div class="details">
                <span class="label">Location</span>
                <span class="value">Tuguegarao City, Cagayan</span>
              </div>
            </div>

            <a href="https://github.com/relalala" target="_blank" class="contact-item link-item">
              <span class="icon">💻</span>
              <div class="details">
                <span class="label">GitHub</span>
                <span class="value">github.com/relalala</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/xyrrelle-faith-cauilan-794580445/" target="_blank" class="contact-item link-item">
              <span class="icon">💼</span>
              <div class="details">
                <span class="label">LinkedIn</span>
                <span class="value">linkedin.com/in/xyrrelle</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <ProjectsSection :projects="projects" @add-purr="handleAddPurr" />

      <!-- Experience & Certificates Section -->
      <ExperienceSection />
    </main>

    <CatMascot />

    <!-- Notification Toast -->
    <Transition name="fade">
      <div v-if="toastMessage" class="toast">
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  position: relative;
}

.hero {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.avatar-frame {
  width: 6.5rem;
  height: 6.5rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: var(--color-blue-light);
  border: 2px solid var(--color-blue-border);
  overflow: hidden; /* Clips the image inside the circle */
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Prevents stretching and fills the circle neatly */
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-sub {
  font-size: 0.9375rem;
  color: var(--color-text-subtle);
  max-width: 28rem;
  margin: 0 auto 2rem;
}

/* --- Contact Card Styles --- */
.contact-card {
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  max-width: 620px;
  margin: 0 auto;
  box-shadow: 0 4px 12px -2px var(--color-shadow);
  text-align: left;
}

.contact-card-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-main);
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.875rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-bg);
  border: 1px solid var(--color-blue-border);
  border-radius: var(--radius-sm);
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  transition: var(--transition-fast);
}

.contact-item:hover {
  background: var(--color-blue-light);
  transform: translateY(-2px);
}

.link-item {
  text-decoration: none;
  color: inherit;
}

.contact-item .icon {
  font-size: 1.25rem;
}

.contact-item .details {
  display: flex;
  flex-direction: column;
}

.contact-item .label {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--color-blue-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-item .value {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-main);
}

.toast {
  position: fixed;
  top: 5rem;
  right: 1.5rem;
  z-index: 50;
  background: var(--color-text-main);
  color: var(--color-white);
  font-size: 0.75rem;
  padding: 0.625rem 1rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
</style>