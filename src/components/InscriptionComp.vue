<template>
    <!-- component -->

    <main  class=" absolute mx-auto flex h-screen w-full items-center justify-center bg-transparent text-white z-50 backdrop-blur">
        <form method="POST" class="flex w-[25rem] flex-col space-y-9 bg-gray-800  rounded-lg ">
        
            <div class="bg-gray-800 px-6 py-6 rounded shadow-md text-white w-full space-y-6">
                <div v-on:click="closepopup()" class=" flex justify-end cursor-pointer z-50">
                    <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 18 18">
                        <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                    </svg>
                </div>
                <h1 class="text-center text-3xl  font-medium p-2">Inscription</h1>

                <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
                <input type="text" placeholder="Pseudo"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none px-2" />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
                <input type="password" placeholder="Mot de Passe"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none px-2" />
            </div>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Image de Profil
                </label>
                <input
                    class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file">


                <button type="submit"
                    class="w-full text-center py-3 rounded-lg bg-indigo-600 text-white hover:bg-green-dark focus:outline-none my-1">Inscription</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
                <div class="text-grey-dark mt-6">
                    Tu as déjà un compte?
                    <a v-on:click="showloginpopup()" class="no-underline  text-indigo-500" href="#">
                        Connecte toi
                    </a>.
                </div>
            </div>

        
        </form>
</main>
</template>

<script>

</script>

<style>
    
</style>