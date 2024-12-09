const db = require('../db')
class PostController {
	async getPosts(req,res) {
		const posts = await db.query(`SELECT * FROM post`)
		res.json(posts.rows)
	}
	async createPost(req, res) {
		const { title, content, userId } = req.body
		const newPost = await db.query(
			`INSERT INTO post (title, content, user_id) values($1, $2, $3) RETURNING *`,
			[title, content, userId]
		)
		res.json(newPost.rows[0])
	}
	async getPostUser(req, res) {
		const id = req.query.id
		const posts = await db.query(`SELECT * FROM post where user_id = $1`, [id])
		res.json(posts.rows)
	}
	async deletePost(req, res) {
		const id = req.params.id
		const post = await db.query(`DELETE FROM post where id = $1`, [id])
		res.json(post.rows[0])
	}
}

module.exports = new PostController()
