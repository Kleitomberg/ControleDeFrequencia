
    // login   
    var authGoogleButton = document.getElementById("authGoogleButton")

    let  provider = new firebase.auth.GoogleAuthProvider();

    
    function loginGoogle(){
        
        firebase.auth().signInWithPopup(provider).then(res => {
            console.log(res)        
            
            //var credential = result.credential;

            var user = res.user; // pega as informaç~eos do usuario

            var id = user.uid;
            var nome  = user.displayName; 
            var email = user.email;  
            //var image = user.photoURL;         
            
            outros(id,nome,email);               
            })//fim do then da função login
            .catch(e => {
                
                console.log(e)
                alert("não cadastrado")


            }); //fim do catch da funçao login

    } //fim da funcao login



    //aidionar ooutros dados no banco

    function outros(id, nome, email ){

                // adicionar essas informações no banco
                db.collection("users").doc(email).set({
                    
                    nome: nome,
                    uid: id,   
                    email: email,
                   // photo: image,           
                })
            .then((docRef) => {

            alert("Logado com sucesso!")
            
        window.location.replace("page contador.html")


        })
        .catch((error) => {
            alert("não cadastrado")

        });
    }

    // controle de usuario

  
   


// Logout

    function signOut() {
      
        alert("usuario deslogado")
        window.location.replace("index.html")
        firebase.auth().signOut().then(() => {
        // Sign-out successful.
        
        }).catch((error) => {
            alert("erro: usuario não deslogado")
        });
        // [END auth_sign_out]
    }
