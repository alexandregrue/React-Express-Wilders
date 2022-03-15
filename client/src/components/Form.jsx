import React, { useState } from "react";
import { wildersRequest } from "./../requests/wilder";

const Form = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        city: "",
        skills: [],
    });

    /* const [name, setName] = useState("");
    const [city, setCity] = useState(""); */
    const [skills, setSkills] = useState([]);
    
    const [error, setError] = useState("");
    
    const handleSubmit = async () => {
        try {
            const result = await wildersRequest.create(dataForm);
            console.log(result);
            if (result.data.success) {
                setError("");
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError(error.message);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name-input">Name :</label>
            <input
                id="name-input"
                type="text"
                placeholder="Type the name"
                value={dataForm.name}
                onChange={(e) => setDataForm(e.target.value)}
            />
            <label htmlFor="city-input">City :</label>
            <input
                id="city-input"
                type="text"
                placeholder="Type the city"
                value={dataForm.city}
                onChange={(e) => setDataForm(e.target.value)}
            />
            <label htmlFor="skill-input">Skills :</label>
            <input
                id="skill-input"
                type="text"
                placeholder="Type the skill"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
        
            {error !== "" && <error>{error}</error>}

            <button>Submit</button>
        </form>
    );
};

export default Form;
