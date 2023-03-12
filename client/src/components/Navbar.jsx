import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Icon,
    Text,
    useDisclosure,
    Button,
    useColorModeValue,
    useColorMode,
    Stack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiAngelWings } from "react-icons/gi";

const Navbar = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const { colorMode, setColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <flex h={20} alignItems="center" justifContent="space-between">
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack>
                    <Link as={ReactLink} to="/">
                        <Flex alignItems="center">
                            <Icon as={GiAngelWings} h={6} w={6} color="orange.400" />
                            <Text fontWeight="extrabold" px={2}>
                                {" "}
                                Techno Lines
                            </Text>
                        </Flex>
                    </Link>
                </HStack>
            </flex>
        </Box>
    );
};

export default Navbar;
