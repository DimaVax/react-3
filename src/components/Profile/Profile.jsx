import PropTypes from "prop-types";
import style from './Profile.module.scss'

export const Profile = ({ userData }) => {
  return (
    <div className={style.profile}>
      <div className={style.profileDesc}>
        <img
          src={userData.avatar}
          alt="User avatar"
          className={style.profileAvatar}
        />
        <p className={style.profileName}>{userData.username}</p>
        <p className={style.profileTag}>@{userData.tag}</p>
        <p className={style.profileLocation}>{userData.location}</p>
      </div>

      <ul className={style.profileStats}>
        <li className={style.profileItem}>
          <span className={style.profileLabel}>Followers</span>
          <span className={style.profileQuantity}>{userData.stats.followers}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.profileLabel}>Views</span>
          <span className={style.profileQuantity}>{userData.stats.views}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.profileLabel}>Likes</span>
          <span className={style.profileQuantity}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userData: PropTypes.object,
};