import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";

import { modalContentContainerStyle } from "./styles";
import { useCloseDetailModal, useDetailModalReducer } from "./slice";
import { useGetCharacterDetail } from "gql";
import { generateGenderPrefix } from "utils/functions";
import Status from "components/ui/card/status/index";

const CharacterDetailModal = () => {
  const { isOpen, characterId } = useDetailModalReducer();
  const { isLoading, data } = useGetCharacterDetail(characterId);
  const handleClose = useCloseDetailModal();

  const {
    name = "",
    image = "",
    gender = "unknown",
    status = "unknown",
    species = "",
    type = "",
    location = { name: "" },
    origin = { name: "" },
    episode = [],
  } = data?.character || {};

  const episodes = episode.map((item) => item.name).join(",");

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      onClose={handleClose}
      open={isOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Card sx={modalContentContainerStyle}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {isLoading ? (
                <Skeleton>
                  <Box width={200}>test</Box>
                </Skeleton>
              ) : (
                <Typography sx={{ typography: { sm: "body1", xs: "body2" } }}>
                  {generateGenderPrefix(name, gender)}
                </Typography>
              )}
              {isLoading ? (
                <Skeleton>
                  <Box width={120}>test</Box>
                </Skeleton>
              ) : (
                <Typography sx={{ typography: { sm: "body1", xs: "body2" } }}>
                  <Status status={status} subSpecies={type} species={species} />
                </Typography>
              )}

              {isLoading ? (
                <Skeleton>
                  <Box width={400}>Last known location:</Box>
                  <Box width={400}>Last known location:</Box>
                </Skeleton>
              ) : (
                <Box mt={2}>
                  <Typography
                    sx={{ typography: { sm: "body1", xs: "body2" } }}
                    color="text.secondary"
                  >
                    Last known location:
                  </Typography>
                  <Typography sx={{ typography: { sm: "body1", xs: "body2" } }}>
                    {location.name}
                  </Typography>
                </Box>
              )}

              {isLoading ? (
                <Skeleton>
                  <Box width={400}>Last known location:</Box>
                  <Box width={400}>Last known location:</Box>
                </Skeleton>
              ) : (
                <Box mt={2}>
                  <Typography
                    sx={{ typography: { sm: "body1", xs: "body2" } }}
                    color="text.secondary"
                  >
                    Origin:
                  </Typography>
                  <Typography
                    sx={{ typography: { sm: "body1", xs: "body2" } }}
                    component="p"
                  >
                    {origin.name}
                  </Typography>
                </Box>
              )}

              {isLoading ? (
                <Skeleton>
                  <Box width={400}>Last known location:</Box>
                  <Box width={400}>Last known location:</Box>
                </Skeleton>
              ) : (
                <Box mt={2}>
                  <Typography
                    sx={{ typography: { sm: "body1", xs: "body2" } }}
                    color="text.secondary"
                  >
                    Episodes:
                  </Typography>
                  <Tooltip title={episodes} sx={{ fontSize: 15 }}>
                    <Typography
                      sx={{
                        maxWidth: 300,
                        typography: { sm: "body1", xs: "body2" },
                      }}
                      noWrap
                      variant="subtitle1"
                      component="div"
                    >
                      {episodes}
                    </Typography>
                  </Tooltip>
                </Box>
              )}
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: { sm: 300, xs: 150 } }}
            height="100%"
            image={image}
            alt={name}
          />
        </Card>
      </Fade>
    </Modal>
  );
};

export default CharacterDetailModal;
