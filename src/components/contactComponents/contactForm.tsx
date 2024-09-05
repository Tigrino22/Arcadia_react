import { useState } from 'react';
import FormInput from '../Form/formInput';
import FormTextArea from '../Form/formTextArea';

export default function ContactForm(): JSX.Element {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // TODO
    /**
     * Pour le moment cette fonction effectue juste un console.log()
     * Les informations seront par la suite envoyer directement à l'API
     * 
     * @param e 
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <FormInput
                label="Nom"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <FormInput
                label="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <FormInput
                label="Sujet"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />

            <FormTextArea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />

            <button className="form-button" type="submit">Envoyer</button>
        </form>
    );
}
