export const getByIdProfileController = (req, res) => {
    const id = req.params.id
    console.log('Foi feito um get no /GET')
    res.json({
        message: `dados do ${id} consultado com sucesso`
    })
}
