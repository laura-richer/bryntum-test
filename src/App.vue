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
        return new Widget({
          html : {
            vue: true, // Required flag
            is: 'CalendarViewEvent', // must be registered
            bind: { eventRecord },
          }
        }).html;
      },
    },
    week: {
      eventRenderer({ eventRecord }) {
        return new Widget({
          html : {
            vue: true, // Required flag
            is: 'CalendarViewEvent', // must be registered
            bind: { eventRecord },
          }
        }).html;
      },
    },
    month: {
      eventRenderer({ eventRecord, renderData }) {
        renderData.solidBar = true;

        return new Widget({
          html : {
            vue: true, // Required flag
            is: 'CalendarViewEvent', // must be registered
            bind: { eventRecord },
          }
        }).html;
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
