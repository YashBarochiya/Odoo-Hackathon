import multer from "multer";

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
})

const upload = multer({ storage })

export default upload;



    

// import multer from "multer";

// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage });

// export default upload;
