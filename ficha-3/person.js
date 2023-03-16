module.exports = function (firstName,secondName){
    this.firstName = firstName;
    this.secondName = secondName;//instancia
    this.fullName = function (){
        return this.firstName + '' + this.lastName;
    }
}