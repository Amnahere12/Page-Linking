import Link from "next/link"

function ProductList() {
    return (<>
        <Link legacyBehavior href="/">
            <a style={{color:'black'}}>Go Back</a>
        </Link>
        <h1>
            <Link href="/product/1">Product 1</Link>
            
        </h1>
        <h1>
            <Link href="/product/2">Product 2</Link>
        </h1>
        <h1>
            <Link href="product/3">Product 3</Link>
        </h1>

    </>
    )

}
export default ProductList