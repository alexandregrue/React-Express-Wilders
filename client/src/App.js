import "./App.scss";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Form from "./components/Form";

function App(props) {
    return (
    
        <div>
            <Header />
            <main>
                <Form />
                <Cards />
            </main>
        </div>
    

    );
}

export default App;
