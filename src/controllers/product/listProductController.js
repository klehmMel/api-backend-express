export const listProductController= (req, res) => {
    console.log ('Foi feito um get no /GET')
    res.json({
        message: 'produtos listados com sucesso'
    })
}