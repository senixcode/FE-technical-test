<script setup lang="ts">
import { useSignIn } from '../hooks/useSignIn';
const { submitSigIn, errorSubmit, email, password, errors } = useSignIn()
</script>
<template>
    <div class="md:grid md:grid-cols-[720px,1fr]">

        <aside class="hidden md:block h-screen bg-greyscale-900">
            <img src="/img/login.png" alt="Inicia sessión  para un mejor desempeños de tus empleados" width="720"
                height="667">
            <div class="grid gap-y-6 bg-greyscale-900 text-white p-[50px] border-t-[5px] border-primary-green-300">
                <img src="/svg/logo_white.svg" alt="Culqi, acepta pagos con tarjetas y te pagamos el mismo día"
                    class="w-[117.75px] h-[36px]">
                <h1 class="font-manropeMedium text-5xl leading-[57.6px] tracking-[-0.5px] w-[620px]">
                    Dale más power⚡a tus empleados hoy 💪
                </h1>
                <p class="font-manropeRegular text-lg leading-[27px]">Te ayudamos a gestionarlos de manera más sencilla</p>
            </div>
        </aside>

        <div class="px-6 pt-6 md:grid place-content-center h-screen relative ">
            <article class="w-full md:w-[480px]">
                <h2 class="text-center font-manropeBold text-lg leading-[31.2px] text-greyscale-900">Inicia sesión</h2>
                <form @submit.prevent="submitSigIn">
                    <div class="grid gap-y-[10px] pt-8">
                        <label class="font-manropeMedium text-sm leading-[22.4px]">Correo electrónico</label>
                        <input type="email" v-bind="email"
                            class="rounded-[10px] px-5 py-4 border focus:outline-none focus:border-alerts-success-base focus:ring-1 focus:ring-alerts-success-base">
                        <span class="font-manropeRegular text-alerts-error-base text-xs">{{ errors.email }}</span>
                    </div>
                    <div class="grid gap-y-[10px] pt-6">
                        <label class="font-manropeMedium text-sm leading-[22.4px]">Contraseña</label>
                        <input type="password" v-bind="password"
                            class="rounded-[10px] px-5 py-4 border focus:outline-none focus:border-alerts-success-base focus:ring-1 focus:ring-alerts-success-base">
                    </div>
                    <small v-if="errorSubmit" class="flex gap-x-1 text-alerts-error-base font-manropeRegular my-8">
                        <img src="/svg/alert-circle.svg" alt="">
                        {{ errorSubmit }}
                    </small>
                    <button type="submit"
                        class="grid place-content-center mt-8 bg-greyscale-900 h-14 w-full text-white py-[21px] px-6 rounded-[10px] font-manropeBold text-base tracking-[0.3 px]">
                        Iniciar sesión
                    </button>
                </form>
                <p class="text-center mt-8 font-manropeMedium text-sm leading-[22.4px] text-greyscale-500">¿Eres nuevo aquí?
                    <strong class="text-primary-base">Crea una cuenta</strong>
                </p>
            </article>

            <p
                class="absolute bottom-6 grid justify-items-center w-full font-manropeMedium text-greyscale-500 text-sm leading-[22.4px]">
                © 2023 Culqi . Todos los derechos reservados
            </p>

        </div>
    </div>
</template>