import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.container}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={ css.list}>
        {stats.map(stat => (
          <li key={stat.id} className={css.list_item}>
            <span className={css.list_text }>{stat.label}</span>
            <span className={css.list_text }>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
