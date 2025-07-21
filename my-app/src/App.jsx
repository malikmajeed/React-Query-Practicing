import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ProductsFunction from './components/getAllProducts'
import CreateProduct from './components/createSingleProduct';

const querClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={querClient}>
      <CreateProduct />
      <ProductsFunction />
    </QueryClientProvider>
  )
}

export default App
