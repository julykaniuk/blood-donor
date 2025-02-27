import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid, createViewDay } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";

const CalendarAdmin = () => {
    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
        events: [
            {
                id: 1,
                title: "My new event",
                start: "2025-01-01 00:00",
                end: "2025-01-01 02:00",
                description: "This is a detailed description of my event.",
            },
        ],
        selectedDate: "2025-01-01",
        plugins: [
            createEventModalPlugin(),
        ]
    });

    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    );
};

export default CalendarAdmin;
