import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const  [client, setClient] = useState({
    nombre: '',
    email: ''
  })
  const  [show, setShow]     = useState(false)
  const  [err, setErr]       = useState(false)

  const onChangeNombre = (e) => setClient({...client, nombre : e.target.value});
  const onChangeEmail = (e) => setClient({...client, email: e.target.value});
  
  const onSubmitForm = (e) => {

    e.preventDefault();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if(client.nombre.length > 5 && emailRegex.test(client.email)){
      setShow(true)
      console.log('Gracias ' + client.nombre + ', te contactaremos cuanto antes vía mail');
    } else {
        setErr(true)
      }
  }
  return (
    <div>

      {show ? null: 
      <form onSubmit={onSubmitForm}>
        <input type="text"
        placeholder="Nombre Completo"
        value = {client.nombre}
        onChange={onChangeNombre}
         />
        <input type="text"
        placeholder="Email"
        value = {client.email}
        onChange={onChangeEmail} />
        <button type="submit">Enviar</button>
      </form>
      }

      {err && <span style={{color: 'red'}}>Por favor verifique su información nuevamente</span> }
    </div>
  );
};

export default Form;
