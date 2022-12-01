import { FC, useCallback, useId, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

import { CharacterCardProps } from "./types";
import { generateGenderPrefix } from "utils/functions";
import Status from "./Status";

const CharacterCard: FC<CharacterCardProps> = (props) => {
  const { name, image, gender, status, species, subSpecies } = props;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageStyle = !isImageLoaded ? { display: "none" } : {};

  const uniqueKey = useId();

  /**
   * @function handleImageLoaded
   * @returns { void }
   */
  const handleImageLoaded = useCallback(() => {
    !isImageLoaded && setIsImageLoaded(true);
  }, [isImageLoaded]);

  return (
    <Grid item key={uniqueKey} xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          borderRadius: 2,
        }}
      >
        {!isImageLoaded && (
          <Skeleton>
            <CardMedia component="img" width={300} height={300} />
          </Skeleton>
        )}
        <CardMedia
          component="img"
          image={image}
          alt={name}
          onLoad={handleImageLoaded}
          sx={imageStyle}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="body1" component="p">
            {generateGenderPrefix(name, gender)}
          </Typography>
          <Status status={status} species={species} subSpecies={subSpecies} />
        </CardContent>
        <Button variant="text" size="medium">
          More Info
        </Button>
      </Card>
    </Grid>
  );
};

export default CharacterCard;