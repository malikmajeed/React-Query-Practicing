import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ProductsFunction from './components/products'

const querClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={querClient}>
      <ProductsFunction />
    </QueryClientProvider>
  )
}

export default App
