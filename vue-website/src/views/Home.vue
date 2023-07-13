<script setup lang="ts">
import { ref } from 'vue';
// is there a better way?
import datasetJson from '@/assets/dataset.json';

const dataset = ref(datasetJson);

const bytesToMb = (bytes: number) => {
    // display bytes in MB
    return parseFloat(
        (bytes / 1024 / 1024).toString()
    ).toFixed(2);
};

const downloadLabel = ref(
    `Download .${dataset.value.distribution.mediaType} (${bytesToMb(dataset.value.distribution.byteSize)} MB)`
);

const redirectToDownload = () => {
    // redirects to download link in GitHub repo (ZIP release)
    window.location.href = `${dataset.value.distribution.downloadUrl}`;
};
</script>

<template>
    <h1>{{ dataset.title }}</h1>
    <Divider />
    <div class="surface-card shadow-2 p-3 border-round mb-4">
        <p class="text-lg font-medium">
            <span class="font-bold">EA ModelSet</span> is a dataset currently featuring 
            <span class="font-semibold"> {{ dataset.modelCount }} EA models.</span>
        </p>
    </div>
    <div class="surface-card shadow-2 p-3 border-round">
        <h3> Download {{ dataset.distribution.title  }} </h3>
        <Button class="mt-2" icon="pi pi-download" :label="downloadLabel" size="large" @click="redirectToDownload()" />
        <p class="mt-5 text-base font-base text-color-secondary">
            <span class="font-semibold"> Version: {{ dataset.version }} </span>
            (last updated: {{ dataset.lastUpdated }})
        </p>
    </div>
</template>