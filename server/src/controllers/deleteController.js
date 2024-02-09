const dataBase = require('../dataBase/index')
const { deletePostQuery, verifyIdQuery } = require('../dataBase/querys')

const deletePostController = async (req, res) => {
    const { id } = req.params
    const values = [id]

    try {
        if (id) {
            const verifyID = await dataBase.query(verifyIdQuery, values);
            const post = verifyID.rows[0];
            if (!post) {
                res.status(400).json({
                    msg: `El id:${id} no pertenece a ningún post`
                });
                return
            }
        } else {
            res.status(400).json({
                status: 'Bad Request',
                msg: 'Debes ingresar un id',
            });
            return
        }

        const deletePost = await dataBase.query(deletePostQuery, values)
        res.status(202).json({
            msg: `El post con el id ${id} fue eliminado exitosamente`,
        })
        console.log(`El post con el id ${id} fue eliminado exitosamente`)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: (`Ocurrió un error al procesar tu solicitud:`, error.message),
            error: error.message
        })
    }
}

module.exports = {
    deletePostController
}