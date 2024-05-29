import EmailEditor from "./email-editor/EmailEditor"
import { EmailList } from "./email-list/EmailList"

export const Home = () =>{
    return(
      <div className="flex mb-16 justify-center ">
            <EmailEditor />

            <EmailList />
        </div>
    )
}