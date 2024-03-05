// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/slices/eventsSlice.js"; // Make sure the path is correct
import Event from "./Event";
import NavigationBar from "./NavigationBar";

function Events() {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events); // Adjust according to your state structure

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
        <>
            <NavigationBar />
            <h1 className="font-bold text-3xl">Events List</h1>
            <div className="flex mt-4 p-5 space-x-5">
                {Array.isArray(events) && events.map((e, i) => (
                    <Event
                        id={e.id}
                        img={e.img}
                        name={e.name}
                        price={e.price}
                        key={i}
                        nbTickets={e.nbTickets}
                        nbParticipants={e.nbParticipants}
                    />
                ))}
            </div>
        </>
    );
}

export default Events;
