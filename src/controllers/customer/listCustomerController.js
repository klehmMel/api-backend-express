export const listCustomerController = (req, res) => {
    console.log('Foi feito um get no /GET')
    res.json({
        message: 'clientes listados com sucesso'
    })
}
