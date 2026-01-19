<script setup>
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
</script>
<template>
    <button class="py-4 px-8 flex justify-center items-center rounded-4xl bg-main hover:scale-105 transition-[100,100] active:scale-90" :class="scrollToTop">
        <router-link :to="{ name: 'Blogs' }" @click="scrollToTop" class="font-family-ubuntu text-[20px] leading-6 tracking-normal text-left capitalize text-[#292F36]">View More</router-link>
    </button>
</template>