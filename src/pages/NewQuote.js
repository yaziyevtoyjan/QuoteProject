import React, { useEffect } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const { sendRequest, status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(()=>{
    if(status === 'completed'){
        history.push('/quotes');
    }
  },[status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <div>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
