<script setup lang="ts">
import stats from '@/assets/dataset_stats.json';
import stats2 from '@/assets/dataset_stats2.json';
import { ref } from 'vue';

// TODO: improve this

const layerStats = ref(stats2);
const datasetStats = ref(stats);

const elementStats = ref(stats.elementOccurrenceFrequency);
const relStats = ref(stats.relationshipOccurrenceFrequency);
const elementStatsPlot = ref({
    labels: elementStats.value.labels,
    datasets: [
        {
            data: elementStats.value.data,
            backgroundColor: elementStats.value.bgColors,
            // borderColor: "black",
            borderWidth: 1
        }
    ]
});
const relStatsPlot = ref({
    labels: relStats.value.labels,
    datasets: [
        {
            data: relStats.value.data,
            backgroundColor: "#edcfe2",
            // borderColor: "black",
            borderWidth: 1
        }
    ]
});
const elementStatsPlotOptions = ref({
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
         x: {
            grid: {
                display: true,
            }
        },
        y: {
             grid: {
                display: false
            }
        }
    }
});
const relStatsPlotOptions = ref({
    plugins: {
        legend: {
            display: false,
        }
    }
});


const chartData2 = ref({
    labels: layerStats.value.labels,
    datasets: [
            {
                data: layerStats.value.data,
                backgroundColor: ['#fffff0', '#ffffb5', '#b5ffff', '#ffe0e0', '#ccccff', '#c9e7b7', '#f5deaa' ]
            }
        ]
});
const languageChartData = ref({
    labels: datasetStats.value.languageStats.labels,
    datasets: [
        {
            data: datasetStats.value.languageStats.data
        }
    ]
})
</script>

<template>
    <h2>Stats</h2>
            
    <div class="grid">
            <div class="col-12 md:col-6 lg:col-3">
                <div class="surface-card shadow-2 p-3 border-round">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">Total Models</span>
                            <div class="text-900 font-medium text-xl">{{ datasetStats.totalModals }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3">
                <div class="surface-card shadow-2 p-3 border-round">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">Total Elements</span>
                            <div class="text-900 font-medium text-xl">{{ datasetStats.totalElements }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3">
                <div class="surface-card shadow-2 p-3 border-round">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">Total Relationships</span>
                            <div class="text-900 font-medium text-xl">{{ datasetStats.totalRelationships }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3">
                <div class="surface-card shadow-2 p-3 border-round">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">Total Views</span>
                            <div class="text-900 font-medium text-xl">{{ datasetStats.totalViews }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 xl:col-6">
                <div class="surface-card shadow-2 p-3 border-round">
                    <span class="text-500 font-medium mb-3">Layer Usage</span>
                    <Chart type="pie" :data="chartData2"/>
                </div>
            </div>
            <div class="col-12 xl:col-6">
                <div class="surface-card shadow-2 p-3 border-round">
                    <span class="text-500 font-medium mb-3">Language Usage</span>
                    <Chart type="pie" :data="languageChartData"/>
                </div>
            </div>
            <div class="col-12">
                <div class="surface-card shadow-2 p-3 border-round">
                    <span class="text-500 font-medium mb-3">Element Type Occurence Frequency</span>
                    <Chart type="bar" :data="elementStatsPlot" :options="elementStatsPlotOptions" style="width: 100%; height: 1200px"/>
                </div>
            </div>
            <div class="col-12">
                <div class="surface-card shadow-2 p-3 border-round">
                    <span class="text-500 font-medium mb-3">Relationship Type Occurence Frequency</span>
                    <Chart type="bar" :data="relStatsPlot" :options="relStatsPlotOptions"/>
                </div>
            </div>
        </div>
</template>

