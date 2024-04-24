export const getAllData= async (url)=>{
    const res=await axios(url)
    const data=res.data
    return data 
}
