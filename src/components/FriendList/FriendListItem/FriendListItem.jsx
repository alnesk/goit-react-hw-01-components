import css from "../friendList.module.css";

export function FriendListItem({id, isOnline, avatar, name}) {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline ? "green" : "red"]}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}