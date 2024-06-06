import React, { useState } from "react";
import Greeting from "./Greeting";
import Page from "./Page";

export default function MemoizationPractice() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />

      <Page />
    </>
  );
}
