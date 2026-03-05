import Header from "./Header";
import Games from "./Games";
import Footer from "./Footer";
import Menu from "./Menu"

import "./home.scss";




const HomePage = () => {
  return(
    <div className="homePage">
      <Header />
      <Menu />
      <Games />
      <Footer />
    </div>
  )
}
export default HomePage;
