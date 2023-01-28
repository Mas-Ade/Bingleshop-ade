class UsersController {
    async register(req, res, next) {
        try {
            const {nama_user, email, password, address} = req.body
            await validate(registerSchema, req.body)
            const isExistUser = await User.findOne({
                where: {
                    email
                },
                attributes: ['id']
            })
            if (isExistUser) {
                throw new ErrorResponse(400, 'Email sudah terdaftar')
            }
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await User.create({
                email,
                password: hashPassword,
                full_name: name
            })
            // generate token
            const jwtPayload = {
                user_id: user.id
            }
            const accessToken = jwt.sign(jwtPayload, process.env.JWT_KEY, {expiresIn: '30 days'})
            return new Response(res, 201, {
                accessToken
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    UsersController
}