import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
