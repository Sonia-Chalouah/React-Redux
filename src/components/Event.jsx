import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { deleteEvent } from "../service/api.js";
import {useDispatch} from "react-redux";
import {deleteEventThunk} from "../redux/slices/eventsSlice.js"; // Import the delete function from your API service

function Event(props) {
  const [nbParticipants, setNbParticipants] = useState(props.nbParticipants);
  const [nbTickets, setNbTickets] = useState(props.nbTickets);
  const [img, setImg] = useState(props.img);
  const [isLiked, SetIsLike] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleDeleteEvent = async () => {
    dispatch(deleteEventThunk(props.id))
        .then(() => {
          console.log(`${props.id} deleted`);
          navigate('/events');
        })
  };

  const bookEvent = () => {
    setNbParticipants(nbParticipants + 1);
    setNbTickets(nbTickets - 1);
    if (nbTickets === 1) {
      setImg("sold_out.png");
    }
    alert("You have booked an event");
  };

  const handleLikeState = () => {
    SetIsLike(!isLiked);
  };

  return (
      <>
        <div className="max-w-sm p-6 text-left bg-white border border-gray-200 rounded-lg shadow">
          <img className="w-full h-45" src={`images/${img}`} alt="event" />
          <div className="px-6 py-4">
            <Link
                to={`/event/${props.name}`}
                className="text-black hover:text-gray-300 font-bold text-xl mb-2"
            >
              {props.name}
            </Link>
            <p className="text-gray-700 text-base">Price: {props.price}</p>
            <div className="pt-4 pb-2">
              <p>Number of tickets: {nbTickets}</p>
              <p>Number of Participants: {nbParticipants}</p>
            </div>
          </div>
          <button
              onClick={bookEvent}
              disabled={nbTickets === 0}
              className="inline-flex items-center px-3 py-2 text-sm text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold rounded"
          >
            Book an event
          </button>
          <button
              onClick={handleLikeState}
              className="ml-3 inline-flex items-center px-3 py-2 text-sm text-center bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold rounded"
          >
            {isLiked ? "Dislike" : "Like"}
          </button>
          <button
              onClick={handleDeleteEvent}
              className="ml-3 inline-flex items-center px-3 py-2 text-sm text-center bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 text-white font-bold rounded"
          >
            Delete Event
          </button>
        </div>
      </>
  );
}

export default Event;