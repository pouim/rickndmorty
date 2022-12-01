import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box, CircularProgress, Container } from "@mui/material";

import AppLayout from "components/layout";
import { useGetAllCharacters } from "gql";
import CardsContainer from "features/cards-container";

function App() {
  const {
    isInitialLoading,
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllCharacters();

  const { ref, inView } = useInView();

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
          <CardsContainer
            isInitialLoading={isInitialLoading}
            pages={data.pages}
          />
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
