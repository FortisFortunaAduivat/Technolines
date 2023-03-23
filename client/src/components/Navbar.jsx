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

const links = [
    { linkName: "Products", link: "/products" },
    { linkName: "ShoppingCart", link: "/cart" },
];

const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        to={path}
        px={2}
        py={2}
        rounded="md"
        _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray-700") }}
    >
        {children}
    </Link>
);
const Navbar = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const { colorMode, setColorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={20} alignItems="center" justifyContent="space-between">
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
                    <HStack>
                        {links.map((link) => (
                            <NavLink key={link.linkName} path={link.linkPath}>
                                {link.linkName}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems="center">
                    <NavLink>
                        <Icon
                            as={colorMode === "light" ? MoonIcon : SunIcon}
                            alignSelf="center"
                            onClick={() => toggleColorMode()}
                        />
                    </NavLink>
                    <Button as={ReactLink} to="/login" p={2} fontSize="sm" fontWeight={400} variant="link">
                        Sing-in
                    </Button>
                    <Button
                        as={ReactLink}
                        to="/registration"
                        m={2}
                        fontSize="sm"
                        fontWeight={700}
                        _hover={{ bg: "blue.400" }}
                        bg="blue.500"
                        color={"white"}
                    >
                        Sing-up
                    </Button>
                </Flex>
            </Flex>
            {isOpen ? <Box pb={4} display={{ md: "none" }}></Box> : null}
        </Box>
    );
};

export default Navbar;
