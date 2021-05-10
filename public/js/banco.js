//conexão

const firebaseConfig = {
    apiKey: "AIzaSyClKM0SzzHLf9yLjcw4p2oSz4HXpJ40wIg",
    authDomain: "controledeponto---mv.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "controledeponto---mv",
    storageBucket: "controledeponto---mv.appspot.com",
    messagingSenderId: "222541625926",
    appId: "1:222541625926:web:310e7e5a6dbb9a95b3a847",
    measurementId: "G-6WN6D4Q4P5"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
 


//escolhendo o firesore = banco de dados

var db = firebase.firestore();


//ler dados

function ler(userId){

 db.collection("frequencias").where("userId", "==", userId).onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){

        if(changes.type === "added"){

            const documento = changes.doc

            const dados = documento.data()
            
            criarItensTabela(dados)
                       
        }

        else if (changes.type === "modified"){
            
            
        }

        else if(changes.type === "removed"){
            
        }




    })
    
 })
}

function criarItensTabela(dados){
    
    var tabela = document.getElementById("tabela")
    const linha = tabela.insertRow()
    
    

    const colunaDia = linha.insertCell(0)
    const colunaMes = linha.insertCell(1)
    const colunaHoras = linha.insertCell(2)
    const colunaDescricao = linha.insertCell(3)

    const itemDia = document.createTextNode(dados.dia)
    const itemMes = document.createTextNode(dados.mes)
    const itemHoras = document.createTextNode(dados.horas)
    const itemDescricao = document.createTextNode(dados.descricao)


    //mesRelaorio.appendChild(itemMes)
    colunaDia.appendChild(itemDia)
    colunaMes.appendChild(itemMes)
    colunaHoras.appendChild(itemHoras)
    colunaDescricao.appendChild(itemDescricao)




    }
    var data = new Date();
        
        var dia  = data.getDate(); 

        var mes = data.getMonth(); 
        
        if(  mes === 0){
            mes = "janeiro"
        }
         else if (mes === 1){
             mes = "Fevereiro"
         }
         else if (mes === 2){
            mes = "Março"
        }
        else if (mes === 3){
            mes = "Abril"
        }
        else if (mes === 4){
            mes = "Maio"
        }
        else if (mes === 5){
            mes = "Junho"
        }
        else if (mes === 6){
            mes = "Julho"
        }
        else if (mes === 7){
            mes = "Agosto"
        }
        else if (mes === 8){
            mes = "Setembro"
        }
        else if (mes === 9){
            mes = "Outubro"
        }
        else if (mes === 10){
            mes = "Novembro"
        }
        else if (mes === 11){
            mes = "Dezembro"
        }
 
    document.getElementById("mis").innerText = mes;

    function sessao(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        //alert("ta logado")
        console.log(user.displayName)
        console.log(user.uid)

        var userId = user.uid;
        adicionarDadosBanco(userId)
        

        } else {
          console.log("não")
          // No user is signed in.
        }
      });  
    }

    function adicionarDadosBanco(userId){


   
             
    


        // Adicionar dados        

        
        var desc = document.getElementById("message-text").value;
        var horas = document.getElementById("contador").textContent;
        
      
       

        //console.log(desc)
       // console.log(dia)
        //console.log(mes)
        //console.log(horas)       
        
     
        db.collection("frequencias").add({
            descricao: desc,
            dia: dia,
            mes: mes,
            horas: horas,
            userId: userId,
           
                       
        })
        .then((docRef) => {
            alert("Registro adicionado com sucesso")
            setTimeout(function() {
                window.location.href = "./historico.html";
            }, 1000);
        })
        .catch((error) => {
            alert("Erro: Registro não pode ser adicionado")
        });
   }

  
// login

/*
authGoogleButton = document.getElementById("authGoogleButton")


// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});


function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}
*/

/*filros
db.collection ("frequencias"). where ("mes", "==", "maio");
*/