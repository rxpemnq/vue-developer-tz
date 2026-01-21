<script setup>
import Blog from "./Blog.vue";
import { useRoute } from "vue-router";
import FloatingMouse from "./FloatingMouse.vue";
import viewMoreBtn from "./view-more-btn.vue";
import { ref, computed, onMounted } from "vue";
import { useNews } from "./hooks/useNews";

const route = useRoute();

const checkRoute = computed(() => {
  return route.path === "/blogs";
});

const { news, loading, error } = useNews("https://3dnews.ru/news/rss");

const displayedNews = computed(() => {
  if (!news.value || news.value.length === 0) {
    return [];
  }

  return checkRoute.value ? news.value : news.value.slice(0, 1);
});
</script>
<template>
  <div class="bg-[#43454D]">
    <section id="blogs" class="w-416 my-0 mx-auto">
      <div class="z-1 relative p-32 flex flex-col gap-16">
        <div class="z-1 flex flex-col gap-16">
          <FloatingMouse v-if="!checkRoute" />
          <div class="flex flex-col gap-4">
            <h1
              class="text-white font-family-ubuntu text-[64px] leading-18 tracking-normal text-center capitalize"
            >
              <span class="text-main">Blogs</span><br />
              <span
                class="text-white font-family-ibm text-[16px] leading-5 tracking-normal text-center"
                >My thoughts on technology and business, welcome to
                subscribe</span
              >
            </h1>
          </div>
        </div>
        <div class="pl-76.5 pr-76.5 flex flex-col gap-10">
          <div class="border-t border-white"></div>
          <div
            v-for="(blog, index) in displayedNews"
            :key="index"
            class="border-solid border-white border-b pt-6 pb-16"
          >
            <Blog
              :index="index"
              :title="blog.title"
              :description="blog.description"
              :image="blog.enclosure?.link"
              :date="blog.pubDate"
              :link="blog.link"
            />
          </div>
          <div class="flex flex-row justify-center gap-8">
            <viewMoreBtn v-if="!checkRoute" />
            <button
              class="py-4 px-8 flex justify-center items-center rounded-b-4xl box-border border-2 border-solid border-main rounded-4xl bg-[#292F36] hover:scale-105 transition-[100,100] active:scale-90"
            >
              <a
                href="#"
                class="font-family-ubuntu text-[20px] leading-6 tracking-normal text-left capitalize text-white"
                >Subscribe</a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
