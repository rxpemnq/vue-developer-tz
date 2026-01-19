<script setup>
import FloatingMouse from './FloatingMouse.vue';
</script>
<template>
    <div class="bg-[#292F36]">
        <section id="contact" class="w-416 my-0 mx-auto">
                <div class="z-1 relative p-32 flex flex-col gap-16">
                    <div class="z-1 flex flex-col gap-16">
                        <FloatingMouse />
                        <div class="flex flex-col gap-4">
                            <h1 class="text-white font-family-ubuntu text-[64px] leading-18 tracking-normal text-center capitalize">
                                <span class="text-main">Contact</span><br>
                                <span class="text-white font-family-ibm text-[16px] leading-5 tracking-normal text-center">I’m currently available for freelance work</span>
                            </h1>
                        </div>
                    </div>
                    <div class="flex flex-col text-center gap-16">
                        <div class="flex justify-center">
                            <div class="inline-flex justify-center py-4 px-10 box-border border-2 border-solid border-main rounded-[32px_0px_32px_0px] max-w-fit">
                            <span class="text-main font-family-ubuntu text-[32px] leading-10.5 tracking-normal text-center capitalize">Send Me A Message</span>
                        </div>
                        </div>
                        <div class="flex justify-between flex-row gap-32">
                            <div class="w-159.5 flex flex-col gap-6 border-b-2 border-solid border-main">
                                <span class="text-main font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left">Your name*</span>
                                <input placeholder="Enter your name" class="text-white font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left border-none rounded-none bg-transparent outline-none"/>
                            </div>
                            <div class="w-159.5 flex flex-col gap-6 border-b-2 border-solid border-main">
                                <span class="text-main font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left">Your email*</span>
                                <input placeholder="Enter your email" class="text-white font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left border-none rounded-none bg-transparent outline-none"/>
                            </div>
                        </div>
                        <div class="w-159.5 flex flex-col gap-6 border-b-2 border-solid border-main wider">
                            <span class="text-main font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left">Your message*</span>
                            <input placeholder="Enter your message" class="text-white font-family-ubuntu text-[16px] leading-4.5 tracking-normal text-left border-none rounded-none bg-transparent outline-none"/>
                        </div>
                        <div class="flex justify-center">
                            <button class="py-4 px-8 flex justify-center items-center rounded-b-4xl box-border border-2 border-solid border-main rounded-4xl hover:scale-105 transition-[100,100] active:scale-90 bg-main gap-4">
                            <span class="font-family-ubuntu text-[20px] leading-6 tracking-normal text-left capitalize text-[#292F36]">Send Message</span>
                            <img src="../assets/icons/common/icon-send.svg" alt="Send icon" class="w-6 h-6">
                        </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>