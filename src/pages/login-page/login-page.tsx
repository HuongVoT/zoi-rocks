import {
  StyledAppContainer,
  StyledButtonContainer,
  StyledHeader,
  StyledLoginButton,
  StyledSubtitle,
  StyledTitle,
} from "./login-page.style";
export function LoginPage() {
  return (
    <StyledAppContainer>
      <StyledHeader>
        <StyledTitle>
          <img src="Zoi_Logo_Dark_Blue_RGB_High.png" alt="Zoi" />
          <h3>rocks</h3>
        </StyledTitle>
        <StyledSubtitle>RECOGNITION COLLECTION APPLICATION</StyledSubtitle>
        <StyledButtonContainer>
          <StyledLoginButton type="primary">LOGIN</StyledLoginButton>
        </StyledButtonContainer>
      </StyledHeader>
    </StyledAppContainer>
  );
}
