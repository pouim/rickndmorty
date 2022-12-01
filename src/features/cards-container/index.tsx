import { FC, Fragment, useId } from "react";
import { Grid, Skeleton } from "@mui/material";

import CharacterCard from "components/ui/card";
import { CardsContainerProps } from "./types";

const CardsContainer: FC<CardsContainerProps> = (props) => {
  const { isInitialLoading, pages } = props;

  const uniqueId = useId();
  return (
    <Grid container spacing={2}>
      {isInitialLoading &&
        Array(5)
          .fill(1)
          .map((item) => (
            <Skeleton>
              <CharacterCard
                id=""
                name=""
                image=""
                status="Alive"
                species=""
                subSpecies=""
                gender="Male"
              />
            </Skeleton>
          ))}

      {pages.map((page) => (
        <Fragment key={uniqueId}>
          {page.characters.results.map(
            ({ id, name, image, status, species, type, gender }) => (
              <CharacterCard
                id={id}
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
  );
};

export default CardsContainer;
