export const deleteCustomerController = (req, res) => {
    const id = req.params.id
    res.json({
        message: `cliente com ID ${id} deletado com sucesso`
    })
}
