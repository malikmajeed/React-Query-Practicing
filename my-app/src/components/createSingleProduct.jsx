import React from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const CreateProduct = () => {

    const product = {
        title:'Mac 2020',
        price: 30000
    }
    

// function for adding product
const AddProduct = async(product)=>{
    try{
        const res = await axios.post('https://dummyjson.com/products/add', product);
        return res.data;
    }catch(error){
        console.log(`Error occured adding product: ${error}`)
    }
}


const mutation = useMutation({
    mutationFn:AddProduct,}
)

if(mutation.isPending){
    return <h2> Loading .....</h2>
}

if(mutation.isSuccess){
   return <h2>Product Created Successfully</h2>
}
return (

    <div>
        <h1>Create a Product</h1>
        <button onClick={()=>mutation.mutate(product)}>Add Product</button>


    </div>
  )
}

export default CreateProduct