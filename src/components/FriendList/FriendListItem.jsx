import PropTypes from "prop-types";
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {  
  
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img src={avatar} alt="user avatar" width="40" className={css.img } />
      <p className={css.text}>{name}</p>      
    </>
  )
}



FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem
