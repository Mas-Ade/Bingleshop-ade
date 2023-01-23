class ErrorResponse {
    constructor(status, error) {
        return res.status(status).json({
            status: true,
            data: data,
            error: error
        })
    }
}

module.exports = ErrorResponse