import BankDataProvider from "./bank-data-provider";

export default function Providers({ children }: { children: any }) {
  return <BankDataProvider> {children} </BankDataProvider>;
}
