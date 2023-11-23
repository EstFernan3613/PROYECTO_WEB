import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Lógica de autenticación (puedes implementarla según tus necesidades)
    // Aquí podrías realizar una llamada a un servidor para autenticar al usuario
    onLogin(data.username);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            ref={register({ required: 'Usuario requerido' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            ref={register({ required: 'Contraseña requerida' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;