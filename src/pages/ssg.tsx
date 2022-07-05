import { Badge, Box, Button, Container, Link, Text } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

type Props = {
  date: string;
};

export default function ssg({ date }: Props) {
  return (
    <Container pt="5">
      <Box as="time" fontSize="2rem">
        Generated at: <Badge fontSize="1.5rem">{date}</Badge>
      </Box>
      <Text mt="5">
        This page is generated automatically each 60 seconds, to force the
        regeneration click:{" "}
        <Link href="/api/revalidate" target="_blank">
          <Button>HERE</Button>
        </Link>{" "}
        (it only works on build mode)
      </Text>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toLocaleTimeString("en-US"),
    },
    revalidate: 60,
  };
};
