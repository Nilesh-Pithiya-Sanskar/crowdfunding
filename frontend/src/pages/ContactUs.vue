<template>
    <!-- <div class="bg-green-100 bg-auto w-full h-full bg-local bg-center bg-cover">
        <Navbar />
        <div class=" text-center  sm:p-8 md:p-16 lg:p-32">
            <p class="text-green-600 uppercase text-xs">
                contact
            </p>
            <p class="text-green-600 text-3xl drop-shadow-lg shadow-black-600/50 pb-4">
                Get In Touch
            </p>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit
                    praesentium porro consectetur optio!
                </p>
                <p>

                </p>
            </div>
        </div>
    </div> -->

    <div class="bg-[#ebf8ec] bg-auto w-full h-full bg-local bg-center bg-cover">
        <Navbar />
        <div class="grid justify-items-center">
            <div class="px-4 pb-28 md:pb-32 lg:pb-48 pt-8 md:pt-32 lg:pt-32">
                <p class="text-[#40b751] tracking-widest text-center uppercase font-bold text-xs">
                    contact
                </p>
                <p style="text-shadow:3px 6px 6px #c9c9c9;"
                    class="text-[#40b751] font-sans text-center font-semibold pb-1 text-[28px] md:text-[32px] lg:text-[43px] [text-shadow:3px 6px 6px #c9c9c9]">
                    Get In Touch
                </p>
                <p class="text-gray-600 text-center leading-7 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit
                    praesentium porro consectetur optio!
                </p>
            </div>
        </div>
    </div>

    <!-- Container for demo purpose -->
    <div class="container my-24 px-6 mx-auto">

        <!-- Section: Design Block -->
        <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap">

                <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <form>
                        <div class="grid grid-cols-2">
                            <div class="form-group pr-3 mb-6">
                                <label class="block text-gray-700 text-sm mb-2" for="username">
                                    First name
                                </label>
                                <input v-model="first_name" type="text" class="form-control block
                                  hover:border-[#40b751]
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="exampleInput7">

                            </div>




                            <div class="form-group pl-4 mb-6">
                                <label class="block text-gray-700 text-sm mb-2" for="username">
                                    Last name
                                </label>
                                <input v-model="last_name" type="text" class="form-control block
                                  hover:border-[#40b751]
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="exampleInput7">

                            </div>
                        </div>
                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">
                                Email
                            </label>
                            <input v-model="email" type="email" class="form-control block
                                  hover:border-[#40b751]
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="exampleInput7">
                        </div>
                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">
                                Subject
                            </label>
                            <input v-model="subject" type="text" class="form-control block
                                  hover:border-[#40b751]
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="exampleInput8">
                        </div>
                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">
                                Message
                            </label>
                            <textarea v-model="message" class="
                                  hover:border-[#40b751]
                                  form-control
                                  block
                                  w-full
                                  px-3
                                  py-5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " id="exampleFormControlTextarea13" rows="3"></textarea>
                        </div>

                        <button type="submit" class="

                                px-6
                                py-2.5
                                bg-[#40b751]
                                text-white
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out">Send Message</button>
                    </form>
                </div>



                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 pl-0 md:pl-16 lg:pl-32">
                    <p class="text-base font-bold mb-6">Quick info</p>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left  grid justify-items-center ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/location.png" />
                        </div>
                        <p class="text-black-500 mb-2 pt-2 pl-14">Fake street, 3929, London</p>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left bg-center  grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/phonecall.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">+ 1 291 2909 392</p>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/email1.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">info@mydomain.com</p>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left  grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/worldwide.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">https://mywebsite.com</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->
    <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Login",
    components: { Navbar, Footer },
}
</script>