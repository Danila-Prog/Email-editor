import { useQuery } from "@tanstack/react-query";
import { emailService } from "../../services/email.server";
import parse from "html-react-parser";

export const EmailList = () => {
  const { data } = useQuery({
    queryKey: ["email list"],
    queryFn: () => {
      return emailService.getEmail();
    },
  });
  
  return (
    <>
    <div className="bg-slate-700 ml-20 w-96 break-words px-4 py-8 text-white translate-y-40 rounded-xl" >
      {data?.map((email) => (
        <h1 key={email.text} className="mb-3 p-3 rounded-md bg-slate-600">{parse(email.text)}</h1>
      ))}
    </div>
    </>
  );
};
