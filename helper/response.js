class Response{
    constructor(success=false,result={},error=null){
        this.success=success
        this.result=result
        this.error=error
    }
}

module.exports= Response