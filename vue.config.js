module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
}