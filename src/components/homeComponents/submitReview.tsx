import { useState } from "react";
import FormInput from "../Form/formInput";
import FormTextArea from "../Form/formTextArea";


export default function SubmitReview() {

    const [formData, setFormData] = useState({
        author: "",
        content: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        console.log(e.target);
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Avis soumis: ", formData);
    };

    return (
        <>
            <div className="submit-review" >
                <h3 >Laissez-nous votre avis</h3>
                <form onSubmit={handleSubmit}>
                    
                        <FormInput
                            placeholder={"Votre nom"}
                            type={"text"}
                            id={"author"}
                            name={"author"}
                            value={formData.author}
                            onChange={handleChange} />
                    
                        <FormTextArea
                            placeholder={"Message"}
                            id={"content"}
                            name={"content"}
                            value={formData.content}
                            onChange={handleChange} />
                    
                    <div className="button-field">
                        <button type="submit" className="btn form-button">Envoyer</button>
                    </div>
                </form>
            </div>
        </>

    );
}