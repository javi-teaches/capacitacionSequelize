const db = require('../database/models');

// Para hacer RAW queries
const sequelize = db.sequelize;

module.exports = {
	index: (req, res) => {
		db.Movies
			.findAll({
				include: ['genre']
			})
			.then(results => {
				// return res.send(results);
				return res.render('movies/index', { movies: results });
			})
			.catch(errors => console.log(errors));
	},

	show: (req, res) => {
		db.Movies
			.findByPk(req.params.id, {
				include: ['genre']
			})
			.then(movie => res.send(movie))
			.catch(errors => console.log(errors));
	}
}