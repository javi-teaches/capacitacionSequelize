module.exports = (sequelize, DataTypes) => {
	const Movie = sequelize.define('Movies', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.STRING,
		rating: DataTypes.INTEGER,
		awards: DataTypes.INTEGER,
		release_date: DataTypes.DATE,
		length: DataTypes.INTEGER,
		genre_id: DataTypes.INTEGER,
	}, {
		// tableName: 'peliculas',
		timestamps: false,
	});

	// Relaciones
	Movie.associate = (models) => {
		Movie.belongsTo(models.Genres, {
			foreignKey: 'genre_id',
			as: 'genre'
		});
	}

	Movie.prototype.getTitleAndRating = function () {
		return `${this.title} - ${this.rating}`;
	}

	return Movie;
}