
    // login   
    var authGoogleButton = document.getElementById("authGoogleButton")

    let  provider = new firebase.auth.GoogleAuthProvider();

    
    function loginGoogle(){
   

        firebase.auth().signInWithPopup(provider).then(res => {
            console.log(res)
            alert("Logado com sucesso!")
            window.location.replace("page contador.html")

                              
            }).catch(e => {
                
                console.log(e)
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
