import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface Bank {
  bankName: string;
  description: string;
  age: number;
  url: string;
}

export interface BankDataState {
  bankData: Bank[];
}

export interface BankDataContextType extends BankDataState {
  setBankData: Dispatch<SetStateAction<Bank[]>>;
}

export const bankDataInitialState: BankDataContextType = {
  bankData: [],
  setBankData: () => {},
};

export const bankDataContext =
  createContext<BankDataContextType>(bankDataInitialState);

export const useBankData = () => useContext(bankDataContext);
