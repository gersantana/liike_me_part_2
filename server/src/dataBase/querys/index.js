const getAllPostQuery = `SELECT * FROM posts;`
const newPostQuery = `INSERT INTO posts  (titulo,img,descripcion)
            VALUES ($1,$2,$3) RETURNING *;`


module.exports = {
    getAllPostQuery,
    newPostQuery
}
