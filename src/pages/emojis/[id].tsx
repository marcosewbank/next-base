import { Badge, Box, Code, Container, Divider, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  data: EmojiT;
}

type EmojiT = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
  date: string;
};

export default function Page({
  data: { date, name, htmlCode, unicode, group, category },
}: Props) {
  return (
    <Container pt="5">
      <Text mt="5" mb="6">
        This is a Generated page with Dynamic Routes, each emoji has a pre
        rendered page :D
      </Text>
      <Box as="time" fontSize="2rem" mb="4">
        Generated at: <Badge fontSize="1.5rem">{date}</Badge>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" mt="5">
        <Code
          p="1"
          m="1"
          w="100px"
          h="100px"
          fontSize="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          dangerouslySetInnerHTML={{ __html: htmlCode[0]! }}
        />
        <Text display="flex">
          <Text fontWeight="bold" mr="2">
            name:
          </Text>
          {name}
        </Text>
        <Text display="flex">
          <Text fontWeight="bold" mr="2">
            group:
          </Text>
          {group}
        </Text>
        <Text display="flex">
          <Text fontWeight="bold" mr="2">
            category:
          </Text>
          {category}
        </Text>
        <Text display="flex">
          <Text fontWeight="bold" mr="2">
            unicode:{" "}
          </Text>
          {unicode.map((code) => (
            <Code key={code}>{code}</Code>
          ))}
        </Text>
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://emojihub.herokuapp.com/api/all/category_food_and_drink"
  );
  const data = await response.json();

  const paths = data?.map(({ name }: EmojiT) => {
    return {
      params: {
        id: name.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    "https://emojihub.herokuapp.com/api/all/category_food_and_drink"
  );

  const data = await response.json();

  const { name, category, group, htmlCode, unicode } = data?.find(
    (emoji: EmojiT) => emoji.name === context.params?.id
  );

  const fetchedData =
    {
      name,
      category,
      group,
      htmlCode,
      unicode,
      date: new Date().toLocaleTimeString("en-US"),
    } ?? null;

  return {
    props: {
      data: fetchedData,
    },
    revalidate: 60,
  };
};
