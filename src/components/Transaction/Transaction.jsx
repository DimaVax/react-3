import PropTypes from "prop-types";
import style from './Transaction.module.scss'

export const Transaction = ({ tableStats }) => {
  return (
    <table className={style.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {tableStats.map((transaction) => {
          return (
            <tr>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  tableStats: PropTypes.object,
};