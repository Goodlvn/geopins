const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

exports.findOrCreateUser = async token => {
    //verify authtoken
    const googleUser = await verifyAuthToken(token);
    //check if user exist with google info
    const user = await checkIfUserExists(googleUser.email);
    //if user exists return user if not create new user in db
    return user ? user : creatNewUser(googleUser);
} 

const verifyAuthToken = async token => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.OAUTH_CLIENT_ID
        })

        return ticket.getPayload();
    } catch (err) {
        console.log("Error verifying Auth Token", err);
    }
}

const checkIfUserExists = async email => {
    await User.findOne({ email }).exec();
}

const creatNewUser = googleUser => {
    const { name, email, picture } = googleUser;
    const user = { name, email, picture }

    return new User(user).save();
}