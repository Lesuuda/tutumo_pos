import { FunctionComponent } from "react";
import styles from "./TotalSales.module.css";

export type TotalSalesType = {
  className?: string;
};

const TotalSales: FunctionComponent<TotalSalesType> = ({ className = "" }) => {
  return <div className={[styles.totalSales, className].join(" ")} />;
};

export default TotalSales;
