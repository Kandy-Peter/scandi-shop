import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from './data'

const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_PRODUCTS);

  return {
    error,
    data,
    loading
  }
}

export default useCharacters;