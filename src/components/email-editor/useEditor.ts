import { useRef, useState } from "react";
import { Tstyle, applyStyle } from "../apply-style";

export const useEditor = () => {
  const [email, setEmail] = useState("");
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const ref = useRef<HTMLTextAreaElement>(null);

  const updateSelection = () => {
    if (!ref.current) return;
    setSelectionStart(ref.current.selectionStart);
    setSelectionEnd(ref.current.selectionEnd);
  };

  const applyFormat = (type: Tstyle) => {
    const selectedText = email.substring(selectionStart, selectionEnd);

    if (!selectedText) return;

    const before = email.substring(0, selectionStart);

    const after = email.substring(selectionEnd);

    setEmail(before + applyStyle(type, selectedText) + after);
  };
  return {email, setEmail, ref, updateSelection, applyFormat};
};
