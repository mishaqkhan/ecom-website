import Navbar from "./Navbar";

const styles = {
  layoutContainer: {
    display: "flex",
  },
  navbarContainer: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
  },
  childrenContiner: {
    margin: "70px 0",
    width: "100%",
  },
};

function Layout({ children }) {
  return (
    <div style={styles.layoutContainer}>
      <div style={styles.navbarContainer}>
        <Navbar />
      </div>
      <div style={styles.childrenContiner}>{children}</div>
    </div>
  );
}

export default Layout;
