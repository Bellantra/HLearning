import React, { useState } from "react";
import { loadState, removeState } from "../../localStorage";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card.jsx";
import { Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Cart() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  }));

  const [remove, setRemove] = useState(false);
  const cart = loadState();

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Paper elevation={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                m: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  /*  background:
                    "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(9,73,121,0.9948354341736695) 76%, rgba(0,212,255,1) 100%)",
                  p: 10,
                  borderRadius: 3,
                  gap: 2, */
                }}
              >
                {cart.length > 0 ? (
                  /* <div> */
                  <Grid container direction="column" justifyContent="center">
                    {cart.map((course) => {
                      return (
                        <div key={course._id}>
                          <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Item sx={{ minWidth: 500 /* , maxWidth: 300 */ }}>
                              <Card
                                id={course._id}
                                title={course.title}
                                image={course.img}
                                description={course.description}
                                score={course.score}
                                price={course.price}
                                course={course}
                              />
                              <button
                                onClick={() => {
                                  removeState(course);
                                  setRemove(!remove);
                                }}
                              >
                                X
                              </button>
                              {/* <IconButton>
                                <DeleteForeverIcon
                                  color="secondary"
                                  onClick={() => {
                                    removeState(course);
                                    setRemove(!remove);
                                  }}
                                />
                              </IconButton> */}
                            </Item>
                          </Grid>
                        </div>
                      );
                    })}
                  </Grid>
                ) : (
                  /*  </div> */
                  <h1>Empty Cart</h1>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: 450,
                }}
              >
                <Typography
                  textAlign="center"
                  variant="h5"
                  color="text.primary"
                >
                  <b>Total:</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
