import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import SloganIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import AgeIcon from "@material-ui/icons/HistoryRounded";

import BankCardDetail from "./bank-card-detail";

import BankPlaceholder from "../../assets/images/bank-image-placeholder.png";

import styles from "./bank-card.module.css";

import { useBankData } from "../../contexts/bank-data-context";

export default function BankCard() {
  const { bankData } = useBankData();

  return (
    <Paper>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            className={styles.bankCardSection}
            alignItems="center"
          >
            <Grid item>
              <img
                // src={bankData[0].url}
                src={BankPlaceholder}
                alt={bankData[0].bankName}
                className={styles.bankCardImage}
              />
            </Grid>
            <Grid item className={styles.bankCardTitleContainer}>
              <Typography className={styles.bankCardTitle}>
                {bankData[0].bankName}
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
                detailText={bankData[0].description}
              />
            </Grid>
            <Grid item className={styles.detailItem}>
              <BankCardDetail
                tooltipTitle="Antigüedad"
                icon={AgeIcon}
                detailText={bankData[0].age}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
