"use client";

import React, { FormEvent, useState } from "react";

export function NameReverser() {
  const [name, setName] = useState("");
  const [reversedName, setReversedName] = useState("");

  const reverse = (e: FormEvent) => {
    e.preventDefault();
    let reversedName = "";
    for (let i = name.length - 1; i >= 0; i--) {
      reversedName += name[i];
    }
    setReversedName(reversedName);
  };

  return (
    <form>
      <div>
        <input
          required
          type="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={reverse}>reverse</button>
        {reversedName && <div>Reversed: {reversedName}</div>}
      </div>
    </form>
  );
}
