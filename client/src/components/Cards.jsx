import { useEffect, useState } from "react";
import Card from "./Card";
import { wildersRequest } from "./../requests/wilder";

const Cards = () => {
    // const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cards, setCard] = useState();

    useEffect(() => {
        // wildersRequest
        //     .findAll()
        //     .then((wildersData) => {
        //         setWilders(wildersData.data.result);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        const recupData = async () => {
            try {
                const wildersData = await wildersRequest.findAll();

                if(wildersData.data.result.length) {
                    setCard(
                        wildersData.data.result.map(({ _id, name, city, skills }) => {
                            return <Card key={_id} id={_id} name={name} city={city} skills={skills} />;
                        })
                    );
                } else {
                    setCard(<div>No result</div>);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        setTimeout(() => {
            recupData();
        }, 1000);
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }

    return <div className="card-row">{loading ? <div>Loading...</div> : cards}</div>;
    

};

export default Cards;
