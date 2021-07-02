import Description from "./Description/Description";
import Stats from "./Stats/Stats";
import css from './Profile.module.css'
import user from 'data/user';


const Profile = () => {
  return (
    <div className={css.container}>
    <Description 
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}      
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        
      />
      </div>
  )
}

export default Profile
