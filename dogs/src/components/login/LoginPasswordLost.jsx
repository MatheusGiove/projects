import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST_POST } from "../../api";
import Error from "../helper/Error";
import Head from "../helper/Head";

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST_POST({
        login: email.value,
        url: window.location.href.replace("loss", "reset"),
      });
      request(url, options);
    }
    return;
  }

  return (
    <section>
      <Head title="Perdeu a Senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
