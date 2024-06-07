import React from "react";
import { fetchData } from "./data";

export default function Albums() {
  const albums = use(fetchData("/albums"));
  return (
    <ul>
      {/* {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))} */}
    </ul>
  );
}

function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";

    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
