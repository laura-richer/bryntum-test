import { createApp } from 'vue';

import App from './App.vue';
import CalendarViewEvent from './components/CalendarViewEvent.vue';
import CalendarViewEventCompact from './components/CalendarViewEventCompact.vue';


const app = createApp(App);

// Globally register custom calendar components
app.component('CalendarViewEvent', CalendarViewEvent);
app.component('CalendarViewEventCompact', CalendarViewEventCompact);

app.mount('#app');
