import Button from "../UI/Button/Button";
import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";

export const ExpenseFilterSort = ({ value, onChange }) => {
  return (
    <div className={css.expenseFilter}>
      <div className={css.expenseFilterControl}>
        <select className={css.select_option} value={value} onChange={onChange} >
          <option  value="По убыванию" >По убыванию</option>
          <option  value="По возрастанию">По возрастанию</option>
        </select>
          <Button className="btn_container" value="По новизне"onClick={onChange}>По новизне</Button>
          <Button className="btn_container" value="По названию"onClick={onChange}>По названию</Button>
      </div>
    </div>
  );
};

ExpenseFilterSort.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
