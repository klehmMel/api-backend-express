export const editProfileController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `dados do ${id} atualizados com sucesso`,
        profile: dados
    })
}
