import { Code, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";

type Props = {
  emojis: EmojiT[];
};

type EmojiT = {
  name: string;
  category: string;
  group: string;
  htmlCode: any[];
  unicode: string[];
};

export default function Home({ emojis }: Props) {
  return (
    <Container pt="5">
      <Text my="5">
        This page makes a server-side fetch to get repositories and add to the
        component props.
      </Text>

      <Text>Even if you disable javascript, the data still appears.</Text>
      <Wrap p="5">
        {emojis.map((item) => (
          <WrapItem as="span" key={item.name}>
            <Code
              p="1"
              m="1"
              w="35px"
              h="35px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              dangerouslySetInnerHTML={{ __html: item.htmlCode[0] }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://emojihub.herokuapp.com/api/all/category_food_and_drink"
  );

  const data = await response.json();

  return {
    props: {
      emojis: data ?? [],
    },
  };
};
