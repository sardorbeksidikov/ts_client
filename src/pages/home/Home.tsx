import { Container, Grid, Paper } from "@mui/material";
import Deposits from "./Deposits";
import OrdersBox from "./OrdersBox";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3} mb={5}>
        {/* Xizmatlarga oid malumotlar */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: 240,
              borderRadius: "30px",
            }}
          >
            <Deposits num={423} numL="ta" servisType="Foydalanuvchi" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: 240,
              borderRadius: "30px",
            }}
          >
            <Deposits num={978} numL="ta" servisType="Buyurtma" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: 240,
              borderRadius: "30px",
            }}
          >
            <Deposits num={342} numL="ta" servisType="SMS jo'natildi" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: 240,
              borderRadius: "30px",
            }}
          >
            <Deposits num={4} numL="xil" servisType="Xizmat" />
          </Paper>
        </Grid>

        {/* Buyurtmalar */}
        <Grid item xs={15} width="100%">
          <Paper
            sx={{
              py: 5,
              px: 8,
              pb: 10,
              display: "flex",
              flexDirection: "column",
              borderRadius: "30px",
            }}
          >
            <OrdersBox />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
