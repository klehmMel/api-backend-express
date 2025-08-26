export const editSupplierController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
        message: `dados do ${id} atualizados com sucesso`,
        supplier: dados
    })
}
