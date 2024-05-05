import * as React from "react";
import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const OrdersBox = () => {
  return (
    <React.Fragment>
      <Box width="87%">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Buyurtmalar:
          </Typography>
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              defaultValue="month"
            >
              <MenuItem value="month">Oylik</MenuItem>
              <MenuItem value="year">Yillik</MenuItem>
              <MenuItem value="full-time">Butun davr</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            rowGap: "20px",
            mt: 4,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Barchasi
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              423 ta
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Tayyor
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              423 ta
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Tozalanmoqda
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              423 ta
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Olib ketildi
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              423 ta
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default OrdersBox;
