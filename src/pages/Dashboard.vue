<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useAuth } from '../hooks/useAuth';
import Employee from '../http/employee'
const { signOut } = useAuth()

const { isPending, isError, data: employees, error } = useQuery({
  queryKey: ['todos'],
  queryFn: async () => await new Employee().getList(),
})

</script>
<template>
    <div class="flex">
        <aside class=" py-6 w-[280px] h-screen border-r border-greyscale-300 relative">
            <picture class="px-8 grid justify-center">
                <img src="/svg/logo_black.svg" alt="Inicia sessión  para un mejor desempeños de tus empleados"
                    class="py-[6px] w-[117.75px] h-9">
            </picture>
            <nav class="mt-6 px-8">
                <ul>
                    <li class="py-4 flex gap-x-[10px]">
                        <img src="/svg/employees.svg" alt="Icono menu Empleados" width="20" height="20">
                        <p class="font-manropeBold text-sm leading-[22.4px] tracking-[0.2 px] text-primary-green-300">
                            Empleados</p>
                    </li>
                    <li class="py-4 flex gap-x-[10px]">
                        <img src="/svg/recruitment.svg" alt="Icono menu Reclutadores" width="20" height="20">
                        <p class="font-manropeBold text-sm leading-[22.4px] tracking-[0.2 px]">Reclutamiento</p>
                    </li>
                </ul>
            </nav>
            <div class="absolute bottom-6 w-full grid justify-center">
                <button @click="signOut"
                    class="h-12 w-[216px] border border-greyscale-900 py-[21px] px-6 flex justify-center items-center rounded-[10px]">
                    Salir
                </button>
            </div>
        </aside>
        <div class="w-full bg-greyscale-100">
            <header class="bg-white border-b border-greyscale-300 flex justify-end p-8">
                <div class="flex items-center justify-end gap-x-2">
                    <div class="w-8 h-8 rounded-[32px] bg-[#EB6F25] text-white flex items-center justify-center">
                        <small class="font-manropeBold text-sm leading-[19.6px]">CQ</small>
                    </div>
                    <p class="font-manropeBold text-sm leading-[16-8px]">Christian Quispe</p>
                </div>
            </header>
            <div class="bg-white mx-6 my-8 p-6">
                <div class="flex justify-between">
                    <div>
                        <h2 class="font-manropeBold text-2xl leading-[31.2px]">Empleados</h2>
                        <p class="font-manropeMedium text-sm leading-[22.4px] text-greyscale-600 pt-1">Gestiona tus
                            empleados</p>
                    </div>
                    <div class="flex gap-x-5">
                        <button
                            class="w-[150px] h-[56px] border border-greyscale-900 py-[21px] px-6 flex items-center justify-center gap-x-2 rounded-[10px]">
                            <img src="/svg/file-download.svg" alt="Icono descargar Empleados">
                            <span>Descargar</span>
                        </button>
                        <button
                            class="w-[150px] h-[56px] bg-greyscale-900 py-[21px] px-6 flex items-center justify-center gap-x-2 rounded-[10px] text-white">
                            <img src="/svg/plus.svg" alt="Icono descargar Empleados">
                            <span>Nuevo</span>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-x-4 mt-6">
                    <div class="flex relative w-full">
                        <input type="search" placeholder="Buscar empleado"
                            class="rounded-[10px] border border-greyscale-300 py-4 px-5 w-full">
                        <img src="/svg/search.svg" alt="Icono Buscar empleado" class="absolute right-4 top-5">
                    </div>
                    <button id="dropdown" class="flex justify-between items-center py-4 px-5 w-[315px] h-[54px] border">
                        <span>Nombre de cargo</span>
                        <img src="/svg/chevron-down.svg" alt="Icono Filtro por nombre de Empleado">
                    </button>
                </div>

                <table class="table-fixed mt-6 w-full">
                    <thead class="bg-greyscale-50 p-4 rounded-[10px]">
                        <tr class="grid grid-cols-[repeat(6,minmax(177.33px,1fr))]">
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4">
                                Nombre cargo</th>
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4">
                                Departamento</th>
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4">
                                Oficina</th>
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4">
                                Cuenta</th>
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4">
                                Nombre</th>
                            <th
                                class="h-14 font-manropeBold text-xs leading-[19.2px] tracking-[0.2 px] inline-flex items-center px-4 text-right">
                                Acciones</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <span v-if="isPending">Loading...</span>
                         
                        <span v-else-if="isError">Error: {{ (error as any).message }}</span>
                        <tr v-else-if="employees" v-for="employee in employees" class="grid grid-cols-[repeat(6,minmax(177.33px,1fr))] border-b font-manropeRegular">
                            <td class="px-4 py-[14px]">
                                <p class="font-manropeMedium text-base leading-[19.2px]">{{ employee.nombre }}</p>
                                <small class="text-[10px] leading-4 text-greyscale-500">{{employee.correo }}</small>
                            </td>
                            <td class="px-4 py-[22px] text-xs leading-[19.2px]">{{ employee.cargo }}</td>
                            <td class="px-4 py-[22px] text-xs leading-[19.2px]">{{employee.departamento}}</td>
                            <td class="px-4 py-[22px] text-xs leading-[19.2px]">{{ employee.oficina }}</td>
                            <td class="px-4 py-[22px] text-xs leading-[19.2px]">{{ employee.estadoCuenta }}</td>
                            <td class="grid items-center justify-end p-[16.5px]">
                                <div class="flex gap-x-[10px]">
                                    <button
                                        class="w-[30px] h-[30px] p-[10px] grid place-content-center bg-primary-base rounded-lg">
                                        <img src="/svg/eye.svg" alt="Icono visualizar mas detalle del empleado" width="16"
                                            height="16">
                                    </button>
                                    <button
                                        class="w-[30px] h-[30px] p-[10px] grid place-content-center bg-other-blue rounded-lg">
                                        <img src="/svg/edit.svg" alt="Icono visualizar mas detalle del empleado" width="16"
                                            height="16">
                                    </button>
                                    <button
                                        class="w-[30px] h-[30px] p-[10px] grid place-content-center bg-alerts-error-base rounded-lg">
                                        <img src="/svg/trash.svg" alt="Icono visualizar mas detalle del empleado" width="16"
                                            height="16">
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>