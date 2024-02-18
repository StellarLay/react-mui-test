import { Box, Container } from "@mui/material";
import "./assets/styles/App.css";
import { UserDataList, UserList } from "../widgets/table";

function App() {
  return (
    <Container maxWidth="xl">
      <Box>
        <UserList />
        <UserDataList />
      </Box>
    </Container>
  );
}

export default App;
