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
  },
};
</script>

<template>
  <p>Hello World</p>
  <bryntum-calendar
    v-bind="calendarConfig"
    :events="calendarItems"
   />
</template>
