export const getElementByIdController = (req, res) => {
    console.log ('Foi feito um get no /GET')
    res.json({
        message: 'produto do ${id} consultado com sucesso'
    })
}