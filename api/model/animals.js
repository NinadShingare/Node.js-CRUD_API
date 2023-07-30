const mongoose=require('mongoose');

//creating schema for data 
const animalsSchema= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    code:String,
    
    translations:{
        0:{code:String,
            text:String,
            voices:{
                0:{name:String,
                    file:String,}
                },
                1:{name:String,
                    file:String,}
                },
                
        1:{code:String,
            text:String,
            voices:{
                0:{name:String,
                    file:String,}
                },
                1:{name:String,
                    file:String,}
                }    
        }


    }
)

module.exports =mongoose.model('Animals',animalsSchema);