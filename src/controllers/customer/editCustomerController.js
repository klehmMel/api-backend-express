export const editCustomerController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `dados do cliente ${id} atualizados com sucesso`,
        customer: dados
    })
}
