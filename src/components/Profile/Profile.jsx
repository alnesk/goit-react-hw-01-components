import clsx from "clsx";
import css from "./profile.module.css";
import commonCss from "../common.module.css";

import PropTypes from "prop-types";

import { ProfileStats } from "./ProfileStats";

export function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={clsx(css.profileCard, commonCss.container)}>
            <div className={css.profileDescr}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={clsx(css.profileAvatar)}
                />
                <p className={clsx(css.username, css.descr_txt)}>{username}</p>
                <p className={css.descr_txt}>{'@' + tag}</p>
                <p className={css.descr_txt}>{location}</p>
            </div>
            <ul className={css.profileStats}>
                {Object.keys(stats).map(k => (
                    <ProfileStats
                        key={k}
                        stat_name={k}
                        stat_number={stats[k]}
                    />
                ))
                }
            </ul>
        </div>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }
    ).isRequired,
  }