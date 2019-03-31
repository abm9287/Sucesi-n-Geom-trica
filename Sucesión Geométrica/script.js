function calcular(){
    let  n2 =parseInt( document.getElementById("elementos").value);
    let  n1 =parseInt( document.getElementById("numero1").value);
    let  n3 =0;
    respuesta="";
    
    for(let i= 1; i<=n2;i++){
      respuesta=respuesta+""+n1+", ";
      n3=n1;
    
      n1=n3 *3 ;
    }

    document.getElementById("respuesta").innerHTML = respuesta;     
  
  }
   
  