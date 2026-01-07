<script setup>
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Skills from './components/Skills.vue';
  import Works from './components/Works.vue';
  import Blogs from './components/Blogs.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <Hero />
    <About />
    <Skills />
    <Works />
    <Blogs />
    <Contact />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
