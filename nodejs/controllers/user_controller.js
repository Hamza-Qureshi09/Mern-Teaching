
// Method @POST
const UserRegistration = (req, res) => {
    console.log(req.body, 'client payload');
    res.send(req.body)
}

module.exports = { UserRegistration }