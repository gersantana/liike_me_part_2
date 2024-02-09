const dataBase = require('../dataBase/index')
const { newPostQuery } = require('../dataBase/querys')


const newPostController = async (req, res) => {

    try {
        const { titulo, url, descripcion } = req.body;
        const values = [titulo, url, descripcion]
        console.log(titulo)
    
        if (!titulo && !url && !descripcion) {
            console.warn('Llena los campos para crear un nuevo post');
            res.status(400).json({
                msg: 'Llena los campos para crear un nuevo post'
            })
            return
        }
        if (!titulo) {
            console.warn('El campo titulo esta vació');
            res.status(400).json({
                msg: 'El campo titulo esta vació'
            })
            return
        }
        if (!url) {
            console.warn('Carga una imagen para tu post')
            res.status(400).json({
                msg: 'Carga una imagen para tu post'
            })
            return
        }
        if (!descripcion) {
            console.warn('Agrega una pequeña descripción al post')
            res.status(400).json({
                msg: 'Agrega una pequeña descripción al post'
            })
            return
        }

        // SI PASAN LAS VALIDACIONES SE CREA NUEVO POST
        const createPost = await dataBase.query(newPostQuery, values)
        res.status(200).json({
            msg: 'Post creado exitosamente!!',
            dataCount: createPost.rowCount,
            data: createPost.rows
        })

    } catch (error) {
        console.error(`Error al crear el post:`, error.message)
        res.status(500).json({
            msg: `Hubo un error al procesar tu solicitud`,
            error: error.message
        })

    }

}

module.exports = {
    newPostController
}