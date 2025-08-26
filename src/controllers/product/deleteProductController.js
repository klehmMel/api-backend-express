export const deleteProductController = (req, res) => {
    const id = req.params.id
    res.json({
        message: 'produtos com ID ${id}deletados com sucesso'
    })
}