import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  /**
   * register user with email and password
   */
  const registerUser = (email, password, name, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError('');
        // setting user for instant show of displayName
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Updating user name
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(() => {});

        // redirect user
        const destination = location?.state?.from || '/';
        navigate(destination, { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * login user with email and password
   */
  const loginUser = (email, password, nevigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destinantion = location?.state?.from || '/';
        nevigate(destinantion, { replace: true });
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * user observer
   */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsub;
  }, [auth]);

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
  };
};

export default useFirebase;
