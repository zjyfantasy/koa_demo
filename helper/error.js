class APIError{
    constructor(code='',message='',detail={}){
        this.code=code
        this.message=message
        this.detail=detail
    }
}

module.exports= APIError