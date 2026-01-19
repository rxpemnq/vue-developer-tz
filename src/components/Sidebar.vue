<script setup>
    import { onMounted, onUnmounted, ref } from 'vue'

    const activeId = ref("home");

    const buttons = ref([
      { icon: 'icon-grid.svg', alt: 'Button 1', sectionId: 'home' },
      { icon: 'Shape.svg', alt: 'Button 2', sectionId: 'about' },
      { icon: 'Shape (1).svg', alt: 'Button 3', sectionId: 'skills'  },
      { icon: 'Shape (2).svg', alt: 'Button 4', sectionId: 'works' },
      { icon: 'Shape (3).svg', alt: 'Button 5', sectionId: 'blogs' },
      { icon: 'Shape (4).svg', alt: 'Button 6', sectionId: 'contact' }
    ])

    let observer = null

    onMounted(() => {
      const sections = document.querySelectorAll("section[id]");
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeId.value = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section) => observer.observe(section));
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });

    const icons = import.meta.glob('@/assets/icons/sidebar/*.svg', { 
      eager: true,
      import: 'default' 
    })

    function getIcon(iconName) {
      return icons[`/src/assets/icons/sidebar/${iconName}`]
    }

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId)

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }

        return element
    }
</script>

<template>
    <aside class="fixed ml-16 mt-16 rounded-[40px] border border-white border-solid bg-[#292F36] z-10 px-3 py-2">
        <div class="flex flex-col justify-center items-center gap-6">
            <button 
                v-for="(button, index) in buttons" 
                :key="index" 
                class="p-2 hover:scale-110 transition-[100,100] active:scale-90 rounded-[40px]"
                :class="activeId === button.sectionId ? 'bg-white' : 'bg-none'"
                @click="scrollToSection(button.sectionId)" 
            >
                <img :src="getIcon(button.icon)" :alt="button.alt" class="w-6 h-6" :class="activeId === button.sectionId ? 'invert' : 'invert-0'">
            </button>
        </div>
    </aside>
</template>