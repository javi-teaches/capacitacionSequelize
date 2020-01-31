module.exports = (sequelize, DataTypes) => {
	const Genre = sequelize.define('Genres', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING
	}, {
		timestamps: false,
	});

	// Relaciones
	Genre.associate = (models) => {
		Genre.hasMany(models.Movies, {
			foreignKey: 'genre_id',
			as: 'movies'
		});
	}

	return Genre;
}