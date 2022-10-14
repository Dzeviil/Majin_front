<template >

    <!-- page -->
    <main  class=" absolute mx-auto flex min-h-full w-full items-center justify-center bg-transparent text-white z-50 backdrop-blur">
        <!-- component -->
        <form method="POST" class="flex w-[25rem] flex-col space-y-9 bg-gray-800 p-4 rounded-lg ">
            <div @click="router.push({ name: 'home' })"  class=" flex justify-end cursor-pointer z-50">
                <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 18 18">
                    <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                    </path>
                </svg>
            </div>
            <div class="text-center text-3xl font-medium p-2">Connection
            </div>

            <div
                class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
                <input type="text" placeholder="Pseudo"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none px-2" />
            </div>

            <div
                class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
                <input type="password" placeholder="Mot de Passe"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none px-2" />
            </div>

            <button class="transform rounded-lg bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                Se Connecter
            </button>

            <a href="#" class="transform text-center  text-gray-500 duration-300 hover:text-gray-300">MOT
                DE PASSE OUBLIÉ?</a>

            <p class="text-center text-lg">
                Pas de compte?
                <a @click="router.push({ name: 'inscription' })"  href="#" class="font-medium text-indigo-500 underline-offset-4 hover:underline mx-2">Créer un
                    compte</a>
            </p>
        </form>
    </main>
    <InscriptionComp v-if="inscriptionpopup"></InscriptionComp>

</template>

<script>

</script>

<style>
    
</style>