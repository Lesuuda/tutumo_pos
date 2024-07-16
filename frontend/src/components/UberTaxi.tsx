import { FunctionComponent } from "react";
import styles from "./UberTaxi.module.css";

export type UberTaxiType = {
  className?: string;
};

const UberTaxi: FunctionComponent<UberTaxiType> = ({ className = "" }) => {
  return <div className={[styles.uberTaxi, className].join(" ")} />;
};

export default UberTaxi;
