<script setup lang="ts">
import type { Project } from '../type/portfolio';

defineProps<{ project: Project }>();
const emit = defineEmits<{(e: 'add-purr', id: number): void}>();
</script>

<template>
  <article class="project-card">
    <div class="card-header">
      <div class="meta">
        <span class="badge badge-blue">{{ project.category }}</span>
        <span class="project-id">#0{{ project.id }}</span>
      </div>
      <h3 class="title">{{ project.title }}</h3>
      <p class="description">{{ project.description }}</p>
    </div>

    <div class="card-footer">
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div class="actions">
        <button @click="emit('add-purr', project.id)" class="purr-btn">
          <span>🐾 Purr</span>
          <strong>({{ project.purrs }})</strong>
        </button>

        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="source-link">
          Source &rarr;
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition-fast);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px -5px var(--color-shadow);
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-id {
  font-family: monospace;
  font-size: 0.75rem;
  color: var(--color-text-subtle);
}

.title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.8125rem;
  color: var(--color-text-subtle);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--color-bg);
  border: 1px solid #E2E8F0;
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--color-text-subtle);
}

.actions {
  padding-top: 0.75rem;
  border-top: 1px solid #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.purr-btn {
  border: 1px solid var(--color-blue-border);
  color: var(--color-blue-dark);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  gap: 0.375rem;
  transition: var(--transition-fast);
}

.purr-btn:hover {
  background: var(--color-blue-light);
}

.source-link {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-subtle);
}

.source-link:hover {
  color: var(--color-blue-text);
}
</style>