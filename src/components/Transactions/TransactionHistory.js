import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Transaction.module.css';
export default function TransactionHistory(props) {
  const { items: transactions } = props;

  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          const { id, type, amount, currency } = transaction;

          return (
            <tr
              key={id}
              className={clsx(
                css['transaction-row'],
                index % 2 === 0 && css['transaction-row-dark']
              )}
            >
              <td className={css['row-caption']}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
