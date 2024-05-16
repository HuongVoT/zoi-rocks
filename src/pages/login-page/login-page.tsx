import { signInWithRedirect } from "aws-amplify/auth";
import { Navigate } from "react-router-dom";
import {
  StyledAppContainer,
  StyledButtonContainer,
  StyledHeader,
  StyledLoginButton,
  StyledSubtitle,
  StyledTitle,
} from "./login-page.style";
import { useAuth } from "../../hooks";

export function LoginPage() {
  const [auth] = useAuth();

  if (auth?.isAuthenticated) {
    return <Navigate to="/kudos-album" replace />;
  }

  return (
    <StyledAppContainer>
      <StyledHeader>
        <StyledTitle>
          <img src="Zoi_Logo_Dark_Blue_RGB_High.png" alt="Zoi" />
          <h3>rocks</h3>
        </StyledTitle>
        <StyledSubtitle>RECOGNITION COLLECTION APPLICATION</StyledSubtitle>
        <StyledButtonContainer>
          <StyledLoginButton
            type="primary"
            onClick={() => signInWithRedirect({ provider: "Google" })}
          >
            LOGIN
          </StyledLoginButton>
        </StyledButtonContainer>
      </StyledHeader>
    </StyledAppContainer>
  );
}
