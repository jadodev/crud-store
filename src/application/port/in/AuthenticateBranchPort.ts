import { LoginDTO } from "src/application/dto/AuthDto";

export interface AuthenticateBranchPort {
    authenticate(login: LoginDTO): Promise<string | null>;
}
