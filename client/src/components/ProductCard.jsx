import { Flex, Circle, Box, Image, useColorModeValue, Icon, Button, Tooltip, Stack, HStack, Text, Link } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link as ReactLink } from 'react-router-dom'
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
const ProductCard = ({product}) => {
  return (
    <Stack p='2' spacing='3px' bg={useColorModeValue('white', 'gray.800')} minW='240px' h='450px' borderWidth='1px' rounded='lg' shadow='lg' position='relative'>
      {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}
      <Image src={product.image} alt={product.name} roundedTop='lg' />
    </Stack>

  );
}

export default ProductCard