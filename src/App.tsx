import { Fragment, useEffect, useId } from "react";
import { useInView } from "react-intersection-observer";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

import AppLayout from "components/layout";
import CharacterCard from "components/ui/card";
import { useGetAllCharacters } from "gql";

function App() {
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllCharacters();

  const { ref, inView } = useInView();
  const uniqueId = useId();

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetching]);

  return (
    <AppLayout>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <span>Error</span>
        ) : (
          <Grid container spacing={2}>
            {data.pages.map((page) => (
              <Fragment key={uniqueId}>
                {page.characters.results.map(
                  ({ name, image, status, species, type, gender }) => (
                    <CharacterCard
                      name={name}
                      image={image}
                      status={status}
                      species={species}
                      subSpecies={type}
                      gender={gender}
                    />
                  )
                )}
              </Fragment>
            ))}
          </Grid>
        )}
        <Box
          ref={ref}
          sx={{ color: "white", width: "100%", textAlign: "center" }}
        >
          {isFetchingNextPage ? (
            <CircularProgress />
          ) : hasNextPage ? (
            "Load Newer"
          ) : (
            "Nothing more to load"
          )}
        </Box>
        <div>
          {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
        </div>
      </Container>
    </AppLayout>
  );
}

export default App;