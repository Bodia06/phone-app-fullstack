const multer = require('multer');
const path = require('path');
const { STATIC_PATH } = require('../constants');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(STATIC_PATH, 'images'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  },
});

function fileFilter (req, file, cb) {
  cb(null, /^image\/(png|jpg|jpeg|gif)$/.test(file.mimetype));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadPhoneImages = upload.single('image');
