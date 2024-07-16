import { FunctionComponent } from "react";
import styles from "./LoginInformation.module.css";

export type LoginInformationType = {
  className?: string;
};

const LoginInformation: FunctionComponent<LoginInformationType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.loginInformation, className].join(" ")}>
      <img className={styles.doorbellIcon} alt="" src="/doorbell@2x.png" />
    </div>
  );
};

export default LoginInformation;
