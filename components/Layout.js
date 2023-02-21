import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";

// Apply same style on all pages, cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
