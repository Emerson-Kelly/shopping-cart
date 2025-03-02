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
  Flex,
  Image
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import CreditCard from "../assets/credit-card.svg?react";
import AppleLogo from "../assets/apple.svg?react";
import PayPalLogo from "../assets/paypal.svg?react";
import { useCart } from "../context/CartContext";

export default function Cart() {

  return (
    <Container margin={"2rem auto"}>
      <Heading size="3xl" textAlign={"center"}>
        Checkout
      </Heading>
      <SimpleGrid
  columns={{ base: 1, md: 3 }} // 1 column on mobile, 3 on larger screens
  gap={6}
  padding={'2rem 0 0 0'}
  templateAreas={{
    base: `"summary" "checkout"`, // Mobile: Order Summary first
    md: `"checkout checkout summary"`, // Desktop: Order Summary on the right
  }}
>
  {/* Order Summary - Shows First on Mobile */}
  <GridItem area={"summary"}>
    <Card.Root maxW="100%" margin={"auto"}>
      <Card.Header>
        <Card.Title>Order Summary</Card.Title>
      </Card.Header>
      <OrderSummary />
    </Card.Root>
  </GridItem>

  {/* Checkout Form */}
  <GridItem area={"checkout"}>
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
  </GridItem>
</SimpleGrid>

    </Container>
  );
}

function OrderSummary() {
    const { cartData } = useCart();
    console.log(cartData);

    return (
        <>
        <Card.Body>
        <Stack gap="4" w="full">
        {cartData.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cartData.map((item) => (
          <Flex key={item.id} justify="space-between" align="center" mb={3} gap={'1rem'}>
            <Image src={item.image} alt={item.title} boxSize="50px" objectFit={'contain'}/>
            <Text flex="1" ml={3}>{item.title}</Text>
            <Text fontWeight="bold">${item.price.toFixed(2)}</Text>
            <Text> x {item.quantity}</Text>
          </Flex>
        ))
      )}
        
        </Stack>
      </Card.Body>
           <Card.Footer justifyContent="space-between">
           <Text fontSize="xl" fontWeight="bold" mt={4}>
        Total: ${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
      </Text>
         </Card.Footer>
         </>
    );

}
