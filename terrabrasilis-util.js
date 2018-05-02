module.exports = {

    Stack: () => {
        //FIFO = first in, first out
        this.list = new Array();
    
        this.insert = function (obj){
            list.forEach(element => {
                if(element !== obj) {
                    this.list[this.list.length] = obj;
                }
            });            
        }
    
        this.remove = function (){
            if(this.list.length > 0){
                var obj = this.list[this.list.length - 1];
                this.list.splice(this.list.length - 1,1);
                return obj;     
            }else{
                alert("Do not exist more value!");
            }
        }
    
        this.getLast = function (){
            if(this.list.length > 0){
                return this.list[this.list.length - 1];
            }else{
                alert("Do not exist more value!");
            }
        } 
        
        this.getLength = function () {
            return this.list.length;
        }
    },

    Queue: () => {
        // FILO = first in, last out
        this.list = new Array();
    
        this.insert = function(obj){
            list.forEach(element => {
                if(element !== obj) {
                    this.list[this.list.length] = obj;
                }
            });                       
        }
    
        this.remove = function(){
            if(this.list.length > 0){
                var obj = this.list[0];
                this.list.splice(0,1);
                return obj;    
            }else{
                alert("Do not exist more value!");
            }
        }
    
        this.getFirst = function(){
            if(this.list.length > 0){
                return this.list[0];
            }else{
                alert("Do not exist more value!");
            }
        }

        this.getLength = function() {
            return this.list.length;
        }
    }
}