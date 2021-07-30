import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box as MuiBox, Paper as MuiPaper } from "@material-ui/core";
import BlogForm from "../components/BlogForm";

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paper = styled(MuiPaper)`
  display: flex  
  // flex-direction: column;
  // align-items: center;
  padding: 1rem 3rem;
  margin: 2rem;
  max-width: 85rem;
  // min-width: 85rem;
  `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Item = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

const Blog = () => {
  return (
    <>
      <Box>
        {/* <PaperBox> */}
        <Paper>
          <Row>
            <div>
              <Item elevation={3}>
                <BlogForm />
              </Item>
            </div>
          </Row>
        </Paper>
        {/* </PaperBox> */}
      </Box>
    </>
  );
};

export default Blog;