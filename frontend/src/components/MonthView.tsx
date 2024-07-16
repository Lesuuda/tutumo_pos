import { FunctionComponent } from "react";
import styles from "./MonthView.module.css";

export type MonthViewType = {
  className?: string;
};

const MonthView: FunctionComponent<MonthViewType> = ({ className = "" }) => {
  return <div className={[styles.monthView, className].join(" ")} />;
};

export default MonthView;
