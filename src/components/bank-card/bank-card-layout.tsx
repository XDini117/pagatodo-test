import Grid from "@material-ui/core/Grid";

import BankCard, { BankCardData } from "./bank-card";

interface BankCardLayoutProps {
  bankCardsData: BankCardData[];
}

export default function BankCardLayout({ bankCardsData }: BankCardLayoutProps) {
  return (
    <Grid container spacing={1}>
      {bankCardsData.map((bank, i) => (
        <Grid key={i} item xl={3} md={4} sm={6} xs={12}>
          <BankCard bank={bank} />
        </Grid>
      ))}
    </Grid>
  );
}
