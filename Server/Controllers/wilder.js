import WilderModel from "../Models/wilder";
import { listErrors } from "../Tools/tools";

export default {
    create:(req, res, next) => {

        const { name, city, skills } = req.body;

        WilderModel.init().then(() => {
            const wilder = new WilderModel({
                name: name,
                city: city,
                skills: skills
            });

            wilder
                .save()
                .then((result) => {
                    res.json({ success: true, result });
                })
                .catch((err) => {
                    res.json({
                        success: false,
                        result: listErrors(err),
                    });
                });
        });

    },

    findAll: (req, res) => {
        WilderModel.find()
            .then((result) => {
                res.json({ success: true, result});
            })
            .catch((err) => {
                res.json({
                    success: false,
                    result: listErrors(err),
                });
            });
    },

    findOne: (req, res) => {
        const {_id} = req.params;
        WilderModel.findOne({_id})
            .then((result) => {
                if(!result) {
                    return res.json({
                        success: false,
                        result: "id does not exist"
                    })
                }
                res.json({ success: true, result});
            })
            .catch((err) => {
                res.json({
                    success: false,
                    result: listErrors(err),
                });
            });
    },

    update: (req, res) => {
        const { _id, name, city, skills } = req.body
        WilderModel
            .updateOne({ _id}, { name, city, skills })
            .then((result) => {
                if(result.matchedCount === 0) {
                    return res.json({
                        success: false,
                        result: "Nothing found",
                    });
                }
                res.json({ success: true, result });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    result: listErrors(err),
                });
            });
    },

    delete: (req, res) => {
        const { _id } = req.body;
        WilderModel.deleteOne({ _id })
            .then((result) => {
                if(result.deletedCount === 0) {
                    return res.json({
                        success: false,
                        result: "id does not exist",
                    })
                }
                res.json({
                    success: true,
                    result 
                });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    result: listErrors(err),
                });
            });
    },
}

