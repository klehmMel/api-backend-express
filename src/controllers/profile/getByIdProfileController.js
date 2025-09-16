import {getById} from "../../models/profileModel.js"

export const getByIdProfileController = (req, res) => {
    const id = req.params.id

    const result = await getById(+id)
    console.log('Foi feito um get no /GET')
    res.json({
        message: `dados do ${id} consultado com sucesso`
    })
}
