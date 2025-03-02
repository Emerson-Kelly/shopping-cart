import {
  Container,
  Heading,
  Button,
  Card,
  Input,
  Stack,
  GridItem,
  SimpleGrid,
  Text,
  Tabs,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import CreditCard from "../assets/credit-card.svg?react";
import AppleLogo from "../assets/apple.svg?react";
import PayPalLogo from "../assets/paypal.svg?react";

export default function Cart() {
  return (
    <Container margin={"2rem auto"}>
      <Heading size="4xl" textAlign={"center"}>
        Checkout
      </Heading>
      <SimpleGrid
        templateColumns={{
          base: "2fr",
          sm: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        padding={'2rem 0 0 0'}
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Container>
            <Card.Root maxW="2xl" margin={"auto"}>
              <Card.Header>
                <Card.Title>Personal Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Stack gap="4" w="full">
                  <Field label="Full Name">
                    <Input />
                  </Field>
                  <Field label="Email">
                    <Input placeholder="me@example.com" />
                  </Field>
                  <Field label="Shipping Address">
                    <Input />
                  </Field>
                </Stack>
              </Card.Body>
              <Card.Header>
                <Card.Title>Payment Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Stack gap="4" w="full">
                  <Field label="Payment Method">
                    <Text></Text>
                    <Tabs.Root
                      variant="enclosed"
                      maxW="md"
                      fitted
                      defaultValue={"tab-1"}
                    >
                      <Tabs.List>
                        <Tabs.Trigger value="tab-1">
                          <CreditCard width={24} height={24} />
                          <Text>Card</Text>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab-3">
                          <PayPalLogo width={24} height={24} />
                          <Text>Paypal</Text>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab-2">
                          <AppleLogo width={24} height={24} />
                          <Text>Apple</Text>
                        </Tabs.Trigger>
                      </Tabs.List>
                    </Tabs.Root>
                  </Field>
                  <Field label="Card Number">
                    <Input placeholder="1234 5678 9012 3456" />
                  </Field>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <Field label="Expiration Date">
                      <Input placeholder="MM/YY" />
                    </Field>
                    <Field label="CVV">
                      <Input placeholder="123" />
                    </Field>
                  </div>
                </Stack>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="solid">Complete Order</Button>
              </Card.Footer>
            </Card.Root>
          </Container>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Card.Root maxW="100%" margin={"auto"}>
            <Card.Header>
              <Card.Title>Order Summary</Card.Title>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Text></Text>
                <Text></Text>
              </Stack>
            </Card.Body>
            <Card.Footer justifyContent="space-between">
              <Text>Total</Text>
              <Text>$$$</Text>
            </Card.Footer>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
