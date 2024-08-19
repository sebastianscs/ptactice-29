import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/styles.css"

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username:'',
        password:'',
    });

    const PASSWORD = 'user';
    const USERNAME = 'user';

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        if (password === PASSWORD && username === USERNAME){
            navigate('/PokeList')
        } else {
            alert('Invalid username or password');
        }
    }

    const handleChangeSubmit = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value} ));
    }

    return(
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='user'>
                    <label>Usuario</label>
                    <input 
                        type='text' 
                        name='username' 
                        value={form.username}
                        onChange={(e) => handleChangeSubmit(e)}
                    />
                </div>

                <div className='password'>
                    <label>Contraseña</label>
                    <input 
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={(e) => handleChangeSubmit(e)}
                        />
                </div>
                <button type='submit'> Login </button>
            </form>
        </section>
    )
}

export default Login;