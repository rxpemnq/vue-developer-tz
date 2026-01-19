<script setup>
    import FloatingMouse from './FloatingMouse.vue';
</script>
<template>
    <div class="relative bg-[#43454D]">
    <img src="../assets/images/background/skills.png" alt="Bg with code" class="absolute z-1 object-cover w-full h-full top-0 left-0">
     <section id="skills" class="w-416 my-0 mx-auto">
        <div class="z-1 relative">
            <div class="relative z-1 pt-32 pb-16 flex flex-col gap-16">
                <div class="flex justify-center gap-4">
                    <FloatingMouse />
                </div>
                <div class="flex flex-col gap-4">
                    <h1 class="text-white font-family-ubuntu text-[64px] leading-18 tracking-normal text-center capitalize">
                        <span class="text-main">Skills</span><br>
                        <span class="text-white font-family-ibm text-[16px] leading-5 tracking-normal text-center">I am striving to never stop learning and improving</span>
                    </h1>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-22.5 pb-32">
                <div class="flex flex-row justify-center gap-32">
                    <div class="pl-2 bg-[#3178C6] rounded-lg">
                        <div class="flex flex-col justify-center items-center gap-2 rounded-tr-lg rounded-br-lg py-4 px-6 bg-main">
                            <img src="../assets/icons/common/icon-monitor.svg" alt="Monitor icon" class="w-8 h-8">
                            <span class="text-[#292F36] font-family-ibm text-[24px] leading-8 tracking-normal text-center capitalize">Web developement</span>
                            <span class="text-[#43454D] font-family-ibm text-[16px] leading-5 tracking-normal text-center">HTML·CSS·JS·REACT</span>
                        </div>
                    </div>
                    <div class="pl-2 bg-[#3178C6] rounded-lg">
                        <div class="flex flex-col justify-center items-center gap-2 rounded-tr-lg rounded-br-lg py-4 px-6 bg-main">
                            <img src="../assets/icons/common/icon-smartphone.svg" alt="Smartphone icon" class="w-8 h-8">
                            <span class="text-[#292F36] font-family-ibm text-[24px] leading-8 tracking-normal text-center capitalize">App developement</span>
                            <span class="text-[#43454D] font-family-ibm text-[16px] leading-5 tracking-normal text-center">iOS·Android</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center gap-32">
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex flex-row justify-center items-center p-10 rounded-[80px] bg-[#E54F26]">
                            <img src="../assets/icons/common/html5.svg" alt="html icon" class="w-16 h-16">
                        </div>
                        <span class="font-family-ibm text-[32px] leading-10.5 tracking-normal text-left capitalize html-color text-[#E54F26]">HTML</span>
                    </div>
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex flex-row justify-center items-center p-10 rounded-[80px] bg-[#3178C6]">
                            <img src="../assets/icons/common/css3-alt.svg" alt="css icon" class="w-16 h-16">
                        </div>
                        <span class="font-family-ibm text-[32px] leading-10.5 tracking-normal text-left capitalize text-[#3178C6]">CSS</span>
                    </div>
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex flex-row justify-center items-center p-10 rounded-[80px] bg-[#E7A020]">
                            <img src="../assets/icons/common/node-js.svg" alt="js icon" class="w-16 h-16">
                        </div>
                        <span class="font-family-ibm text-[32px] leading-10.5 tracking-normal text-left capitalize text-[#E7A020]">JS</span>
                    </div>
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex flex-row justify-center items-center p-10 rounded-[80px] bg-[#28A9E0]">
                            <img src="../assets/icons/common/react.svg" alt="react icon" class="w-16 h-16">
                        </div>
                        <span class="font-family-ibm text-[32px] leading-10.5 tracking-normal text-left capitalize text-[#28A9E0]">REACT</span>
                    </div>
                </div>
            </div>
        </div>
     </section>
</div>
</template>