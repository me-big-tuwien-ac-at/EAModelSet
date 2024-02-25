<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { saveAs } from "file-saver";
import ISO6391 from "iso-639-1";
import axios from 'redaxios';

const route = useRoute();
const model = ref();

const BASE_URL = 'https://raw.githubusercontent.com/plglaser/eamodelset-diagrams/main/diagrams/';
const diagramUrls = ref<string[]>([]);

onMounted(() => {
  // get data from model.json within model directory (by ID), located in public/
  const id = route.params.id as string;
  axios.get(`../processed-models/${id}/model.json`).then((res) => {
    model.value = res.data;
    console.log(res.data);
    for (const view of model.value.views) {
      console.log(view.id)
      const imgUrl = `${BASE_URL}/${id}/${view.id}.png`
      axios.get(imgUrl)
        .then(() => diagramUrls.value.push(imgUrl))
        .catch((err) => {
          console.log(`Could not fetch diagram for view ${view.id}: ${err}`)
        })
    }
  });
});

console.log(diagramUrls.value)

const getFormatSeverity = (format: string) => {
  switch (format) {
    case "JSON":
      return "success";
    case "ARCHIMATE":
    case "XML":
      return "info";
    case "CSV":
      return "primary";
  }
};

const getSeverity = (tag: string) => {
  switch (tag) {
    case "DUPLICATE":
      return "danger";
    case "WARNING":
      return "warning";
  }
};

const getLanguageName = (language: string) => {
  // convert two-letter language code to name, e.g., en -> English, fr - French
  return ISO6391.getName(language);
};

const downloadItem = (id: string, type: string) => {
  if (type === "json" || type === "archimate" || type === "xml") {
    axios
      .get(`../processed-models/${id}/model.${type}`, { responseType: "blob" })
      .then((res) => { saveAs(res.data, `model.${type}`); });
  } else if (type === "csv") {
    // download each .csv file from csv/ directory
    axios
      .get(`../processed-models/${id}/csv/elements.${type}`, { responseType: "blob" })
      .then((res) => { saveAs(res.data, `elements.${type}`); });
    axios
      .get(`../processed-models/${id}/csv/relations.${type}`, { responseType: "blob" })
      .then((res) => { saveAs(res.data, `relations.${type}`); });
    axios
      .get(`../processed-models/${id}/csv/properties.${type}`, { responseType: "blob" })
      .then((res) => { saveAs(res.data, `properties.${type}`); });
  }
};

const redirectRawDataPath = (path: string) => {
  // TODO: currently all sourceFile properties are in lower-case, but URL is case-sensitive, so redirecting to correct file does not work
  // -> update sourceFile with case-sensitive file names
  // for now: slice of file name to redirect to correct path
  path = path.substring(0, path.lastIndexOf('/') + 1);
  window.location.href = `https://github.com/me-big-tuwien-ac-at/EAModelSet/blob/main/${path}`;
}

const formatDate = (date: string) => {
  return date.replace('T', ' ');
}
</script>

