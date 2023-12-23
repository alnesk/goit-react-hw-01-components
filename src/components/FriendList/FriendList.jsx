import clsx from "clsx";
import commonCss from "../common.module.css";
import css from "./friendList.module.css";
import {FriendListItem} from "./FriendListItem/FriendListItem"
import PropTypes, { arrayOf } from "prop-types";

export function FriendList({ data }) {
    return (
        <div className={clsx(commonCss.container, css["friends-container"])}>
            <ul className={css["friend-list"]}>
                {data.map(({ avatar, name, isOnline, id }) =>
                    <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                    />
                )}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    data: arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
    )
  }