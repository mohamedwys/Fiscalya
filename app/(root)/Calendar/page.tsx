"use client"

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@/app/Calendar.css"; // Ensure this path is correct
import useCalendar from "@/config/Calendar";
import { createEventId } from "@/data/index";
import Balancer from "react-wrap-balancer";

const Calendar: React.FC = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();

  const handleEvents = async (events: any) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = (selectInfo: { view: { calendar: any }; start: any; end: any; allDay: any }) => {
    let title = prompt("Please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: { event: { remove: () => void } }) => {
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };

  return (
    <><div className="flex flex-col items-center gap-6 text-center">
      <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <Balancer>
          <span className="bg-gradient-to-r from-[#6A82FB] to-[#CB837F] bg-clip-text text-transparent">
          Schedule Your Tax Declarations
          </span>
        </Balancer>
      </h2>
    </div>
    <div className="calendar-container">
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            allDaySlot={false}
            initialView="timeGridWeek"
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick} />
        </div>
      </div></>
  );
};

export default Calendar;
