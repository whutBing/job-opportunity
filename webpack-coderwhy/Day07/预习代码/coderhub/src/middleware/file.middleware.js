const multer = require('@koa/multer')
const { AVATAR_PATH } = require('../constants/file-path')

const avatarUpload = multer({
  dest: AVATAR_PATH
})

const handleAvatar = avatarUpload.single('avatar')

module.exports = {
  handleAvatar
}
