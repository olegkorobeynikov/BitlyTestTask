const Jimp = require("jimp");
module.exports = (on, config) => {
    on('task', {
        compareImages: compareImages
    })
    return config;
}

const compareImages = async (obj) => {
    const { filePath1, filePath2 } = obj
    const example1 = await Jimp.read(filePath1)
    const example2 = await Jimp.read(filePath2)
    const example1Hash = example1.hash()
    const example2Hash = example2.hash()
    const distance = Jimp.distance(example1, example2)
    const diff = Jimp.diff(example1, example2)

    if (example1Hash !== example2Hash || distance > 0.15 || diff > 0.15) {
        return false
    } else {
        return true
    }
}
