<script setup>
import { useRoute } from "vue-router";
import { useNews } from "@/components/hooks/useNews";
import { computed } from "vue";

const route = useRoute();

const { news, loading, error } = useNews("https://3dnews.ru/news/rss");

console.log("news", news);
console.log("loading", loading.value);
console.log("error", error.value);

const index = Number(route.params.index);

const displayedNews = computed(() => {
  if (news.value) {
    return news.value[index];
  }
  return [];
});
</script>
<template>
  <div class="bg-[#43454D]">
    <section class="w-216 my-0 mx-auto">
      <div class="px-4 py-12 flex flex-col gap-16">
        <div class="flex flex-col gap-12 text-white font-family-ubuntu">
          <div class="flex flex-row gap-6 text-start items-start text-[16px]">
            <div class="flex flex-row gap-2 items-center justify-center">
              <img
                src="../assets/icons/common/man-icon.png"
                alt=""
                class="w-5 h-5 invert"
              />
              <div class="">
                {{ displayedNews }}
              </div>
            </div>
            <div class="flex flex-row gap-2 items-center justify-center">
              <img
                src="../assets/icons/common/clock-icon.png"
                alt=""
                class="w-4.25 h-4.25 invert"
              />
              <div class="">{{}}</div>
            </div>
            <div class="flex flex-row gap-2 items-center justify-center">
              <img
                src="../assets/icons/common/calendar-icon.png"
                alt=""
                class="w-4.5 h-4.5 invert"
              />
              <div class="">{{}}</div>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <div class="justify-center text-center text-6xl text-main mb-2">
              {{}}
            </div>
            <img
              src="../assets/images/photos/photo-code-monitor.jpeg"
              alt=""
              class="rounded-[64px] shadow-2xl"
            />
          </div>
        </div>
        <div
          class="flex flex-col gap-2 text-white font-family-ubuntu text-[16px]"
        >
          <div>{{}}</div>
          <div class="">{{}}</div>
        </div>
      </div>
    </section>
  </div>
</template>
