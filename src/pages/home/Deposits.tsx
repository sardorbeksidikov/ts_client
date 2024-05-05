import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

type DepositsProps = {
    num: number
    numL: string,
    servisType: string
}

const Deposits = ({ num, numL, servisType }: DepositsProps) => {
  return (
    <Box sx={{ borderRadius: "25px" }}>
      <Typography component="p" variant="h4" sx={{ color: "#0456d1" }}>
        {num} {numL}
      </Typography>
      <Typography variant="h6" sx={{ flex: 1, fontWeight: 600 }}>
        {servisType}
      </Typography>
    </Box>
  );
};

export default Deposits;
