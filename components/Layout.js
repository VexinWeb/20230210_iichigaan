import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import Contact from "./Contact";

// Apply same style on all pages, cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Meta />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
