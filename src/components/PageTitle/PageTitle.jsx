import css from './PageTitle.module.css';

export default function PageTitle({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}
