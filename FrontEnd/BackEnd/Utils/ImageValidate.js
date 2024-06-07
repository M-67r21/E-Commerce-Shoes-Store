const imageValidate = (images) =>{
    let imagesTable = []
    if(Array.isArray(images)){
        imagesTable = images
    }else{
        imagesTable.push(images)
    }

    if (imagesTable.length > 5) {
        return{error: "Send only 5 images at once"}
    }
    for (let image of imagesTable) {
        if (image.size > 10485760 ) {
            return{error: "Size too large (above 10 MB)"}
        }

        const filetypes = /jpg|jpeg|png|mp4|webm/
        const mimetype = filetypes.test(image.mimetype)
        if (!mimetype) {
            return{error: "Incorrect mime type(should be jpg, jpeg, png, mp4 or webm"}
        }
    }

    return{error: false}
}
module.exports = imageValidate