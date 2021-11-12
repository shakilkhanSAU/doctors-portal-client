import { useState, useEffect } from 'react';
import initializeAuthentication from '../firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, signOut, getIdToken } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google signin
    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch(error => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    //email password user creating function
    const registerUser = (name, email, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                const newUser = { displayName: name, email };
                setUser(newUser)
                // save user to data base 
                saveUser(email, name, 'POST')
                // update on firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                });


                // history push
                history.replace('/')

            })
            .catch(error => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    // signin user 
    const signinUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/'
                setError('')
                history.replace(destination)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }


    const logoutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setError('')
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    // user observer or manageUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    // chech admin or not?
    useEffect(() => {
        fetch(`https://desolate-thicket-66517.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    // save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(user)
        fetch('https://desolate-thicket-66517.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // returning parameter
    return {
        user,
        setUser,
        error,
        setError,
        googleSignIn,
        registerUser,
        logoutUser,
        signinUser,
        isLoading,
        admin,
        token
    }
}

export default useFirebase;