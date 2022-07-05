import {
  Box,
  Heading,
  Text,
  Divider,
  Wrap,
  WrapItem,
  LinkBox,
  LinkOverlay,
  Code,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <Box width="80vw" margin="0 auto" paddingY="2rem">
      <Heading as="h1" pb="1rem">
        NextJS basic examples
      </Heading>
      <Text pb="2rem">
        This project has some basic implementations of NextJS functionality
      </Text>
      <Divider />
      <Wrap py="3">
        <WrapItem>
          <Link href="/ssr">
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
            >
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  <Code p="1">getServerSideProps</Code> example:
                </LinkOverlay>
              </Heading>
              <Text>
                If you export a function called{" "}
                <Code p="1">getServerSideProps</Code> (Server-Side Rendering)
                from a page, Next.js will pre-render this page on each request
                using the data returned by getServerSideProps.
              </Text>
            </LinkBox>
          </Link>
        </WrapItem>
        <WrapItem>
          <Link href="/ssg">
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
            >
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  <Code p="1">getStaticProps</Code> example:
                </LinkOverlay>
              </Heading>
              <Text>
                If you export a function called{" "}
                <Code p="1">getStaticProps</Code> (Static Site Generation) from
                a page, Next.js will pre-render this page at build time using
                the props returned by getStaticProps.
              </Text>
            </LinkBox>
          </Link>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default index;
