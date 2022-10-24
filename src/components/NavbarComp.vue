<template>
    <header class="header header-center  w-full shadow-lg shadow-gray-900/60   bg-gray-300 ">
        <!-- component -->
        <nav class=" bg-white w-full flex relative justify-between items-center mx-auto md:px-8 px-2 md:h-16 h-10">
            <!-- logo -->
            <div class="inline-flex ">
                <div class="_o6689fn">
                    <div class="">
                        <img class="object-cover h-14 " src="@/assets/logo_app.png" alt="">
                    </div>
                </div>
            </div>

            <!-- end logo -->

            <!-- search bar -->
            <SearchbarComp></SearchbarComp>
            <!-- end search bar -->

            <!-- login -->

            <div class="flex flex-initial  justify-end items-center  ">
                <a v-on:click="showloginpopup()"
                    class=" lg:text-base text-sm  border-slate-700  border-2  rounded-full md:p-2 p-1 hover:text-white hover:bg-violet-600 active:bg-violet-700  focus:outline-none focus:ring focus:ring-violet-300"
                    href="#">Connexion</a>
            </div>

            <!-- end login -->
        </nav>
    </header>
    <LoginComp v-if="loginpopup"></LoginComp>
</template>

<script>
import SearchbarComp from '@/components/SearchbarComp.vue';
import LoginComp from '@/components/LoginComp.vue';



export default {
    name: 'NavbarComp',
    components: {
        SearchbarComp,
        LoginComp
    },
    data() {
        return {
            loginpopup: false,
        }
    },
    methods: {

        showloginpopup() {
            this.loginpopup = true
        },
    }
}




</script>