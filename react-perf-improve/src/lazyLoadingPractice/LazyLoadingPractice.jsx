import React, { Suspense, lazy, useState } from "react";
import Loading from "./Loading";

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const MarkdownPreview = lazy(() => {
  return delayForDemo(import("./MarkdownPreview"));
});

export default function LazyLoadingPractice() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");

  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />

      <Suspense fallback={<Loading />}>
        <h2>Preview</h2>
        <MarkdownPreview markdown={markdown} />
      </Suspense>
    </>
  );
}
