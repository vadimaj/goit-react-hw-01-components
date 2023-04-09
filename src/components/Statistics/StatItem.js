import PropTypes from 'prop-types';

import css from './Statistics.module.css';
export default function StatItem(props) {
  const { label, percentage, itemsQty } = props;
  const itemColorValue = getRandomHexColor();
  const styles = {
    flexBasis: `calc(100% / ${itemsQty})`,
    backgroundColor: `${itemColorValue}`,
  };
  return (
    <li className={css.item} style={styles}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage + '%'}</span>
    </li>
  );
}
StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}
