class Response {
    constructor(res, status, data , message ) {
        return res.status(status).json({
            status: true,
            data: data,
            message : message ,
            error: {}
        })
    }
}

module.exports = Response