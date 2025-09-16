import {update} from "../../models/profileModel.js"

export const editProfileController = (req, res) => {
    const id = req.params.id
    const dados = req.body

    const result = await update(+id, profile)

    res.json({
        message: `dados do ${id} atualizados com sucesso`,
        profile: result
    })
}
