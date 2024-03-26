import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const  [nombre, setNombre] = useState()
  const  [email, setEmail]   = useState()
  const [show, setShow] = useState(false)

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  

  const onSubmitForm = (e) => {

    e.preventDefault();


  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text"
        placeholder="Nombre Completo"
        value = {nombre}
        onChange={onChangeNombre}
         />
        <input type="text"
        placeholder="Email"
        value = {email}
        onChange={onChangeEmail} />

        <button type="submit">Enviar</button>

      </form>

      {show ? 'esto' : null}
    </div>
  );
};

export default Form;
