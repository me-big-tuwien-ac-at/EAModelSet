<script setup lang="ts">
import { ref } from "vue";
import { PrimeIcons } from 'primevue/api';

const menuItems = ref([
    {
        label: 'Home',
        icon: PrimeIcons.HOME,
        to: '/'
    },
    {
        label: 'Search',
        icon: PrimeIcons.SEARCH,
        to: '/search'
    },
    {
        label: 'Statistics',
        icon: PrimeIcons.CHART_BAR,
        to: '/stats'
    }
]);
const redirectToRepo = () => {
    // '_blank' parameter opens link in new tab
    window.open('https://github.com/me-big-tuwien-ac-at/EAModelSet', '_blank')
};
</script>

<template>
    <Menubar :model="menuItems">
        <template #end>
            <Button text class="p-menubar p-menuitem" icon="pi pi-github" severity="secondary" @click="redirectToRepo" />
        </template>
    </Menubar>
    <router-view />
</template>