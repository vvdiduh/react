import PageTitle from 'components/PageTitle/PageTitle';
import EventBoard from 'components/EventBoard/EventBoard';
import { Container } from './App.styled';
import upcomingEvents from 'upcoming-events.json';
export default function App() {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
}
