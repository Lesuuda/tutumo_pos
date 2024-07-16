import { FunctionComponent } from "react";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <img className={styles.doubleLeftIcon} alt="" src="/double-left@2x.png" />
      <div className={styles.header}>
        <div className={styles.bussinessNameParent}>
          <div className={styles.bussinessName}>
            <div className={styles.bussinessNameChild} />
            <div className={styles.tutumoLiquorStore}>
              TUTUMO LIQUOR STORE ONE
            </div>
          </div>
          <div className={styles.loginInformation}>
            <div className={styles.loginInformationChild} />
            <div className={styles.devlesuuda}>devlesuuda</div>
            <div className={styles.admingmailcom}>admin@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.adminDashboard}>
        <div className={styles.lastSixMonths}>
          <div className={styles.lastSixMonthsChild} />
          <div className={styles.view}>View</div>
          <div className={styles.div}>1, 276, 510.43</div>
          <div className={styles.lastSixMonths1}>Last six months</div>
        </div>
        <div className={styles.dailySales}>
          <div className={styles.dailySalesChild} />
          <div className={styles.view1}>View</div>
          <div className={styles.ksh1532000}>Ksh. 15, 320.00</div>
          <div className={styles.dailySales1}>Daily sales</div>
          <img className={styles.todayIcon} alt="" src="/today@2x.png" />
        </div>
        <div className={styles.monthlySales}>
          <div className={styles.monthlySalesChild} />
          <div className={styles.view2}>View</div>
          <div className={styles.div1}>380, 486.54</div>
          <div className={styles.monthlySales1}>Monthly sales</div>
        </div>
        <div className={styles.users}>
          <div className={styles.usersChild} />
          <div className={styles.users1}>Users</div>
          <div className={styles.div2}>2</div>
        </div>
        <div className={styles.invoices}>
          <div className={styles.usersChild} />
          <div className={styles.div3}>50</div>
          <div className={styles.invoices1}>Invoices</div>
        </div>
        <div className={styles.suppliers}>
          <div className={styles.usersChild} />
          <div className={styles.suppliers1}>Suppliers</div>
          <div className={styles.div4}>5</div>
        </div>
        <div className={styles.weeklySales}>
          <div className={styles.weeklySalesChild} />
          <div className={styles.ksh10020500}>Ksh. 100, 205.00</div>
          <div className={styles.weeklySales1}>Weekly sales</div>
          <div className={styles.view3}>View</div>
          <img className={styles.weekViewIcon} alt="" src="/week-view@2x.png" />
        </div>
        <div className={styles.availableProducts}>
          <div className={styles.usersChild} />
          <div className={styles.div5}>10</div>
          <div className={styles.availableProducts1}>Available Products</div>
          <img
            className={styles.liquorShelfIcon}
            alt=""
            src="/liquor-shelf@2x.png"
          />
        </div>
        <div className={styles.stores}>
          <div className={styles.usersChild} />
          <div className={styles.div6}>2</div>
          <div className={styles.stores1}>Stores</div>
          <img
            className={styles.groceryStoreIcon}
            alt=""
            src="/grocery-store@2x.png"
          />
        </div>
        <div className={styles.expiredProducts}>
          <div className={styles.usersChild} />
          <div className={styles.stores1}>Expired Products</div>
          <div className={styles.div7}>0</div>
          <img className={styles.expiredIcon} alt="" src="/expired@2x.png" />
        </div>
      </div>
      <div className={styles.adminSidebar}>
        <div className={styles.adminSidebarChild} />
        <div className={styles.refunds}>Refunds</div>
        <img className={styles.refundIcon} alt="" src="/refund@2x.png" />
        <div className={styles.categories}>Categories</div>
        <div className={styles.logout}>Logout</div>
        <div className={styles.expired}>Expired</div>
        <div className={styles.credits}>Credits</div>
        <div className={styles.suppliers2}>Suppliers</div>
        <div className={styles.products}>Products</div>
        <div className={styles.orders}>Orders</div>
        <div className={styles.reports}>Reports</div>
        <div className={styles.stores2}>Stores</div>
        <div className={styles.users2}>Users</div>
        <div className={styles.posSystem}>POS SYSTEM</div>
        <div className={styles.dashboard}>Dashboard</div>
        <img className={styles.homeFillIcon} alt="" src="/home-fill@2x.png" />
        <img
          className={styles.groceryStoreIcon1}
          alt=""
          src="/grocery-store@2x.png"
        />
        <img className={styles.usersIcon} alt="" src="/users@2x.png" />
        <img
          className={styles.liquorShelfIcon1}
          alt=""
          src="/liquor-shelf@2x.png"
        />
        <img className={styles.lineChartIcon} alt="" src="/line-chart@2x.png" />
        <img className={styles.debtIcon} alt="" src="/debt@2x.png" />
        <img className={styles.logoutIcon} alt="" src="/logout@2x.png" />
        <img className={styles.supplierIcon} alt="" src="/supplier@2x.png" />
        <img className={styles.categoryIcon} alt="" src="/category@2x.png" />
      </div>
    </div>
  );
};

export default Home;
