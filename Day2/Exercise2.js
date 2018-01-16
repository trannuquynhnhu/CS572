const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["funds.csv", "paper.pdf"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const find = fileName => tree => {  
    let result = false;      
    if(tree.files.length > 0 && tree.files.includes(fileName)){
        return true;        
    }    
    for(const subFolder of tree.subFolders){
        if(result === false){
            result = find(fileName)(subFolder);
        }        
    } 
    return result;        
}


console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false