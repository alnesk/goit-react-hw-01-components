import css from "./profile.module.css";
import PropTypes from "prop-types";

export function ProfileStats({stat_name, stat_number}) {
    return (
        <li className={css.statItem}>
            <span className={css.stat_name}>{stat_name}</span>
            <span className={css.stat_number}>{stat_number.toLocaleString('en-US')}</span>
        </li>
    )
}

ProfileStats.propTypes = {
    stat_name: PropTypes.string.isRequired,
    stat_number: PropTypes.number.isRequired,
}