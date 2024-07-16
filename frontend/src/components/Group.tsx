import { FunctionComponent } from "react";
import styles from "./Group.module.css";

export type GroupType = {
  className?: string;
};

const Group: FunctionComponent<GroupType> = ({ className = "" }) => {
  return (
    <div className={[styles.supplierParent, className].join(" ")}>
      <img className={styles.supplierIcon} alt="" src="/supplier@2x.png" />
    </div>
  );
};

export default Group;
