import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Routing
import router from "@/router";

// PrimeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core
import "primeflex/primeflex.css" // css utility

// PrimeVue Components
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
import Menubar from 'primevue/menubar';
import MultiSelect from 'primevue/multiselect';
import OverlayPanel from 'primevue/overlaypanel';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Tag from 'primevue/tag';
import Tooltip from 'primevue/tooltip';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);
app.component('Carousel', Carousel);
app.component('Chart', Chart);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Fieldset', Fieldset); 
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);
app.component('Image', Image);
app.component('Menubar', Menubar);
app.component('MultiSelect', MultiSelect);
app.component('OverlayPanel', OverlayPanel);
app.component('SelectButton', SelectButton);
app.component('Slider', Slider);
app.component('Tag', Tag);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('VirtualScroller', VirtualScroller);

app.directive('tooltip', Tooltip);

app.mount('#app')
