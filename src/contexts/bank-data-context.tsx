import { createContext, useContext, Dispatch, SetStateAction } from "react";

export interface Bank {
  bankName: string;
  description: string;
  age: number;
  url: string;
}

interface BankDataState {
  bankData: Bank[];
}

interface BankDataContextType extends BankDataState {
  setBankData: Dispatch<SetStateAction<Bank[]>>;
}

export const bankDataInitialState: BankDataContextType = {
  bankData: [{ bankName: "", description: "", age: 0, url: "" }],
  setBankData: () => {},
};

export const bankDataContext =
  createContext<BankDataContextType>(bankDataInitialState);

export const useBankData = () => useContext(bankDataContext);
