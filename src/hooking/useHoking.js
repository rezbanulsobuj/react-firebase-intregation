import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useHoking = () => {
    const [user, setUser] = useState({})

    const sign = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    const haldleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        user,
        sign,
        haldleSignOut
    }
}
export default useHoking;