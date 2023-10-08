import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";



export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor:'#F7F9FC',
        p: 6,
      }}
      component="footer"
    >
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="#009357" href="#">
            BookMate
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}