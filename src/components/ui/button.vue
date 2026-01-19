<script setup>
const props = defineProps(["icon", "label", "href"]);

const openLink = () => {
  if (props.href) {
    window.open(props.href, "_blank", "noopener,noreferrer");
  }
};
</script>
<template>
  <button
    @click="openLink"
    class="flex flex-row justify-start items-start gap-2 hover:scale-110 transition-[100,100]"
  >
    <img v-if="icon" :src="icon" alt="icon" />
    <slot name="label">{{ label }}</slot>
  </button>
</template>
