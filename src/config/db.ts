import mongoose,{connect} from "mongoose"

function connects(){
    return connect('mongodb://localhost:27017/trm').then(()=>{
        console.info("db connected")
    }).catch((e:any)=>{
        console.info(e)
    })
}

export default connects;