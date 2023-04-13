import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Spinner,
  Stack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import { useEffect } from 'react'

const ProductScreen = () => {
  const dispatch = useDispatch()

  //Dispatch is a global variable that we can use to dispatch actions.
  //Here we are using it to add products to our store.
  const productList = useSelector(state => state.products)
  const { loading, error, products } = productList

  //Only run this code when the page first loads.
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner
            mt={20}
            thickness='2px'
            speed='0.75s'
            emptyColor='gray.200'
            color='green.500'
            size='xl'
          />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Sorry. An error occured.</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        products.map(product => (
          <WrapItem key={product._id}>
            <Center w='250px' h='550px'>
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  )
}
export default ProductScreen
