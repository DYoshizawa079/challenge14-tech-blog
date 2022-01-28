const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    // Refer the id column in 'User' model (which is also the primary key) to refer to the 'author' column in the 'Post' model.
    foreignKey: 'author',
});
// Impose a constraint stating that a post can belong to only one user.
Post.belongsTo(User, {
    // The 'author' of 'Post' model will refer or "link" to the primary key of the 'User' model (id column)
    foreignKey: 'author',
})