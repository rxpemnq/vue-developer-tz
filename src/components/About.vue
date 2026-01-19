<script setup>
    import FloatingMouse from './FloatingMouse.vue';
</script>
<template>
    <div class="bg-[#292F36] relative">
        <img src="../assets/images/background/About me (2).png" alt="Background lines" class="absolute z-0 object-cover w-full h-full top-0 left-0">
            <section id="about" class="w-416 my-0 mx-auto">
                <div class="relative z-1 p-32 flex flex-col gap-32">
                    <div class="flex justify-center gap-4">
                        <FloatingMouse />
                    </div>
                    <div class="flex justify-between py-0 pr-16 pl-32 gap-32">
                        <div class="flex flex-col gap-16">
                            <div class="py-4 px-10 box-border border-4 border-solid border-main rounded-tl-[40px] rounded-br-[40px] bg-[#292F36] inline-block min-w-37.5 text-center">
                                <span class="text-white font-family-ubuntu text-[64px] leading-18 tracking-normal text-left capitalize">About Me</span>
                            </div>
                            <div>
                                <span class="w-8.5 h-4.5 text-main font-family-ibm text-[14px] leading-4.5 tracking-normal text-left lowercase">&lt;p&gt;</span><br>
                                <h1 class="py-6 px-10 font-family-ibm text-[14px] leading-4.5 tracking-normal text-left text-white">
                                    <span class="text-main text-[32px]">Hello!</span><br><br>
                                    My name is Sinan and I specialize in web developement that utilizes <span class="text-main">HTML</span>, <span class="text-main">CSS</span>, <span class="text-main">JS</span>, and <span class="text-main">REACT</span> etc.<br><br>
                                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.<br><br>
                                    When I'm not coding, I am <span class="text-main">writing blogs</span>, reading, or picking up some new hands-on art project like <span class="text-main">photography</span>.<br><br>
                                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                                </h1>
                                <span class="w-8.5 h-4.5 text-main font-family-ibm text-[14px] leading-4.5 tracking-normal text-left lowercase">&lt;/p&gt;</span>
                            </div>
                        </div>
                        <img src="../assets/images/photos/notebook.jpg" alt="Notebook image" class="rounded-2xl">
                    </div>
                </div>
            </section>
    </div>
</template>