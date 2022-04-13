import { AddIcon } from "@chakra-ui/icons"
import { Box, IconButton, Center, Flex, HStack, Icon, Image, Text} from "@chakra-ui/react"
import { FiLayers } from 'react-icons/fi'
import NumberFormat from "react-number-format"

function Product({
    image,
    imageAlt,
    nama,
    harga,
    stok,
    deskripsi,
    onAddToCart
}) {

    return (
        <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'>
            <Center
                backgroundColor={'white'}>
                <Image
                    src={image}
                    alt={imageAlt}
                    boxSize={'300px'}
                    objectFit={'contain'} />
            </Center>
            <div class="card-body ">

                <Flex>
                    <Flex>
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>

                        </ul>
                    </Flex>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        justify={'flex-end'}>
                        <HStack
                        >
                            <Icon as={FiLayers} />
                            <Text>{stok}</Text>
                        </HStack>
                    </Flex>
                </Flex>
                <br></br>
                <Box
                    mt=''
                    as='h4'
                    lineHeight='tight'
                >
                    {nama}
                </Box>

                <p>----</p>

                <Box
                    mt=''
                    as='h4'
                    lineHeight='tight'
                    fontSize={14}
                >
                    {deskripsi}
                </Box>
                <Flex
                    alignItems={'center'}
                    mt={2}>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Box>
                            <Text
                                fontSize={'xl'}
                                fontWeight='semibold'>
                                <NumberFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                            </Text>
                        </Box>
                    </Flex>

                </Flex>

                <Flex
                    justify={'flex-end'}
                    mt={6}>
                    <IconButton
                        colorScheme={'orange'}
                        aria-label='Add to Cart'
                        icon={<AddIcon />}
                        onClick={onAddToCart} />
                </Flex>

            </div>
        </Box>
    )
}

export default Product