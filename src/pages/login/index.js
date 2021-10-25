import React, { Component } from 'react';
import './index.css'
import './util.css'
import firebase from '../../firebaseConnection';


class Login extends Component {

    
    
    constructor(props){
        const [user, setUser] = useState({});
        super(props);
        this.state = {
            form: {
                email: "",
                password: ""
            }
        }

        this.loginData = this.loginData.bind(this);
        this.btEntrarClick = this.btEntrarClick.bind(this);
    }

    

    loginData(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    login(){
        const [user, setUser] = useState({});
        firebase.auth().signInWithEmailAndPassword(this.state.form.email, this.state.form.password)
        .then(async (value)=>{
          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .get()
          .then((snapshot)=>{
            setUser({                
              nome: snapshot.data().nome,
              username: snapshot.data().username,
              birthDate: snapshot.data().birthDate,
              email: value.user.email
              
            });
    
          })
    
    
        })
        .catch((error)=>{
          console.log('ERRO AO LOGAR' + error)
        })
    
      }

    

    btEntrarClick(){
        let username = this.state.form.email;
        let password = this.state.form.password;
        alert("user: " + this.state.form.email + " password: " + this.state.form.password)
    }

    render(){
        return(
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <div class="login100-form validate-form flex-sb flex-w">
                            <span class="login100-form-title p-b-32">
                                INFINITE
                            </span>

                            <span class="txt1 p-b-11">
                                Usuário
                            </span>
                            <div class="wrap-input100 validate-input m-b-36" data-validate = "Digite o e-mail">
                                <input class="input100" type="text" name="username" placeholder="Usuário" id="tUsername"
                                        value={this.state.form.username} onChange={this.loginData} />
                                <span class="focus-input100"></span>
                            </div>
                            
                            <span class="txt1 p-b-11">
                                Senha
                            </span>
                            <div class="wrap-input100 validate-input m-b-12" data-validate = "Digite a senha">
                                <span class="btn-show-pass">
                                    <i class="fa fa-eye"></i>
                                </span>
                                <input class="input100" type="password" name="password" placeholder="Senha"  id="tPassword"
                                        value={this.state.form.password} onChange={this.loginData} />
                                <span class="focus-input100"></span>
                            </div>
                            
                            <div class="flex-sb-m w-full p-b-48">
                                <div class="contact100-form-checkbox">
                                    <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label class="label-checkbox100" for="ckb1">
                                        Lembrar-me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" class="txt3">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" onClick={this.btEntrarClick}>
                                    Entrar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;