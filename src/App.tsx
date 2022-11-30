import { Container, Grid } from "@mui/material";

import AppLayout from "components/layout";
import CharacterCard from "components/ui/card";
import { useGetAllCharacters } from "gql";

function App() {
  const { data } = useGetAllCharacters();

  return (
    <AppLayout>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={2}>
          {data?.characters.results?.map((result) => (
            <CharacterCard
              name={result.name}
              image={result.image}
              status={result.status}
              species={result.species}
              subSpecies={result.type}
              gender={result.gender}
            />
          ))}
        </Grid>
      </Container>
    </AppLayout>
  );
}

export default App;
