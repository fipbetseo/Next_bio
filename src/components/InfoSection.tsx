// components/InfoSection.tsx
import { Box, Typography, Grid, Paper } from '@mui/material';

const InfoSection = () => (
  <Box sx={{ py: 5 }}>
    <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
      Why Choose Us?
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">Feature 1</Typography>
          <Typography variant="body1">Description of feature 1.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">Feature 2</Typography>
          <Typography variant="body1">Description of feature 2.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">Feature 3</Typography>
          <Typography variant="body1">Description of feature 3.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default InfoSection;
