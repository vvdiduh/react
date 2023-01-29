import PropTypes from 'prop-types';
// import { formatEventStart } from 'utils/formatEventStart.js';
// import { formatEventDuration } from 'utils/formatEventDuration.js';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from 'constans';
// import css from './Event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { EventCard, Title, Info, Chip } from './Event.styled';

export default function Event({ name, location, speaker, start, end, type }) {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <EventCard>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} /> {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </EventCard>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
