<template>
<header class="header header-center  w-full  bg-gray-300 ">
    <!-- component -->
    <nav class=" bg-white w-full flex relative justify-between items-center mx-auto md:px-8 px-2 md:h-16 h-10">
        <!-- logo -->
        <div class="inline-flex ">
            <a class="_o6689fn" href="/Details">
                <div class="">
                    <img class="object-cover h-14 " src="@/assets/logo_app.png" alt="">
                </div>
            </a>
        </div>

        <!-- end logo -->

        <!-- search bar -->
        <SearchbarComp></SearchbarComp>
        <!-- end search bar -->

        <!-- login -->
        
            <div class="flex flex-initial  justify-end items-center  ">

                <a v-on:click="showloginpopup()"  class=" lg:text-base text-sm border border-slate-400 border-double rounded-full md:p-2 p-1 hover:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                    href="#">Connexion</a>

                <div class="mx-2">/</div>

                <a v-on:click="showinscriptionpopup()" class=" lg:text-base text-sm  border-slate-700  border-2  rounded-full md:p-2 p-1 hover:text-white hover:bg-violet-600 active:bg-violet-700  focus:outline-none focus:ring focus:ring-violet-300"
                    href="#">Inscription</a>

            </div>
       
        <!-- end login -->
    </nav>
</header>
<InscriptionComp v-if="inscriptionpopup"></InscriptionComp>
<LoginComp v-if="loginpopup"></LoginComp>
</template>

<script>
import SearchbarComp from '@/components/SearchbarComp.vue';
import InscriptionComp from '@/components/InscriptionComp.vue';
import LoginComp from '@/components/LoginComp.vue';



export default {
    name: 'NavbarComp',
    components: {
        SearchbarComp,
        InscriptionComp,
        LoginComp
    },
    data(){
        return{
            active: false,
            inscriptionpopup:false,
            loginpopup:false,
            
        }
    },
    methods:{
        closepopup(){
            this.active=true
            this.loginpopup=false
            this.inscriptionpopup=false
            console.log(this.active)
        },
        showloginpopup(){
            this.active=true
            this.loginpopup=true
            this.inscriptionpopup=false
            console.log(this.active)
        },
        showinscriptionpopup(){
            this.active=true
            this.loginpopup=false
            this.inscriptionpopup=true
            console.log(this.active)
        }


    }

}

      
    

</script>