import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/65280/belts-belt-skin-colors-65280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #D1A681;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: larger;
  display: block;
  padding: 5px;
  margin: 10px auto;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>INICIAR SESIÓN</Title>
        <Form>
          <Input placeholder="Usuario" />
          <Input placeholder="Contraseña" />
          <Button>LOG IN</Button>
          <Link>OLVIDÉ MI CONTRASEÑA</Link>
          <Link>CREAR CUENTA NUEVA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;