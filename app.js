const fs=require('fs');
const readMe=fs.readFileSync('package.json','utf8')
    fs.writeFileSync('package.json',readMe)
    var types = process.argv[3];
    if(types==='-T'){
        
        addList();
    
    }
    else{
        console.log(' command is -T')

    }
    var types2 = process.argv[5];
    if(types2==='-B'){
        
        addList();
    
    }
    else{
        console.log('command is -B')

    }
    var param = process.argv[2];
    var input1 = process.argv[4];
    var input2= process.argv[6];
    function addList() {
        if(types2==='-B'&&types==='-T'&&param==='add')
        
    fs.appendFileSync('package.json', ',{"title":"' + input1+'","body":"'+ input2 +'"}', function (err) {
        
        if (err) throw err;
        console.log('Updated!');
        
      });}
      if(param==='add'){
        
        addList();
        console.log(readMe);
    }


    else if(param==='read'){
        console.log(readMe); 


    }
    else if(param==='delete'){
        deleteList(); 


    }
    else{
        
        console.log("enter a valid command");

    }
    
    

    



