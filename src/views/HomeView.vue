<template>


  <NavbarComp></NavbarComp>
  <!-- carousel -->
  <swiper :spaceBetween="30" :pagination="{
    clickable: true,
  }" :modules="modules" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" class="mySwiper">
    <swiper-slide v-for="element in jeux" v-bind:key="element.id">
      <img className="object-cover w-full h-32 lg:h-64 mt-1" v-bind:src="element.jeu_img"
        alt="" />
    </swiper-slide>
  </swiper>

  <!-- contenue -->
  <div class="grid md:grid-cols-2 pt-2">
    <!-- image -->
    <div v-on:click="redirect('/details/' + element.id)" v-for="element in jeux" :style="{
      backgroundImage: `url(${element.jeu_img})`,
    }" v-bind:key="element.id" class=" hover:cursor-pointer flex flex-col md:h-96 justify-between  h-60 bg-no-repeat bg-cover border-b-2 border-red-700  
      ">
      <!--boutton-->

      <div class="flex w-full justify-between p-2 ">

        <div class="flex  space-x-2 md:h-8 h-5   ">
          <a type="button" v-bind:href="element.lien_site"
            class=" flex justify-center items-center  md:px-4 px-2 md:py-2 py-1  bg-yellow-600 text-white font-medium text-[10px] md:text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Site
            Officiel</a>
        </div>

        <div class="flex space-x-2 md:h-8 h-6 p-1 justify-center">
          <button
            class="inline-block  md:px-2 px-1  bg-white rounded-full shadow  hover:bg-violet-600 active:bg-green-500 focus:bg-green-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class=" test  w-5 h-4 md:w-5 md:h-5 duration-300 text-red-600 hover:text-white  focus:text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>

      </div>
      <!-- titre description -->
      <div class=" flex flex-col w-full justify-end h px-5 pt-8 md:pb-5 pb-2 bottom-0  bg-gradient-cover">
        <div>
          <h3 class=" btext md:text-2xl text-xl font-bold capitalize text-white md:mb-2">{{ element.titre }}</h3>
        </div>
        <p class=" btext text-gray-100 md:text-base text-xs">Publié le {{ element.majs[0].date_publication }}
          {{ element.majs[0].version }}</p>
        <!-- tag -->
        <div class="pt-1">
          <div class="text-gray-100">
            <div class="inline-block h-3  mr-2">
              <span v-for="listetag in element.listeTags" v-bind:key="listetag.id"
                class="  inline-flex items-center px-3 mx-1 rounded text-xs font-medium leading-4 text-white" :style="{
                  backgroundColor: `${listetag.tags.couleur}`
                }">{{ listetag.tags.nom }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- footer -->
  <FooterComp></FooterComp>

</template>


<script>
// @ is an alias to /src
import ApiService from '@/service/ApiService.js';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";




export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComp,
    Swiper,
    SwiperSlide,

  },
  setup() {
    return {
      modules: [Autoplay, Pagination],

    };
  },
  data() {
    return {
      jeux: [],

    }
  },
  created() {

    ApiService.get("jeus.json").then(this.manageJeu)
  },
  methods: {
    redirect(element){
      this.$router.push(element)
    },

    manageJeu(results) {
      this.jeux = results.data;
      console.log(this.jeux); 
      
      for (var i = 0; i < this.jeux.length; i++) {
        var majs_order=this.jeux[i].majs;
        majs_order.sort(function (a, b) {
          var dateA = new Date(a.date_publication).getTime();
          var dateB = new Date(b.date_publication).getTime();

          return dateB - dateA;
          
          
        })
        this.jeux[i].majs = majs_order;
        console.log(this.jeux[i].majs);
      }
      
    },
  },

}
</script>
<style>
.btext {
  color: white;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>