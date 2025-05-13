<script setup>
import { ref } from 'vue';
import {
  BryntumCalendar,
} from '@bryntum/calendar-vue-3';
import { DateHelper, Widget } from '@bryntum/calendar';
import '@bryntum/calendar/source/resources/sass/themes/classic.scss';

const calendarItems = [
  {
    id: '1',
    name: 'A calendar event',
    startDate: new Date(new Date().setHours(10, 0, 0, 0)),
    endDate: new Date(new Date().setHours(19, 0, 0, 0)),
  },
  {
    id: '2',
    name: 'A second calendar event',
    startDate: new Date(new Date().setHours(10, 0, 0, 0)),
    endDate: new Date(new Date().setHours(15, 0, 0, 0)),
  },
];

const calendarConfig = {
  modes: {
    agenda: null,
    year: null,
    day: {
      eventRenderer({ eventRecord }) {
        return {
          vue: true, // Tells Bryntum to render it as a Vue component
          is: 'CalendarViewEvent', // Must match your global component name
          bind: { eventRecord }, // Pass data to the component
        };
      },
    },
    week: {
      eventRenderer({ eventRecord }) {
        return {
          vue: true, // Tells Bryntum to render it as a Vue component
          is: 'CalendarViewEvent', // Must match your global component name
          bind: { eventRecord }, // Pass data to the component
        };
      },
    },
    month: {
      eventRenderer({ eventRecord, renderData }) {
        renderData.solidBar = true;

        return {
          vue: true, // Tells Bryntum to render it as a Vue component
          is: 'CalendarViewEventCompact', // Must match your global component name
        };
      },
    },
  },
};
</script>

<template>
  <bryntum-calendar
    v-bind="calendarConfig"
    :events="calendarItems"
   />
</template>
