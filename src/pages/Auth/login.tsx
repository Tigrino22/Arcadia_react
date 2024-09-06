import React, { useState } from 'react';
import FormInput from '../../components/Form/formInput';
import "../../scss/Form/_formStyle.scss";
import "../../scss/authPage/_loginPage.scss";


export default function Login() {

    // Etat des informations du formulaire
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    /**
     * Le formulaire est controlé, pas de perte de performance importante
     * 
     * @param e
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    /**
     * TODO
     * Fonction envoyé la requete de connexion a l'API
     * 
     * @param e 
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted : ", formData);
    }


    return <>
        <section className='login-page' onSubmit={handleSubmit}>
            <div className="form">
                <h1>Connexion</h1>
                <form action="#" className="login-form">
                    <div className="field">
                        <i className="ri-user-line"></i>
                        <FormInput
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            placeholder={'E-mail'}
                            value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <div className="field">
                        <i className="ri-lock-password-line"></i>
                        <FormInput
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            placeholder={'Mot de passe'}
                            value={formData.password}
                            onChange={handleChange} />
                    </div>
                    <div className="remember-me">
                        <label>
                            <input type="checkbox" /> Se souvenir de moi
                        </label>
                        <a href="#">Mot de passe oublié?</a>
                    </div>
                    <div className="btn-field">
                        <button className='form-button btn' type='submit'>Connexion</button>
                    </div>
                </form>
            </div>
        </section>
    </>
}