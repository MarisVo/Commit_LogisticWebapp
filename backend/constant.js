import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/uploads/${req.dirName}/`)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()
        const filename = file.originalname  // name.jpg
        const part = filename.split(".")
        part[part.length-2]+=uniqueSuffix   // name+uniqeSuffix.jpg
        cb(null, part.join("."))
    }
})
export const upload = multer({storage})