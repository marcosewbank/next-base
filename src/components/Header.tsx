import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <Container mt="5">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
};
