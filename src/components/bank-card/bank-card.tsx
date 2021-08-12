import { useBankData } from "../../contexts/bank-data-context";

export default function BankCard() {
  const { bankData } = useBankData();

  return <div>{bankData[0].bankName}</div>;
}
