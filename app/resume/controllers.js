const createResume = (req, res) => {
    console.log(req.body);
    res.status(200).end();

}

module.exports = {
    createResume,
};