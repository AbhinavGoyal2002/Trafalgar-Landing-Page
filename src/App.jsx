import styles from "./style";
import {
  Navbar,
  Hero,
  Services,
  Info,
  DownloadApp,
  Articles,
  Footer,
  Testimonial,
} from "./components";

const App = () => (
  <div className=" bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` bg-slate-50 w-full overflow-hidden ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div>
      <Services />
      <Info />
      <DownloadApp />
      <Testimonial />
      <Articles />
      <Footer />
    </div>
  </div>
);

export default App;
