import Link from "next/link";
import Router, { useRouter } from "next/router";


function Home() {
    const router = useRouter()
    const handleclick = () =>{
        console.log("Placing your order")
        router.replace('/product')
    }
  return (
    <div>
      <h1>Home Page</h1>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      {/* <Link legacyBehavior href="/product">
        <a> Products</a>
      </Link> <br /> */}
      <br/>
      <button onClick={handleclick} className="order-button" >Place Order</button>
    </div>
  );
}

export default Home;
