
<template>
   <section class="">
      <!-- Cover image -->
      <div class="relative">
         <img v-bind:src="jeu.jeu_img" class="w-full" alt="" />
         <span class="fixed left-0 right-0 top-0 px-6">
            <div class="w-full md:w-8/12 lg:w-4/12 md:mx-2 mx-auto py-4">
               <svg @click="$router.back()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor"
                  class="w-14 h-12  px-2 py-1 text-red-700 z-50 rounded bg-opacity-75   hover:text-violet-600 active:bg-gray-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </div>
         </span>
      </div>
      <!-- Base -->
      <div class="p-6 w-full relative rounded-t-xl bg-white">
         <!-- Button coeur -->
         <button class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class=" w-6 h-6 duration-300 text-red-600 ">
               <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
         </button>
         <!-- Titre -->
         <div class="flex items-center ml-10">
            <span>
               <small v-for="listetag in jeu.listeTags" v-bind:key="listetag.id"
                  class="  inline-flex items-center px-3 mx-3 rounded text-xs font-medium leading-4 text-white" :style="{
                     backgroundColor: `${listetag.tags.couleur}`
                  }">{{ listetag.tags.nom }}</small>
               <strong class="mb-1 w-full flex items-center gap-2 mt-2">
                  <h1>{{ jeu.titre }}</h1>
               </strong>
               <div class="flex items-center">
                  <p class="text-sm text-gray-500 mr-2">La dernière Mise à jour publié le {{
                        jeu.majs[0].date_publication
                  }}</p>
                  <span class="text-xxs gap-1 flex items-center mx-2"> {{ jeu.majs[0].version }}</span>
               </div>
            </span>

         </div>

         <!-- Carrousel -->
         <div class=" mt-5">

            <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :keyboard="{
               enabled: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
               <swiper-slide v-for="element in jeu.majs" v-bind:key="element.id">
                  <div v-on:click="showContenue(element.id)"
                     class="flex flex-col p-2 hover:cursor-pointer items-center border-violet-700  border-2  rounded-lg text-white bg-gray-800">
                     <p class="">{{ element.date_publication }}</p>
                     <span class=""> {{ element.version }}</span>
                  </div>

               </swiper-slide>
            </swiper>

         </div>
         <!-- Détails -->
         <div class="mt-5">
            <p class="font-medium text-sm mb-2">Détails</p>
            <div id="contenue" class=" break-all md:text-xs text-gray-500 mb-2">
               {{ jeu.majs[0].contenue }}
            </div>
         </div>
      </div>
   </section>
</template>

<script >
import ApiService from '@/service/ApiService.js';
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation, Keyboard } from "swiper";

export default {
   name: 'DetailsView',
   components: {
      Swiper,
      SwiperSlide,

   },
   setup() {
      return {
         modules: [FreeMode, Navigation, Keyboard],

      };
   },
   props: {
      id: Number
   },
   data() {
      return {
         jeu: [],
      }
   },
   created() {

      // ApiService.get("jeus.json "+ this.id).then(this.manageJeu)
      ApiService.get("jeus/" + this.id + ".json").then(this.manageJeu);
   },
   methods: {
      manageJeu(results) {
         this.jeu = results.data;
         console.log(this.jeu);


         var majs_order = this.jeu.majs;
         majs_order.sort(function (a, b) {
            var dateA = new Date(a.date_publication).getTime();
            var dateB = new Date(b.date_publication).getTime();

            return dateB - dateA;


         })
         console.log(this.jeu.majs);
         
         for (var i=0; i<majs_order.length; i++){
            var sub =majs_order[i].date_publication.substring(0.7);
            majs_order[i].date_publication = sub;console.log(sub)
         }
         this.jeu.majs = majs_order;
      },
      showContenue(id) {
         document.getElementById('contenue').innerHTML = "";
         for (var i = 0; i < this.jeu.majs.length; i++) {
            if (this.jeu.majs[i].id == id) {
               document.getElementById('contenue').innerHTML = this.jeu.majs[i].contenue
            }
         }
      }
   },

}
</script>
 
<style scoped>

</style>