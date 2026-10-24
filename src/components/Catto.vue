<script setup lang="ts">
import { ref } from 'vue';

const dialogues = [
  'Welcome to Xyrrelle\'s portfolio! 🌊',
  'HydroCast uses ESP32 & LoRa telemetry! 📡',
  'Click the CV button in the navbar to download my resume! 📄',
  'Check out the certificates in the experience section! 📜'
];

const currentMessage = ref(dialogues[0]);

const cycleMessage = () => {
  const nextIndex = (dialogues.indexOf(currentMessage.value) + 1) % dialogues.length;
  currentMessage.value = dialogues[nextIndex];
};
</script>

<template>
  <div class="mascot-widget">
    <div class="speech-bubble">{{ currentMessage }}</div>
    <button @click="cycleMessage" class="mascot-avatar" title="Click Mochi for a tip!">
      🐱
    </button>
  </div>
</template>

<style scoped>
.mascot-widget {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.speech-bubble {
  background: var(--color-white);
  border: 1px solid var(--color-blue-border);
  color: var(--color-text-main);
  font-size: 0.75rem;
  padding: 0.5rem 0.875rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  max-width: 200px;
  text-align: right;
  animation: bounce 2s infinite ease-in-out;
}

.mascot-avatar {
  width: 3.5rem;
  height: 3.5rem;
  background: var(--color-blue-light);
  border: 2px solid var(--color-blue-border);
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  transition: transform 0.15s ease;
}

.mascot-avatar:active {
  transform: scale(0.9);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
</style>