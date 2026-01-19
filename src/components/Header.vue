<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/button.vue";

const route = useRoute();

const buttons = ref([
  { label: "Home", route: "/", to: "/" },
  { label: "Blogs", route: "/blogs", to: { name: "Blogs" } },
]);

const socialMedia = [
  {
    id: 1,
    label: "Instagram",
    icon: "src/assets/icons/social/icon-instagram.svg",
    href: "https://github.com/rxpemnq",
  },
  {
    id: 2,
    label: "Discord",
    icon: "src/assets/icons/social/discord.svg",
    href: "https://github.com/rxpemnq",
  },
  {
    id: 3,
    label: "Github",
    icon: "src/assets/icons/social/github.svg",
    href: "https://github.com/rxpemnq",
  },
];
</script>
<template>
  <header>
    <div class="bg-[#43454D] w-full">
      <div class="relative py-0 px-32">
        <div
          class="relative flex flex-row justify-between items-center py-16 px-0 border-b border-white"
        >
          <div class="flex flex-row justify-center w-74.25 h-10.5 gap-2">
            <span
              class="w-19.25 h-10.5 text-main font-family-ibm text-3xl leading-10.5 tracking-normal text-left capitalize"
              >&lt;C/&gt;</span
            >
            <span
              class="w-53 h-10.5 text-white font-family-ibm text-3xl leading-10.5 tracking-normal capitalize"
              >SinanTokmak</span
            >
          </div>
          <div class="flex flex-row justify-start items-center gap-16">
            <div class="flex flex-row justify-start items-center gap-8">
              <router-link
                v-for="(button, index) in buttons"
                :key="index"
                :to="button.to"
                class="w-18 h-8 font-family-ibm text-2xl leading-8 tracking-normal text-left capitalize hover:scale-110 active:scale-95 transition-[100,100]"
                :class="
                  route.path === button.route ? ' text-main' : ' text-white'
                "
              >
                {{ button.label }}
              </router-link>
            </div>
            <div class="flex flex-row justify-start items-center gap-16">
              <div class="flex flex-row justify-start">
                <input
                  placeholder="Поиск"
                  class="w-51 h-8 py-1.5 pr-9.5 pl-4 rounded-3xl border-none outline-none bg-white"
                />
                <img
                  src="../assets/icons/common/icon-search.svg"
                  alt="Search icon"
                  class="absolute my-1.5 mr-4 ml-42 w-5 h-5 bg-contain bg-no-repeat"
                />
              </div>
              <div
                v-for="(media, index) in socialMedia"
                :key="index"
                class="flex flex-row gap-8 text-white font-family-ibm text-[16px] leading-5 tracking-normal text-left capitalize"
              >
                <Button
                  :icon="media.icon"
                  :label="media.label"
                  :href="media.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
