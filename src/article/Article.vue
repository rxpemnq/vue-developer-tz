<script setup>
    import { useRoute } from 'vue-router';
    import { blogsData } from '../../data/data';
    import { computed } from 'vue';

    const route = useRoute()

    const blogData = computed(() => {
        return blogsData.find(a => a.id === Number(route.params.id))
    })
</script>
<template>
    <div class="bg-[#43454D]">
        <section class="w-216 my-0 mx-auto">
            <div v-if="blogData" class="px-4 py-12 flex flex-col gap-16">
                <div class="flex flex-col gap-12 text-white font-family-ubuntu ">
                    <div class="flex flex-row gap-6 text-start items-start text-[16px]">
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <img src="../assets/icons/common/man-icon.png" alt="" class="w-5 h-5 invert">
                            <div class="">{{ blogData.authorname }}</div>
                        </div>
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <img src="../assets/icons/common/clock-icon.png" alt="" class="w-4.25 h-4.25 invert">
                            <div class="">{{ blogData.readTime }}</div>
                        </div>
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <img src="../assets/icons/common/calendar-icon.png" alt="" class="w-4.5 h-4.5 invert">
                            <div class="">{{ blogData.dateCreate }}</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <div class="justify-center text-center text-6xl text-main mb-2">{{ blogData.blogTitle }}</div>
                        <img src="../assets/images/photos/photo-code-monitor.jpeg" alt="" class="rounded-[64px] shadow-2xl">
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-white font-family-ubuntu text-[16px]">
                    <div>{{ blogData.blogContent }}</div>
                    <div class="">{{ blogData.blogConclusion }}</div>
                </div>
            </div>
        </section>
    </div>
</template>