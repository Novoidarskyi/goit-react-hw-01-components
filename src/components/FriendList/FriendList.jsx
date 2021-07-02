import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} className={css.list_item}>
          
          <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
        </li>
        
      ))}
    </ul>
  );
};


FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
