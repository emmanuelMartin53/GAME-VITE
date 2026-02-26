import Header from "./Header";
import Games from "./Games";
import Footer from "./Footer";

import "./home.scss";




const HomePage = () => {
  return(
    <div className="homePage">
      <Header />
      <Games />
      <Footer />
    </div>
  )
}
export default HomePage;
