import {FormContainer} from "@/container/FormContainer";
import {User} from "@/store";

export interface SignUpInterface {
    username: string;
    password: string;
}



export class AuthService {
    static async singUp(form: FormContainer<SignUpInterface>): Promise<User|null> {
        //ToDo rewrite when server will ready
        // fetch()
        return new class implements User {
            id = 0;
            name = "User";
        }


    }
}