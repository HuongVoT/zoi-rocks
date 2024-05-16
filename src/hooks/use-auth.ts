import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  userId: string;
}

export function useAuth(): [AuthState | null, boolean, Error | null] {
  const [auth, setAuth] = useState<AuthState | null>(null);
  const loading = auth === null;
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchAuthSession()
      .then((session) => {
        setAuth({
          // isAuthenticated: session.tokens ? true : false,
          isAuthenticated: true,
          userId: session.userSub ?? "",
        });
        setError(null);
      })
      .catch((err) => {
        setAuth({
          isAuthenticated: false,
          userId: "",
        });
        setError(err);
      });
  }, []);

  return [auth, loading, error];
}
