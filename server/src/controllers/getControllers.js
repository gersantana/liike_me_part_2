const dataBase = require('../dataBase/index')
const { getAllPostQuery } = require('../dataBase/querys/index')

const getDataController = async (req, res) => {

    try {

        const getPosts = await dataBase.query(getAllPostQuery)
        if (getPosts.rowCount) {
            console.info("data cargada correctamente")
            res.status(200).json(getPosts.rows)
        }
        else {
            res.status(200).json({
                msg: 'No hay posts para mostrar',
            });
        }

    } catch (error) {
        console.error('Error al cargar la data desde el controlador:', error.message);
        res.status(500).json({
            msg: 'Se produjo un error al cargar la data',
            error: error.message
        });
    }
}

module.exports = {
    getDataController
}