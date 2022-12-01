import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, CircularProgress, Container } from "@mui/material";

import AppLayout from "components/layout";
import { useGetAllCharacters } from "gql";
import CardsContainer from "features/cards-container";
import SearchBar from "components/ui/search-bar";

function App() {
  const [name, setName] = useState("");

  const {
    isInitialLoading,
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useGetAllCharacters(name);

  const { ref, inView } = useInView();

  /**
   * @function handleSearch
   * @param { React.ChangeEvent<HTMLInputElement> } event
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchKeyWord = event.target.value;
    setName(searchKeyWord);
  };

  useEffect(() => {
    refetch();
  }, [name, refetch]);

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetching]);

  return (
    <AppLayout>
      <Box
        sx={{
          pt: 4,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <SearchBar onChange={handleSearch} placeHolder='Search character by name ...' />
        </Container>
      </Box>
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
            <Box height={400}>Not Found!</Box>
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
