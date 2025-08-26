export const listProfileController = (req, res) => {
    console.log('Foi feito um get no /GET')
    res.json({
        message: 'usuarios listados com sucesso'
    })
}
