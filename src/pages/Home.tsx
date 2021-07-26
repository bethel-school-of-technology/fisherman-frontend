import React from "react";
import {
  TextareaAutosize,
  TextField,
  Typography,
  Box as MuiBox,
  Paper as MuiPaper,
  Grid,
} from "@material-ui/core";
import styled from "styled-components";
import BlogForm from "../components/BlogForm";
import "../images/styles.css";

const SpacingDiv = styled.div`
  padding: 0.5rem;
`;

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Paper = styled(MuiPaper)`
  display: flex  
  padding: 1rem 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

const Home = () => {
  return (
    <Box>
      <PaperBox>
        <Paper>
          <Row>
            <div>
              <Item elevation={3}>
                <BlogForm />
              </Item>
            </div>
            <div>
              <Item elevation={3}>
                <BlogForm />
              </Item>
            </div>
            <div>
              <Item elevation={3}>
                <BlogForm />
              </Item>
            </div>
          </Row>
        </Paper>
      </PaperBox>
    </Box>
  );
};

export default Home;

{
  /* <TextField
          id="paragraph-box"
          label="What is Happening"
          multiline
          rows={5}
          variant="outlined"
        /> */
}
{
  /* <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
            </Grid> */
}
{
  /* <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item> */
}