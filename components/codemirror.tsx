import { useState, useEffect, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { EditorView } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";

const fontSize = EditorView.baseTheme({
  "&": {
    fontSize: "11px",
  },
});

const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#ffffff",
    backgroundImage: "",
    foreground: "#75baff",
    caret: "#5d00ff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#fff",
    gutterForeground: "#8a919966",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

export const Codemirror = () => {
    const [value, setValue] = useState(
      "bc1pgqsp3gdl0qead7u5lwtf3srhk200xjlzaf5ndx2790lm8mznhqps832hly"
    );
    const onChange = useCallback((val, viewUpdate) => {
        console.log("val:", val);
        setValue(val);
    }, []);

  return (
    <CodeMirror
      value={value}
      height="400px"
      theme={myTheme}
      extensions={[fontSize]}
      onChange={onChange}
    />
  );
};
