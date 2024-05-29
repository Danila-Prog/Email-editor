import { Bold, Italic, Underline, Trash2 } from "lucide-react";
import parse from "html-react-parser";
import { emailService } from "../../services/email.server";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEditor } from "./useEditor";

function EmailEditor() {
  const { email, setEmail, ref, updateSelection, applyFormat } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["email editor"],
    mutationFn: () => {
      return emailService.postEmail(email);
    },
    onSuccess() {
      setEmail("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return (
    <>
      {email && (
        <h2
          className="p-3 mt-5 bg-slate-700 rounded-md text-white w-7/12 
          h-20 overflow-y-scroll break-words absolute"
        >
          {parse(email)}
        </h2>
      )}

      <div className="bg-slate-700 p-10 translate-y-40 rounded-md">
        <h1 className="text-5xl mb-8 text-white font-bold">Email editor</h1>

        <textarea
          className="w-96 h-44 p-2 bg-slate-600 rounded-md text-white"
          placeholder="A message in the mail..."
          ref={ref}
          onSelect={updateSelection}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          {email}
        </textarea>

        <div className="mt-5 flex items-center">
          <button onClick={() => setEmail("")}>
            <Trash2 />
          </button>
          <button onClick={() => applyFormat("Bold")}>
            <Bold />
          </button>
          <button onClick={() => applyFormat("Italic")}>
            <Italic />
          </button>
          <button onClick={() => applyFormat("Underline")}>
            <Underline />
          </button>
          <button
            className="ml-14"
            disabled={isPending}
            onClick={() => mutate()}
          >
            Send now
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailEditor;