<template>
  <h2>Model Details</h2>
  <h4 v-if="!model">Loading model...</h4>
  <div v-else class="model-details">
    
    <div class="surface-card shadow-2 border-round">
      <h3 class="ml-3">Download</h3>
      <div class="ml-5 mb-3">
        <span class="p-buttonset">
          <Button
            label="JSON"
            icon="pi pi-download"
            size="small"
            @click="downloadItem(model.archimateId, 'json')"
            severity="success"
            v-if="model.formats.includes('JSON')"
          />
          <Button
            label="ArchiMate Model (.archimate)"
            icon="pi pi-download"
            size="small"
            @click="downloadItem(model.archimateId, 'archimate')"
            severity="info"
            v-if="model.formats.includes('ARCHIMATE')"
          />
          <Button
            label="ArchiMate Model (.xml)"
            icon="pi pi-download"
            size="small"
            @click="downloadItem(model.archimateId, 'xml')"
            severity="info"
            v-if="model.formats.includes('XML')"
          />
          <Button
            label="CSV"
            icon="pi pi-download"
            size="small"
            @click="downloadItem(model.archimateId, 'csv')"
            severity="primary"
            v-if="model.formats.includes('CSV')"
          />
        </span>
      </div>
    </div>

    <Fieldset legend="Model" :toggleable="true" class="surface-card shadow-2 border-round">
      <ul class="list-none p-0 m-0">

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Identifier</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.identifier }}
          </div>
        </li>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">ArchiMate ID</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.archimateId }}
          </div>
        </li>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Name</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.name }}
          </div>
        </li>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Description</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.description }}
          </div>
        </li>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Language</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ getLanguageName(model.language) }}
          </div>
        </li>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Formats</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <span v-for="format in model.formats" :key="format">
              <Tag
                class="mr-1"
                :value="format.toUpperCase()"
                :severity="getFormatSeverity(format)"
                :rounded="true"
              />
            </span>
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Tags</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <span v-for="tag in model.tags" :key="tag">
              <Tag
                class="mr-1"
                :value="tag.toUpperCase()"
                :severity="getSeverity(tag)"
              />
            </span>
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Source</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.source }}
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Repository</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.repository }}
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">License</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.license }}
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Source File</div>
          <Button class="mr-1"
            size="small"
            :label="`${model.sourceFile}`"
            link
            @click="redirectRawDataPath(model.sourceFile)"
          />
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Source Format</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <Tag class="ml-2 mr-1"
              :value="model.sourceFormat"
              :severity="getFormatSeverity(model.sourceFormat)"
              :rounded="true"
            />
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Timestamp</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ formatDate(model.timestamp) }}
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Duplicates</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <span v-for="dup in model.duplicates" :key="dup">
              <Button class="mr-1"
                size="small"
                :label="`${dup}`"
                link
                @click="redirectRawDataPath(dup)"
              />
            </span>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Total Duplicates</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.duplicates ? model.duplicates.length : 0 }}
          </div>
        </li>
        <li  class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Total Elements</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.elements ? model.elements.length : 0 }}
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Total Relationships</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.relationships ? model.relationships.length : 0 }}
          </div>
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">Total Views</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ model.views ? model.views.length : 0 }}
          </div>
        </li>
      </ul>
    </Fieldset>

    <Fieldset legend="Diagrams" :toggleable="true" class="surface-card shadow-2 border-round">
      <div class="carousel-container">
      <Carousel :value="diagramUrls" :numVisible="1" :numScroll="1" class="diagram-container">
        <template #item="slotProps">
          <div class="card flex justify-content-center">
            <Image :src=slotProps.data alt="Diagram" preview width="250" height="250" />
          </div>
        </template>
      </Carousel>
    </div>
    </Fieldset>

    <Fieldset legend="Elements" :toggleable="true" :collapsed="true" class="surface-card shadow-2 border-round">
      <DataTable
        :value="model.elements"
        class="p-datatable-sm"
        tableStyle="min-width: 50rem"
        scrollable
        scrollHeight="400px"
        removableSort
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="type" header="Type" sortable></Column>
      </DataTable>
    </Fieldset>

    <Fieldset legend="Relationships" :toggleable="true" :collapsed="true" class="surface-card shadow-2 border-round">
      <DataTable
        :value="model.relationships"
        class="p-datatable-sm"
        tableStyle="min-width: 50rem"
        scrollable
        scrollHeight="400px"
        removableSort
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="type" header="Type" sortable></Column>
        <Column field="sourceId" header="Source ID" sortable></Column>
        <Column field="targetId" header="Target ID" sortable></Column>
      </DataTable>
    </Fieldset>

    <Fieldset legend="Views" :toggleable="true" :collapsed="true" class="surface-card shadow-2 border-round">
      <DataTable
        :value="model.views"
        class="p-datatable-sm"
        tableStyle="min-width: 50rem"
        scrollable
        scrollHeight="400px"
        removableSort
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="viewpoint" header="Viewpoint" sortable></Column>
      </DataTable>
    </Fieldset>
  </div>
</template>

<style scoped>
.model-details {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.carousel-container {
  display: block; /* or flex if you want to use flexbox */
  width: 100%; /* or a specific width */
  text-align: center; 
}
.diagram-container {
  width: 500px;
  max-width: 500px;
  overflow-x: auto;
  display: block;
  margin: 0 auto;
}
</style>
