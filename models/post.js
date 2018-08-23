module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

    });
    Post.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Post.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

    return Post;
};