<script setup lang="ts">
/**
 * Other approaches:
 * -> load from GitHub URL (raw file)
 * -> load from REST API 
*/  
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { FilterMatchMode} from 'primevue/api';
import { LANGS } from '@/util/language-utils';
import ISO6391 from 'iso-639-1';
import axios from 'redaxios';
import { ModelInfo } from '@/types';

const models = ref();
const selectableLicenses = ref<{ label: string; value: string; }[]>();
const router = useRouter();

onMounted(() => {
    axios.get('dataset.json').then((res) => {
        models.value = res.data.modelInfos
        // retrieve all possible license values to use for filtering
        const allLicenses = res.data.modelInfos.map((i: ModelInfo) => i.license);
        const uniqueLicenses: string[] = [... new Set(allLicenses)] as string[];
        const selectableLicensesData = uniqueLicenses.map((license: string) => ({
            label: getLicense(license),
            value: license,
        }));
        selectableLicenses.value = selectableLicensesData;
    });
});

// -- HIDE/SHOW COLUMNS --
const columns = ref([
    {field: 'id', header: 'ID'},
    {field: 'name', header: 'Name'},
    {field: 'source', header: 'Source'},
    {field: 'repository', header: 'Repository'},
    {field: 'license', header: 'License'},
    {field: 'language', header: 'Language'},
    {field: 'formats', header: 'Formats'},
    {field: 'tags', header: 'Tags'},
    {field: 'duplicateCount', header: 'Duplicates'},
    {field: 'elementCount', header: 'Elements'},
    {field: 'relationshipCount', header: 'Relationships'},
    {field: 'viewCount', header: 'Views'}
]);
const selectedColumns = ref(columns.value);

// -- FILTERING --
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        source: { value: null, matchMode: FilterMatchMode.IN },
        repository: { value: null, matchmode: FilterMatchMode.CONTAINS },
        license: { value: null, matchMode: FilterMatchMode.IN },
        language: { value: null, matchMode: FilterMatchMode.IN },
        formats: { value: null, matchMode: FilterMatchMode.CONTAINS },
        tags: { value: null, matchMode: FilterMatchMode.CONTAINS },
        duplicateCount: { value: [0, 20], matchMode: FilterMatchMode.BETWEEN },
        elementCount: { value: [0, 4500], matchMode: FilterMatchMode.BETWEEN },
        relationshipCount: { value: [0, 6000], matchMode: FilterMatchMode.BETWEEN },
        viewCount: { value: [0, 400], matchMode: FilterMatchMode.BETWEEN },
    };
};
const filters = ref();
const sources = ref([
    { label: 'GitHub', value: 'GitHub' },
    { label: 'GenMyModel', value: 'GenMyModel' },
    { label: 'Other', value: 'Other' }
]);
const languages = ref(LANGS);
const formatOptions = ref([
    { label: 'JSON', value: 'JSON' },
    { label: 'XML', value: 'XML' },
    { label: 'ARCHIMATE', value: 'ARCHIMATE' },
    { label: 'CSV', value: 'CSV' }
]);
const tagsFilterOptions = ref([
    { label: 'DUPLICATE', value: 'duplicate' },
    { label: 'WARNING', value: 'warning' }
]);

initFilters();
const clearFilters = () => {
    initFilters();
};

const onColumnToggle = (val: any) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};
const getLanguageName = (language: string) => {
    return ISO6391.getName(language);
};
const getFormatSeverity = (format: string) => {
    switch (format) {
        case 'JSON': return 'success';
        case 'ARCHIMATE': return 'info';
        case 'XML': return 'info';
        case 'CSV': return 'primary';
    }
};
const getSeverity = (tag: string) => {
    switch (tag) {
        case 'DUPLICATE': return 'danger';
        case 'WARNING': return 'warning';
    }
};
// TODO: change license naming in dataset
const getLicense = (lic: string) => {
    switch (lic) {
        case 'Not found': return 'Unspecified';
        case '': return 'Unknown';
        default: return lic;
    }
}
const getLicenseSeverity = (lic: string) => {
    switch (lic) {
        case '': return 'danger';
        case 'Not found': return 'warning';
        default: return 'info';
    }
}
const redirectToRepo = (repo: string) => {
    window.location.href = `https://github.com/${repo}`;
}
const openModelDetails = (id: string) => {
    router.push({ path: `/model/${id}` });
}
const dt = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};
// scrollable scrollHeight="650px" :virtualScrollerOptions="{ itemSize: 50 }" resizableColumns columnResizeMode="expand"
</script>

