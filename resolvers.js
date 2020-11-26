const user = {
    _id: "1",
    name: "JD",
    email: "focus4ursoul@gmail.com",
    picture: "url"
}


module.exports = {
    Query: {
        me: () => user 
    }
}