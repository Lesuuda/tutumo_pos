import { FunctionComponent } from "react";
import styles from "./Expired.module.css";

export type ExpiredType = {
  className?: string;
};

const Expired: FunctionComponent<ExpiredType> = ({ className = "" }) => {
  return <div className={[styles.expired, className].join(" ")} />;
};

export default Expired;
