import PropTypes from 'prop-types';
import css from './Stats.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.list}>
      <li className={css.list_item}>
        <span>Followers</span>
        <span className={css.text_stats}>{followers}</span>
      </li>
      <li className={css.list_item}>
        <span>Views</span>
        <span className={css.text_stats}>{views}</span>
      </li>
      <li className={css.list_item}>
        <span>Likes</span>
        <span className={css.text_stats}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
