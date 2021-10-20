import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const[error, setError] = useState("");
    const auth = getAuth();

    const userInfo= data=> {
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
    }
    const userInfoRegister = data => {
        userInfo(data);
        createAccountWithEmail();
    }
    const userInfoLogin = data => {
        userInfo(data);
        signInWithEmail();
    }

    const signInWithEmail = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })

    }
    const createAccountWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUserName();
            setError("Account created succesfully! Now log in from the Login page.");
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
        });

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
        
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        userInfoRegister,
        userInfoLogin,
        error,
        setUser,
        setIsLoading
    }
}

export default useFirebase;