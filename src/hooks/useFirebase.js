import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  return {
    user,
    isLoading,
    authError,
  };
};

export default useFirebase;
