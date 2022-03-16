import { NextFunction, Request, Response } from "express";
import WilderModel from "../Models/wilder";
import { listErrors } from "../Tools/tools";

interface IWilder {
    name: string;
    city: string;
    skills: object[];
};

export default {
    create:(req: Request, res: Response, next: NextFunction) => {

        const { name, city, skills } = req.body;

        WilderModel.init().then(() => {
            const wilder = new WilderModel({
                name: name,
                city: city,
                skills: skills
            });

            wilder
                .save()
                .then((result: IWilder) => {
                    res.json({ success: true, result });
                })
                .catch((err: object) => {
                    res.json({
                        success: false,
                        result: listErrors(err),
                    });
                });
        });

    },

    findAll: (req: Request, res: Response) => {
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

    findOne: (req: Request, res: Response) => {
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

    update: (req: Request, res: Response) => {
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

    delete: (req: Request, res: Response) => {
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

