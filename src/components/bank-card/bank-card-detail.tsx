import { ComponentType } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import BugIcon from "@material-ui/icons/BugReport";

import styles from "./bank-card-detail.module.css";

interface BankCardDetailProps {
  tooltipTitle: string;
  icon?: ComponentType<{ className?: string }>;
  detailText: string | number;
}

export default function BankCardDetail({
  tooltipTitle = "Detalle",
  icon: Icon = BugIcon,
  detailText = "Lorem ipsum dolor sit amet",
}: BankCardDetailProps) {
  return (
    <Grid container alignItems="center">
      <Grid item className={styles.detailItemSection}>
        <Tooltip title={tooltipTitle} placement="bottom-start">
          <Icon className={styles.detailIcon} />
        </Tooltip>
      </Grid>
      <Grid item className={styles.detailItemSection}>
        <Typography className={styles.detailText}>{detailText}</Typography>
      </Grid>
    </Grid>
  );
}
