import About from "@/components/About/page";
import Edibles from "@/components/Edibles/page";
import Footer from "@/components/Footer/page";
import MainShop from "@/components/MainShop/page";
import Order from "@/components/Order/page";
import PostShopHeader from "@/components/PostShopHeader/page";
import Products from "@/components/Products/page";
import ShopHeader from "@/components/ShopHeader/page";

const Shop = () => {
   return ( 
      <section className="">
         <ShopHeader />
         <PostShopHeader />
         <MainShop />
         <Products />
         <Edibles />
         <About />
         <Order />
         <Footer />
      </section>
    );
}
 
export default Shop;