<script setup lang="ts">
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];
</script>

<template>
  <header class="navbar-wrapper">
    <nav class="navbar">
      <a href="#" class="logo">
        <span class="icon">🐾</span>
        <span>Xyrrelle<span class="dot">.dev</span></span>
      </a>

      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>

      <!-- Download CV Button -->
      <a href="/Xyrrelle Faith Cauilan CV.pdf" download="Xyrrelle_Faith_CV.pdf" class="cv-btn">
        <span>📄 Download CV</span>
      </a>
    </nav>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 1rem;
  z-index: 40;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-blue-border);
  border-radius: var(--radius-pill);
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.logo {
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo .dot { color: var(--color-blue-text); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--color-blue-text);
}

.cv-btn {
  background: var(--color-blue-light);
  color: var(--color-blue-dark);
  border: 1px solid var(--color-blue-border);
  padding: 0.4rem 1.1rem;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: var(--transition-fast);
}

.cv-btn:hover {
  background: var(--color-blue-mid);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .nav-links { display: none; }
}
</style>