import PropTypes from "prop-types";
import style from './FriendList.module.scss'

export const FriendList = ({ friendListData }) => {
  return (
    <ul className={style.friendList}>
        <h2 className={style.friendListTitle}>Friend list</h2>
      {friendListData.map((friend) => {
        return (
          <li className={style.friendListItem}>
            <span className={
                friend.isOnline
                  ? style.friendListOnline
                  : style.friendListOffline
              }></span>
            <img className={style.friendListAvatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={style.friendListName}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friendListData: PropTypes.object,
};