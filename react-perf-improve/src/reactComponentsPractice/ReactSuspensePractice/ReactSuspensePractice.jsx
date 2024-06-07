import React, { Suspense } from "react";
import Albums from "./Albums";

function Loading() {
  return <h1>Loading....</h1>;
}

export default function ReactSuspensePractice() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Albums />
      </Suspense>
    </div>
  );
}
