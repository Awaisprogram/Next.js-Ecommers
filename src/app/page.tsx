import News from "./components/News";
import OfferSection from "./components/OfferSection";
import ProductCards from "./components/Product";
import SaleSection from "./components/SaleSection";
import Banner from "./components/Slide";
import Main  from "./home/page";

export default function Home() {
  return (
  <>
  <Main/>
  <OfferSection/>
  <SaleSection/>
  <ProductCards/>
  <Banner/>
  <News/>
  </>

  );
}
