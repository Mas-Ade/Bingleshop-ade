class ErrorResponse {
    constructor(status, error) {
        return res.status(status).json({
            status: true,
            error: error
        })
    }
}

module.exports = ErrorResponse