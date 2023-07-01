import {v4 as uuidv4} from 'uuid';
import {createHash} from 'crypto';


export class Usuario {
    private id : string
    private login : string
    private senha : string

    constructor (id : string, login : string, senha : string) {
        
        this.id = id ?? uuidv4();
        this.login = login;
        this.senha = createHash('sha256').update(senha).digest('hex');
    }

    public getId(){
        return this.id;
    }

    public getLogin(){
        return this.login;
    }

    public setLogin(login : string){
        this.login = login;
    }

    public getSenha(){
        return this.senha;
    }

    public setSenha(senha : string){
        this.senha = createHash('sha256').update(senha).digest('hex');
    }


}