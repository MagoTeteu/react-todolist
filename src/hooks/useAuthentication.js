
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(null)

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState();

    const auth = getAuth()
    
    function checkIfIsCancelled(){
        if(cancelled) {
            return;
        }
    };

    //Register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(true);

        try {

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName:data.displayName
            });

            setLoading(false);

         return user;
        }catch(error) {
            console.log(error.message)
            console.log(typeof error.me)

            let systemErrorMessage

            if(error.message.include("Password")) {
                systemErrorMessage = "A Senha precisa pelo Menos Conter 6 Caracteres."
            } else if(error.message.include("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setLoading(false);
            setError(systemErrorMessage);
        }

    };

    //Logout - sign out
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)
    };

    //Login - sign in
    const login = async (data) => {
        checkIfIsCancelled();
    
        setLoading(true);
        setError(false);
    
        try {
          await signInWithEmailAndPassword(auth, data.email, data.password);
          setLoading(false);
          
        } catch (error) {
          console.log(error.message);
          console.log(typeof error.message);
          console.log(error.message.includes("user-not"));
    
          let systemErrorMessage;
    
          if (error.message.includes("user-not-found")) {
            systemErrorMessage = "Usuário não encontrado.";
          } else if (error.message.includes("wrong-password")) {
            systemErrorMessage = "Senha incorreta.";
          } else {
            systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
          }
    
          console.log(systemErrorMessage);
    
          setError(systemErrorMessage);
        }
    
        console.log(error);
    
        setLoading(false);
      };
    
      useEffect(() => {
        return () => setCancelled(true);
      }, []);

    useEffect(()=> {
        return () => setCancelled(true);
    }, []);

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
};