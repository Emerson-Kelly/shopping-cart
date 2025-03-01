import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Heading,
  Stack,
  Container,
  Grid,
  Icon,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Flex,
} from "@chakra-ui/react";
import { LuTags } from "react-icons/lu";

function DisplayProductCards({ image, title, description, price, id }) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={image}
        alt={title}
        objectFit={"contain"}
        maxHeight={"180px"}
        height={"100%"}
        margin={"2rem 2rem 0 2rem"}
      />
      <Card.Body
        gap="2"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Card.Title textStyle={"md"}>{title}</Card.Title>
        <Flex gap="4" direction="column">
          <Stack width="full" maxW="400px">
            <AccordionRoot collapsible defaultValue={["info"]}>
              <AccordionItem key={id} value={id}>
                <AccordionItemTrigger>
                  <Icon fontSize="lg" color="fg.subtle">
                    <LuTags />
                  </Icon>
                  <Text textStyle="md" cursor={"pointer"}>
                    Product Info
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent padding={"0 0 1rem 0"}>
                  {description}
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
          </Stack>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            ${price}
          </Text>
        </Flex>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
}

async function fetchDisplayProductCards() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
}

export default function Shop() {
  console.log("DisplayProductCards:", DisplayProductCards);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDisplayProductCards();
      setProducts(data);
      console.log(data);
    }
    loadData();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <DisplayProductCards
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <Text>Loading products...</Text>
        )}
      </Grid>
    </Container>
  );
}
