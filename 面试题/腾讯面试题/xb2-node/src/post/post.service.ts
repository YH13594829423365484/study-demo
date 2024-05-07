export const getPosts = async() => {
    const statement = `
    SELECT * FROM posts
    `
    const [data] = await connection.promise().query(statement);
}