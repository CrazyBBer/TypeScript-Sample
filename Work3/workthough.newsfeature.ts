type nameOrnameArry = string | string[];

function CreateName(name:nameOrnameArry){
    
    if (typeof name ==="string") {     
        return name;
    }
    else{
        return name.join(" ");
    }
} 