import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table >
      <thead >
        <tr >
          <th className={css.box_titel }>Type</th>
          <th className={css.box_titel }>Amount</th>
          <th className={css.box_titel }>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} >
            <th className={css.body_box }>{item.type}</th>
            <th className={css.body_box }>{item.amount}</th>
            <th className={css.body_box }>{item.currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;


