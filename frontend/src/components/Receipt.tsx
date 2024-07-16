import { FunctionComponent } from "react";
import styles from "./Receipt.module.css";

export type ReceiptType = {
  className?: string;
};

const Receipt: FunctionComponent<ReceiptType> = ({ className = "" }) => {
  return <div className={[styles.receipt, className].join(" ")} />;
};

export default Receipt;
