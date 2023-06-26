import { useRouter } from 'next/router';

function ProductDetail(){
    const router = useRouter();
    const ProductID = router.query.ProductId;
  
    return <h1>Product Details of {ProductID}</h1>
   
    
}

export default ProductDetail