<template>
    <h2>Search</h2>
    <DataTable 
        ref="dt"
        :value="models"
        dataKey="id"
        :class="`p-datatable-sm`" 
        showGridlines removableSort scrollable resizableColumns paginator 
        :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" 
        :loading="!models"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
        currentPageReportTemplate="{first} to {last} of {totalRecords} models"
        v-model:filters="filters" filterDisplay="row" :globalFilterFields="[ 'id', 'name', 'source', 'repository', 'license', 'formats', 'tags' ]"
    >
        <template #header>
            <span class="p-float-label mt-4 mb-4 mx-2">
                <MultiSelect id="column-select" :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onColumnToggle" display="chip" placeholder="Select Columns" style="display: flex;">
                    <template #footer>
                        <div class="py-2 px-3">
                            <b>{{ selectedColumns ? selectedColumns.length : 0 }}</b> column{{ (selectedColumns ? selectedColumns.length : 0) > 1 ? 's' : '' }} selected.
                        </div>
                    </template>
                </MultiSelect>
                <label for="column-select">Show / Hide Columns</label>
            </span>
            <Divider />
            <div class="flex justify-content-between mt-3 mb-3 ml-2 mr-2">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Search all fields" />
                </span>
                <div>
                    <Button class="mr-4"  v-tooltip.bottom="'Export table to CSV'" icon="pi pi-external-link" label="Export" @click="exportCSV()" />
                    <Button type="reset" v-tooltip.bottom="'Clear all filters'" icon="pi pi-filter-slash" @click="clearFilters()"/>
                </div>
            </div>
        </template>

        <template #empty> No models found. </template>

        <Column style="min-width:3rem; z-index:999;" frozen>
            <template #body="slotProps">
                <Button v-tooltip.right="'View Model Details'" type="button" size="small" icon="pi pi-eye" severity="info" outlined @click="openModelDetails(slotProps.data.id)"/>
            </template>
        </Column>
        
        <Column field="id" header="ID" sortable v-if="selectedColumns.includes(columns[0])">
            <template #filter="{ filterModel, filterCallback }">
                <InputText placeholder="Search ID" type="text" class="p-column-filter" v-model="filterModel.value" @input="filterCallback()"/>
            </template>
        </Column>
        
        <Column field="name" header="Name" sortable v-if="selectedColumns.includes(columns[1])" style="min-width: 20rem">
            <template #filter="{ filterModel, filterCallback }">
                <InputText placeholder="Search name" type="text" class="p-column-filter" v-model="filterModel.value" @input="filterCallback()"/>
            </template>
        </Column>

        <Column field="source" header="Source" sortable filterField="source" :showFilterMenu="false" v-if="selectedColumns.includes(columns[2])">
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect placeholder="Select source(s)" v-model="filterModel.value" @change="filterCallback()" :options="sources" optionLabel="label" optionValue="value" class="p-column-filter"/>
            </template>
        </Column>

        <Column field="repository" header="Repository" sortable v-if="selectedColumns.includes(columns[3])" >
            <template #body="{ data }">
                <Button class="mr-1" size="small" :label="`${data.repository}`" link @click="redirectToRepo(data.repository)"/><br>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" type="text" class="p-column-filter" placeholder="Search repository" />
            </template>
        </Column>
        
        <Column field="license" header="License" sortable v-if="selectedColumns.includes(columns[4])">
            <template #body="{ data }">
                <Tag class="mr-1" :value="getLicense(data.license)"  :severity="getLicenseSeverity(data.license)"/>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="selectableLicenses" optionLabel="label" optionValue="value" placeholder="Select license(s)" class="p-column-filter"/>
            </template>
        </Column>

        <Column field="language" header="Language" sortable filterField="language" :showFilterMenu="false" v-if="selectedColumns.includes(columns[5])">
            <template #body="{ data }">
                <span>
                    {{ getLanguageName(data.language) }}
                </span>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="languages" optionLabel="label" optionValue="value" placeholder="Select language(s)" class="p-column-filter"/>
            </template>
        </Column>

        <Column field="formats" header="Formats" sortable filterField="formats" :showFilterMenu="false" v-if="selectedColumns.includes(columns[6])">
            <template #body="{ data }">
                <span v-for="format in data.formats" :key="format">
                    <Tag class="mr-1" :value="format.toUpperCase()" :severity="getFormatSeverity(format)" :rounded="true" />
                </span>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="formatOptions" optionLabel="label" optionValue="value" placeholder="Select format(s)" class="p-column-filter">
                    <template #option="slotProps">
                        <Tag :value="slotProps.option.label" :severity="getFormatSeverity(slotProps.option.value)" :rounded="true"/>
                    </template>
                </MultiSelect>
            </template>
        </Column>
        
        <Column field="tags" header="Tags" sortable filterField="tags" :showFilterMenu="false" v-if="selectedColumns.includes(columns[7])">
            <template #body="{ data }">
                <span v-for="tag in data.tags" :key="tag">
                    <Tag class="mr-1" :value="tag.toUpperCase()" :severity="getSeverity(tag)"/>
                </span>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="tagsFilterOptions" optionLabel="label" optionValue="value" placeholder="Select tag(s)" class="p-column-filter">
                    <template #option="slotProps">
                        <Tag :value="slotProps.option.label" :severity="getSeverity(slotProps.option.label)"/>
                    </template>
                </MultiSelect>
            </template>
        </Column>
        
        <Column field="duplicateCount" header="Duplicates" sortable :showFilterMenu="false" v-if="selectedColumns.includes(columns[8])" style="min-width: 10rem">
            <template #filter="{ filterModel }">
                <div class="flex flow-row">
                    <div class="flex flow-column flex-wrap">
                        <label for="dup-count-min">Min</label>
                        <InputNumber id="dup-count-min" v-model="filterModel.value[0]" mode="decimal" :min="0" :max="filterModel.value[1]" style="width: 5rem; height: 2rem" class="mr-2" />
                    </div>
                    <div class="flex flow-column flex-wrap">
                        <label for="dup-count-max">Max</label>
                        <InputNumber id="dup-count-max" v-model="filterModel.value[1]" mode="decimal" :min="filterModel.value[0]" :max="20" style="width: 5rem; height: 2rem" />
                    </div>
                </div>
            </template>
        </Column>

        <Column field="elementCount" header="Elements" sortable :showFilterMenu="false"  v-if="selectedColumns.includes(columns[9])" style="min-width: 10rem">
            <template #filter="{ filterModel }">
                <div class="flex flow-row">
                    <div class="flex flow-column flex-wrap">
                        <label for="elem-count-min">Min</label>
                        <InputNumber id="elem-count-min"  v-model="filterModel.value[0]" mode="decimal" :min="0" :max="filterModel.value[1]" style="width: 5rem; height: 2rem" class="mr-2" />
                    </div>
                    <div class="flex flow-column flex-wrap">
                        <label for="elem-count-max">Max</label>
                        <InputNumber id="elem-count-max" v-model="filterModel.value[1]" mode="decimal" :min="filterModel.value[0]" :max="4500" style="width: 5rem; height: 2rem" />
                    </div>
                </div>
            </template>
        </Column>

        <Column field="relationshipCount" header="Relationship" sortable :showFilterMenu="false" v-if="selectedColumns.includes(columns[10])" style="min-width: 10rem">
            <template #filter="{ filterModel }">
                <div class="flex flow-row">
                    <div class="flex flow-column flex-wrap">
                        <label for="rel-count-min">Min</label>
                        <InputNumber id="rel-count-min" v-model="filterModel.value[0]" mode="decimal" :min="0" :max="filterModel.value[1]" style="width: 5rem; height: 2rem" class="mr-2" />
                    </div>
                    <div class="flex flow-column flex-wrap">
                        <label for="rel-count-max">Max</label>
                        <InputNumber id="rel-count-max" v-model="filterModel.value[1]" mode="decimal" :min="filterModel.value[0]" :max="6000" style="width: 5rem; height: 2rem" />
                    </div>
                </div>
            </template>
        </Column>

        <Column field="viewCount" header="Views" sortable :showFilterMenu="false" v-if="selectedColumns.includes(columns[11])" style="min-width: 10rem">
            <template #filter="{ filterModel }">
                <div class="flex flow-row">
                    <div class="flex flow-column flex-wrap">
                        <label for="view-count-min">Min</label>
                        <InputNumber id="view-count-min" v-model="filterModel.value[0]" mode="decimal" :min="0" :max="filterModel.value[1]" style="width: 5rem; height: 2rem" class="mr-2" />
                    </div>
                    <div class="flex flow-column flex-wrap">
                        <label for="view-count-max">Max</label>
                        <InputNumber id="view-count-max" v-model="filterModel.value[1]" mode="decimal" :min="filterModel.value[0]" :max="400" style="width: 5rem; height: 2rem" />
                    </div>
                </div>
            </template>
        </Column>
    </DataTable>
</template>

<style scoped>
</style>