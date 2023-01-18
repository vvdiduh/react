import PageTitle from 'components/PageTitle/PageTitle';
import EventBoard from 'components/EventBoard/EventBoard';

import upcomingEvents from 'upcoming-events.json';
export default function App() {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}
