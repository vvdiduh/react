import PaintingList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from '../src/paintings.json';

export default function App() {
  return (
    <div>
      <Section title={'Русні пизда'}>
        <PaintingList items={paintings} />
      </Section>
      <Section title={'Пееремога'} />
    </div>
  );
}
