import {Schema,model,Document} from "mongoose"

export interface TRMDocument extends Document{
    source:string,
    target:string,
    value:number,
    time:number
}

export interface TRM{
    source:string,
    target:string,
    value:number,
    time:number
}


const TRMschema = new Schema<TRM>({
    source:{
        type:String,
        required:true
    },
    target:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    }

})

const TRMModel = model<TRM>('TRM',TRMschema)

export default TRMModel;