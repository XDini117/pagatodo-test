import { ReactNode, useState, useEffect } from "react";
import axios from "axios";

import {
  bankDataContext,
  bankDataInitialState,
} from "../contexts/bank-data-context";

interface BankDataProps {
  children: ReactNode;
}

export default function BankDataProvider({ children }: BankDataProps) {
  const [bankData, setBankData] = useState(bankDataInitialState.bankData);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        setBankData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const value = {
    ...bankDataInitialState,
    bankData,
    setBankData,
  };

  return (
    <bankDataContext.Provider value={value}>
      {children}
    </bankDataContext.Provider>
  );
}
