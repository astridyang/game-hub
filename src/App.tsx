import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="lightblue">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightpink">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
