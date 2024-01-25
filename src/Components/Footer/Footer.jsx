import React from 'react';
import { Flex, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Flex
            align="center"
            justify="center"
            direction="column"
            bg="gray.900"
            color="white"
            p={4}
            mt={8}
        >
            <VStack spacing={4}>
                <Text fontSize="lg">Mis redes:</Text>
                <Flex>
                    <Link href="https://github.com/MarianoDiazz" isExternal>
                        <Icon as={FaGithub} boxSize={6} mr={2} />
                    </Link>
                    <Link href="https://linkedin.com/in/mariano-diaz-562243242/" isExternal>
                        <Icon as={FaLinkedin} boxSize={6} mr={2} />
                    </Link>
                    <Link href="https://instagram.com/marianodiaz97" isExternal>
                        <Icon as={FaInstagram} boxSize={6} />
                    </Link>
                </Flex>
            </VStack>
            <Text mt={4}>Correo: marianod97@hotmail.com</Text>
        </Flex>
    );
};

export default Footer;
