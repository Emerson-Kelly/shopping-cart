import { Heading, Container, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {

    const navigate = useNavigate();

    return (
      <>
      <Container display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'centers'} margin={'16rem auto'} gap={'3rem'}>
      <Heading margin={'auto'} color={'teal.600'} fontSize={'7xl'}>404 Error</Heading>
      <Button size={'lg'} colorScheme={'teal'} onClick={() => navigate("/")}>Return Home</Button>
      </Container>
      </>
    );
  }
  