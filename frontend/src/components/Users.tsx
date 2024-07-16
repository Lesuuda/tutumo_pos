import { FunctionComponent } from "react";
import styles from "./Users.module.css";

export type UsersType = {
  className?: string;
};

const Users: FunctionComponent<UsersType> = ({ className = "" }) => {
  return <div className={[styles.users, className].join(" ")} />;
};

export default Users;
