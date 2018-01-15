
String.prototype.filterWords = function(filters)
        {            
            var result = this;
            for(const word of filters){
                result = result.replace(word, '***');                
            }
            return result;
        };
console.log("This house is nice".filterWords(["house", "nice"]));


