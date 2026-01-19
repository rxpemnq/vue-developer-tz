<script setup>
const props = defineProps([
  "index",
  "key",
  "title",
  "description",
  "image",
  "currentNews.pubDate",
  "currentNews.link",
]);

// console.log("props", props);

let slicedContent;

if (props.description.length > 100) {
  slicedContent = props.description.slice(0, 100);
}
</script>
<template>
  <div class="flex flex-row gap-16">
    <img
      src="../assets/images/photos/birmingham-museums-trust-TWavMkqC_cc-unsplash 1.png"
      alt="Notebook image"
      class="w-60 h-60"
    />
    <div class="flex flex-col justify-start gap-6">
      <h1>
        <span
          class="text-main font-family-ubuntu text-[32px] leading-9 tracking-normal text-left"
          >{{ title }}</span
        ><br /><br />
        <span
          class="text-white font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left"
          >{{ slicedContent + "..." }}</span
        ><br /><br />
        <router-link
          :to="{ name: 'blog-detail', params: { index: index } }"
          class="inline-block border-b border-solid border-white text-main font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left hover:scale-105 transition-[100,100]"
          >Read More</router-link
        >
        <span
          class="inline-block text-main font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left pl-1"
          >>></span
        >
      </h1>
      <div class="flex flex-row gap-6 items-center text-center">
        <div
          class="flex flex-row justify-start items-start gap-2 py-1 px-2 rounded-2xl bg-[#57585E] text-white font-family-ubuntu text-[14px] leading-4 tracking-normal text-left capitalize"
        >
          <span class="jobname">Web Developer</span>
        </div>
        <div
          class="flex gap-2 text-white font-family-ubuntu text-[14px] leading-4 tracking-normal text-left capitalize"
        >
          <span><span class="font-bold">Name</span> {{}}</span>
          <span><span class="font-bold">Read</span> {{}}</span>
          <span><span class="font-bold">Date</span> {{}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
