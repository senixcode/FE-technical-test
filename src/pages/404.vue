<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LocalStorageUser from '../http/auth/localStorageUser';
import { RoutesNames } from '../router/enum';
const isAuthenticated = new LocalStorageUser().getToken()

</script>
<template>
    <div class="h-screen w-screen grid place-content-center">
        <h2 class="font-manropeBold text-9xl text-greyscale-500">404</h2>
        <RouterLink v-if="isAuthenticated" :to="RoutesNames.Dashboard" class="text-center font-manropeMedium text-lg underline text-greyscale-900"> Regresa al Home</RouterLink>
    </div>
</template>