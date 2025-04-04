import PropTypes from "prop-types";
import style from './Stats.module.scss'

export const Stats = ({ statsData }) => {
  return (
    <section className={style.stats}>
      <h2 className={style.statsTitle}>Upload stats</h2>

      <ul className={style.statsList}>
        {statsData.map((stat) => {
          return (
            <li className={style.statsItem}>
              <span className={style.statsLabel}>{stat.label}</span>
              <span className={style.statsPercentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  statsData: PropTypes.object,
};
