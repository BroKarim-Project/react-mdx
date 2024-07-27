import { codeToHtml } from "shiki";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import { useState } from "react";

export const Code = ({ children }) => {
  const code = children?.props.children;
  const className = children?.props.className;
  const languageMatch = className ? className.match(/language-(.+)/) : null;
  const language = languageMatch ? languageMatch[1] : "";

  const [html, setHtml] = useState("");

  codeToHtml(code, {
    lang: language,
    theme: "poimandres",
    transformers: [transformerNotationDiff(), transformerNotationHighlight()],
  }).then(setHtml);

  return (
    <div className="mt-5" dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  );
};
