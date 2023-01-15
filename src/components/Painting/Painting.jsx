import PropTypes from 'prop-types';
import defaultImg from '../Painting/react.png';

export default function Painting({
  imageUrl = defaultImg,
  title,
  author = 'Secret',
  profileUrl,
  price,
  quantity,
}) {
  const inStock = quantity;
  return (
    <div>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {inStock > 10 ? 'есть в наличии' : 'заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
