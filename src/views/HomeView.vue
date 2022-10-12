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
      <img className="md:oobject-scale-down object-cover w-full h-32 lg:h-64" v-bind:src="element.jeu_img"
        alt="" />
    </swiper-slide>
  </swiper>
  <!-- contenue -->
  <div class="     grid md:grid-cols-2  pt-2 ">
    <!-- image -->
    <div v-for="element in jeux" :style="{
    backgroundImage: `url(${element.jeu_img})`,}" v-bind:key="element.id" class=" flex flex-col md:h-96 justify-between  h-60 bg-no-repeat bg-cover border-b-2 border-red-700  
      ">
      <!--boutton-->

      <div class="flex w-full justify-between p-2 ">

        <div class="flex space-x-2 md:h-8 h-5 justify-center  ">
          <a type="button" v-bind:href="element.lien_site"
            class="inline-block md:px-4 px-2 md:py-2 py-1 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Site
            Officiel</a>
        </div>

        <div class="flex space-x-2 md:h-8 h-5 justify-center">
          <button type="button"
            class="inline-block md:px-4 px-2 md:py-2 py-1 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">add</button>
        </div>

      </div>
      <!-- titre description -->
      <div class=" flex flex-col w-full justify-end h px-5 pt-8 md:pb-5 pb-2 bottom-0  bg-gradient-cover">
        <a href="#">
          <h3 class=" btext md:text-3xl text-lg font-bold capitalize text-white md:mb-2">{{element.titre}}</h3>
        </a>
        <p class=" btext text-gray-100 md:text-base text-xs">Publié le {{element.date_publication}}   {{element.version}}</p>
        <!-- tag -->
        <div class="pt-1">
          <div class="text-gray-100">
            <div class="inline-block h-3  mr-2">
              <span v-bind:key="tag" v-for="tag in element.jeu_tags"
                class="  inline-flex items-center px-3 mx-1 rounded text-xs font-medium leading-4  text-white" :style="{
                backgroundColor: `${tag[1]}`}">{{tag[0]}}</span>
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
      majs:[],
    }
  },
  created(){

            ApiService.get("jeus.json").then(this.manageJeu),
            ApiService.get("majs.json").then(this.manageMaj)
        },
        methods:{
            manageJeu(results){
                this.jeux= results.data;
                console.log(this.jeux);
                this.jeux[0].jeu_tags=[["psn","blue"],["xbox","green"]];
                console.log[this.jeux];
                

            },
            manageMaj(results){
                this.majs= results.data;
                console.log(this.majs);
               
                

            },
          }

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