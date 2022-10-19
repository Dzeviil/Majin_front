
<template>
	<section class="">
      <!-- Cover image -->
      <div class="relative">
         <img src="https://images.alphacoders.com/124/1245759.jpg" class="w-full" alt="" />
         <span class="fixed left-0 right-0 top-0 px-6">
            <div class="w-full md:w-8/12 lg:w-4/12 md:mx-2 mx-auto py-4">
               <svg @click="router.push({ name: 'home' })" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-12  px-2 py-1 text-green-700 z-50 rounded bg-opacity-75  hover:text-violet-600 active:bg-gray-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </div>
         </span>
      </div>
      <!-- Base -->
      <div class="p-6 w-full relative rounded-t-xl bg-white">
         <!-- Button coeur -->
         <button class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6 duration-300 text-red-600 ">
               <path  stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
         </button>
         <!-- Titre -->
         <div class="flex items-center ml-10">
            <span>
               <small class="font-light text-xxxs">tags (psn) (xbox)</small>
               <strong class="mb-1 w-full flex items-center gap-2">
                  <h1>The Callisto Protocol</h1>
               </strong>
               <div class="flex items-center" >
                  <p class="text-sm text-gray-400 mr-1">Publié le 2/12/2022</p>
                  <span class="text-xxs gap-1 flex items-center mx-1"> V1.01</span>
               </div>
            </span>

         </div>
         
         <!-- Carrousel -->
         <div class="mt-5 flex gap-3">
            <template>
               <div>
                  <img class="rounded mb-1" src="" />
                  <p class="text-xxs text-center">jeu</p>
               </div>
            </template>
         </div>
         <!-- Détails -->
         <div class="mt-5">
            <p class="font-medium text-sm">Détails</p>
            <p class="text-xs text-gray-500">
               Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor
            </p>
         </div>
      </div>
	</section>
</template>

<script setup>
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
</script>
 
<style scoped>

</style>