import Navbar from "./components/Navbar/Navbar";
import AddToCartSidebar from "./components/Sidebar/AddToCartSidebar";
import Products from "./pages/AddToCart/Products";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Navbar />

      <section>
        {/* add to cart sidebar */}
        <AddToCartSidebar />

        <div className="w-full h-full">
          {/* products list */}
          <Products />
        </div>
      </section>
    </>
  );
}

export default App;
