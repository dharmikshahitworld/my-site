import React, { FC } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage: FC<object> = () => {
  const error: any = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
