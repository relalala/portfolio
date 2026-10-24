<script setup lang="ts">
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';
import type { Project, Category } from '../type/portfolio';

const props = defineProps<{ projects: Project[] }>();
const emit = defineEmits<{(e: 'add-purr', id: number): void}>();

const categories: Category[] = ['All', 'Full-Stack', 'Embedded / IoT', 'Hardware'];
const activeCategory = ref<Category>('All');

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return props.projects;
  return props.projects.filter(p => p.category === activeCategory.value);
});
</script>

<template>
  <section id="projects" class="container py-section">
    <div class="text-center header">
      <span class="badge badge-pink">Portfolio Showcase 🐱</span>
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-sub">Explore software engineering, IoT, and embedded prototypes.</p>
    </div>

    <!-- Category Tabs -->
    <div class="tab-group">
      <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="['tab-btn', { active: activeCategory === cat }]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Cards Grid -->
    <div class="projects-grid">
      <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @add-purr="emit('add-purr', $event)"
      />
    </div>
  </section>
</template>

<style scoped>
.py-section { padding-top: 4rem; padding-bottom: 4rem; }

.header { margin-bottom: 2rem; }

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.section-sub {
  font-size: 0.875rem;
  color: var(--color-text-subtle);
  margin-top: 0.25rem;
}

.tab-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.tab-btn {
  padding: 0.375rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #E2E8F0;
  background: var(--color-white);
  color: var(--color-text-subtle);
  transition: var(--transition-fast);
}

.tab-btn.active {
  background: var(--color-text-main);
  color: var(--color-white);
  border-color: var(--color-text-main);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>