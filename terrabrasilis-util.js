    var Stack =  (function(){
        //FIFO = first in, first out
        let list = new Array();
    
        let insert = function (obj){
            list.forEach(element => {
                if(element !== obj) {
                    this.list[this.list.length] = obj;
                }
            });            
        }
    
        let remove = function (){
            if(this.list.length > 0){
                var obj = this.list[this.list.length - 1];
                this.list.splice(this.list.length - 1,1);
                return obj;     
            }else{
                alert("Do not exist more value!");
            }
        }
    
        let getLast = function (){
            if(this.list.length > 0){
                return this.list[this.list.length - 1];
            }else{
                alert("Do not exist more value!");
            }
        } 
        
        let getLength = function () {
            return this.list.length;
        }

        return {
            insert: insert,
            remove: remove,
            getLast: getLast,
            getLength: getLength
        }
    })(Stack || {});

    var Queue = (function(){
        // FILO = first in, last out
        this.list = new Array();
    
        let insert = function(obj){
            list.forEach(element => {
                if(element !== obj) {
                    this.list[this.list.length] = obj;
                }
            });                       
        }
    
        let remove = function(){
            if(this.list.length > 0){
                var obj = this.list[0];
                this.list.splice(0,1);
                return obj;    
            }else{
                alert("Do not exist more value!");
            }
        }
    
        let getFirst = function(){
            if(this.list.length > 0){
                return this.list[0];
            }else{
                alert("Do not exist more value!");
            }
        }

        let getLength = function() {
            return this.list.length;
        }

        return {
            insert: insert,
            remove: remove,
            getFirst: getFirst,
            getLength: getLength
        }
    })(Queue || {});

    module.exports = {Stack, Queue};