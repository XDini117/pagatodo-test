import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import SloganIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import AgeIcon from "@material-ui/icons/HistoryRounded";

import BankCardDetail from "./bank-card-detail";

import BankPlaceholder from "../../assets/images/bank-image-placeholder.png";

import styles from "./bank-card.module.css";

import { Bank } from "../../contexts/bank-data-context";

export interface BankCardData extends Omit<Bank, "url"> {
  url?: string;
}

const bankCardLoadingData: BankCardData = {
  bankName: "Cargando...",
  description: "",
  age: 0,
  url: BankPlaceholder,
};

interface BankCardItemProps {
  bank: BankCardData;
}

export default function BankCard({
  bank = bankCardLoadingData,
}: BankCardItemProps) {
  return (
    <Paper elevation={0} className={styles.bankCardContainer}>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            className={styles.bankCardSection}
            alignItems="center"
          >
            <Grid item>
              <img
                // src={bank.url}
                src={BankPlaceholder}
                alt={bank.bankName}
                className={styles.bankCardImage}
              />
            </Grid>
            <Grid item className={styles.bankCardTitleContainer}>
              <Typography className={styles.bankCardTitle}>
                {bank.bankName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={styles.bankCardDivider} />
        <Grid item>
          <Grid container direction="column" className={styles.bankCardSection}>
            <Grid item className={styles.detailItem}>
              <Typography className={styles.detailTitle}>
                Detalles del banco
              </Typography>
            </Grid>
            <Grid item className={styles.detailItem}>
              <BankCardDetail
                tooltipTitle="Slogan"
                icon={SloganIcon}
                detailText={bank.description}
              />
            </Grid>
            <Grid item className={styles.detailItem}>
              <BankCardDetail
                tooltipTitle="Antigüedad"
                icon={AgeIcon}
                detailText={bank.age}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
