//Ajax para hacer llamadas Ajax :)
function ajax(s,i,u,a,m){		
	/*  
	  s - cadena de this.value
		i - id de la etiqueta a modificar por la respuesta del ajax
		u - url destino en busca de una respuesta
		a - Asincrónico o no
		m - método GET o POST*/
	var con;
	if (s==""){
		document.getElementById(i).innerHTML="";
		return;
	}
	if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
	    con=new XMLHttpRequest();
	}else{
	// code for IE6, IE5
	    con=new ActiveXObject("Microsoft.XMLHTTP");
	}
	con.onreadystatechange=function(){
		if (con.readyState==4 && con.status==200){
            if(document.getElementById(i) != null){
                document.getElementById(i).innerHTML=con.responseText;
            } 
		}
    }    
	con.open(m,u,a);
	con.send();	
}

//Cuando tenga que llamar a la función, la llamo de esta manera y me devuelve una lista de países metiéndola dentro del div de id="paises"
ajax("1","paises","../../paises/getPaises",true,"GET");
