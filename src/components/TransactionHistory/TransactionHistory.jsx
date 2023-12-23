import clsx from "clsx";
import commonCss from "../common.module.css";
import css from "./transactionHistory.module.css";
import PropTypes, { arrayOf } from "prop-types";

export function TransactionHistory(props) {
    return (
        <div className={clsx(commonCss.container, css["transaction-section"])}>
            <table className={css.table}>
                <thead className={css["table-header"]}>
                    <tr>
                        <th className={css["th-col"]}>Type</th>
                        <th className={css["th-col"]}>Amount</th>
                        <th className={css["th-col"]}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(({ id, type, amount, currency }) =>
                        <tr className={css["td-row"]} key={id}>
                            <td className={clsx(css["td-col"], css.type)}>{type}</td>
                            <td className={css["td-col"]}>{amount}</td>
                            <td className={css["td-col"]}>{currency}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

TransactionHistory.propTypes = {
    data: arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }