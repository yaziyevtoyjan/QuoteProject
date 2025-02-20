import React, { Fragment, useEffect } from "react";
import {
  Link,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

 useEffect(()=>{
    sendRequest(quoteId);
 },[sendRequest, quoteId])

 if(status ==='pending'){
    return(
        <div className="centered">
            <LoadingSpinner/>
        </div>
    )
 }

 if (error){
    return <p className="centered">{error}</p>
 }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Fragment>
    </div>
  );
};

export default QuoteDetail;
