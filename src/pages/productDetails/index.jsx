import { useEffect } from "react"
import { useParams } from "react-router-dom"


const ProductDetails = () => {
  const {id}=useParams()

  async function fetchProductDetails(){
    const apiResponse=await fetch(`https://dummyjson.com/products/${id}`)
    const result= await apiResponse.json()
    console.log(result);
    
  }
  
  useEffect(()=>{
    fetchProductDetails()

  },[id])
  return (
    <div>
      <h2>Proudct Details page</h2>
    </div>
  )
}

export default ProductDetails
