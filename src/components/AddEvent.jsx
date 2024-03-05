import { Button, Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'; // Import useHistory
import { addEvent } from "../service/api.js";
import { useDispatch } from 'react-redux';
import { addEventThunk } from '../redux/slices/eventsSlice.js';
function AddEvent() {
    const navigate = useNavigate()
    const [newEvent, setNewEvent] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
        isLiked: false,
        nbParticipants: 0,
        nbTickets: 0,
        img: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        // Perform initialization or fetch data
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        dispatch(addEventThunk(newEvent))
            .then(() => {
                navigate('/events');
            })
            .catch(() => { // Removed the error parameter since it's not used
                setErrorMessage('Failed to add the event. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Event Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleChange}
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={newEvent.description}
                    onChange={handleChange}
                    required
                />
            </Form.Field>
            {/* Include other fields like date, time, etc., similar to the above */}
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Add Event'}
            </Button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Form>
    );
}

export default AddEvent;
