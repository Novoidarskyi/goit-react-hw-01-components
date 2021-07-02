import PropTypes from 'prop-types';
import defaulImage from 'img/user.png';
import css from './Description.module.css';



const Description = ({ name, tag, location, avatar = defaulImage }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt="user avatar" width="40" />
      <p className={css.text_avatar}>{name}</p>
      <p className={ css.text_tag}>@{tag}</p>
      <p className={css.text_location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;
