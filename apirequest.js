
export default async function apirequest(url='',optionObj=null,errMeg=null){
    try{
        let respons=await fetch(url,optionObj)
        if(!respons.ok) throw Error("Something went wrong please reloade the app")
    }
    catch(err){
        errMeg=err.Message
    }
    finally{
        return errMeg
    }
}