import StatItem from './StatItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(itemStatistics => {
          return (
            <StatItem
              key={itemStatistics.id}
              label={itemStatistics.label}
              percentage={itemStatistics.percentage}
              itemsQty={stats.length}
            />
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
