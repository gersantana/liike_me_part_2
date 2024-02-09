const getAllPostQuery = `SELECT * FROM posts;`
const newPostQuery = `INSERT INTO posts  (titulo,img,descripcion)
            VALUES ($1,$2,$3) RETURNING *;`
const verifyIdQuery = `SELECT * FROM posts WHERE id = $1`
const deletePostQuery = `DELETE FROM posts where id = $1`


module.exports = {
    getAllPostQuery,
    newPostQuery,
    verifyIdQuery,
    deletePostQuery
}
