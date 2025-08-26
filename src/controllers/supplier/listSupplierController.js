export const listSupplierController = (req, res) => {
    console.log('Foi feito um get no /GET')
    res.json({
        message: 'fornecedores listados com sucesso'
    })
}
