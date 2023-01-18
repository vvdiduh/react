import PropTypes from 'prop-types';
// import { formatEventStart } from 'utils/formatEventStart.js';
// import { formatEventDuration } from 'utils/formatEventDuration.js';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from 'constans';
import css from './Event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

export default function Event({ name, location, speaker, start, end, type }) {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} /> {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
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
