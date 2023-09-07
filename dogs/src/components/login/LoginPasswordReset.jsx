import React from "react";
import Input from "../forms/Input";
import useForm from "../../hooks/useForm";
import Button from "../forms/Button";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Error from "../helper/Error";
import Head from "../helper/Head";

const LoginPasswordReset = () => {
  const password = useForm();
  const navigate = useNavigate();
  const { loading, error, request } = useFetch();
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setKey(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section>
      <Head title="Resete sua Senha" />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          name="password"
          type="password"
          {...password}
        />
        {loading ? <Button disabled>Resetar</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
