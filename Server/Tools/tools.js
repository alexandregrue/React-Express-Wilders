export const listErrors = (err) => {
    let errors = {};


    err.errors && Object.keys(err.errors).map((key) => {
        errors = {...errors, [key]: err.errors[key].message};
    });

    err.code === 11000 && 
        Object.keys(err.keyPattern).map((key) => {
        errors = { ...errors, [key]: `${key} is already exist` };
    });

    if (err.kind && err.kind === "ObjectId") {
        err = { ...errors, _id: "id does not exist" };
    }

    return errors;
}