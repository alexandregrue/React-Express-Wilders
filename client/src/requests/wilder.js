import axios from "axios";

export const wildersRequest = {
    findAll: () =>
        axios
            .get("/api/wilder/findAll")
            .then((res) => res)
            .catch((err) => err),
    
    create: (dataForm) =>
        axios
            .post("/api/wilder/create", (dataForm))
};

export default wildersRequest;
