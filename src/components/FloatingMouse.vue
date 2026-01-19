<script>
    export default {
        name: 'FloatingMouse'
    }
</script>
<template>
    <div class="flex flex-col justify-center items-center gap-4">
        <img src="../assets/icons/common/mouse.svg" alt="Mouse icon" class="w-8 h-11 animate-float">
        <div class="w-0 h-20 border border-dashed border-white"></div>
    </div>
</template>