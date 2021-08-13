import BankCardLayout from "../../components/bank-card/bank-card-layout";

import { useBankData } from "../../contexts/bank-data-context";

export default function BankInfo() {
  const { bankData } = useBankData();

  return <BankCardLayout bankCardsData={bankData} />;
}
