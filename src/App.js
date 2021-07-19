
import {useState, useEffect} from 'react';
import './style.css';
import Epic from './img/epic-logo.png'
import firebase from './firebaseConnection';
import Caixa from './caixa';


function App() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
    const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState({});
 



  async function excluirPost(id){
   await firebase.firestore().collection('post').doc(id)
   .delete()
   .then(()=>{
     alert('Esse post foi excluido!')
   })
  }

  async function novoUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value)=>{
      console.log(value);
    })
    .catch((error)=>{ 
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca..')
      }else if(error.code === 'auth/email-already-in-use'){
        alert('Esse email já existe!');
      }

    })
  }

  async function logout(){
    await firebase.auth().signOut();
  }


  async function fazerLogin(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((value)=>{
      console.log(value.user);
    })
    .catch((error)=>{
      /*console.log('ERRO AO FAZER O LOGIN' + error);*/
      alert('Erro ao fazer o Login,Por favor tente novamente!');
    })
  }

  return (
    <div>
      


      {user && (
        <div>
          <strong>Seja bem vindo! (Você está logado!)</strong> <br/>
          <span>{userLogged.uid} -  {userLogged.email}</span>
          <br/> <br/>
        </div>
      )}

    <div className="container">

      <img src={Epic} />
      <h4>Fazer Login com uma conta da Epic Games</h4>
    
   
      <input 
        type="email"
        placeholder="Endereço de E-mail"
      className="campo" type="text" value={email} onChange={ (e) => setEmail(e.target.value) } /> <br/>

    
      <input 
       type="password"
       placeholder="Senha"
      className="campo" type="password" value={senha} onChange={ (e) => setSenha(e.target.value) } 
      
      /> <br/>
      <Caixa />

      <button onClick={ fazerLogin } >ENTRE NA SUA CONTA AGORA</button>
     {/* <button onClick={ novoUsuario }>Cadastrar</button>
      <button onClick={ logout } >Sair da conta!</button> 
      */}
<span class="politica">Política de Privacidade</span>
<span class="conta">Não tem uma conta da Epic Games? <p class="cadastrar">Cadastrar</p>&nbsp;</span>
<span class="voltar">Voltar para <p class="opções">todas as opções de inscrição</p>&nbsp;</span>

    </div>

    </div>
  );
}

export default App;
