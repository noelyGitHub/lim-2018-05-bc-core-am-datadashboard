    let url1='http://localhost:8080/data/cohorts.json';
    let url2='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json';
    let url3='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json';

const connectJson=(url,callback)=>{
    var xmlhttp=new XMLHttpRequest(); 
    let dateJson;
    xmlhttp.onload=_=>{
            if(xmlhttp.readyState === 4){
                if(xmlhttp.status !== 200){
                    return callback(new Error(`HTTP error: ${xmlhttp.status}`));
                }
                try {
                  callback(null, JSON.parse(xmlhttp.responseText));// devuelve una funcion con dos parametros??
                } catch (err) {
                  callback(err);
                }
            }
    };    
    xmlhttp.open('GET',url);
    xmlhttp.send();   
};
var getJSON = (urlJSON) => connectJson(urlJSON,(error,json) => {
    if(error){
        return console.error(error);
    }
    console.log(json);
   return json;
});
getJSON(url1);
//...................................................obtener users 
let users =_=> {
    return getJSON(url3);
}
//...................................................Obtener Progress
let progress =_=> {
    return getJSON(url2);
}
//...................................................Obtener courses
let courses =_ => {
    let cohortDate=getJSON(url1);    
    let arrayIds=[];
    for(var i in cohortDate){// recorro todo el objeto cohor
        var idCourses=Object.keys(json[i].coursesIndex);  //obtengo las propiedades del objeto coursesIndex
        for(var value of idCourses){// voy a recoger el objetos de propiedadess para crear un nuevo array con sus valores K-> paropiedad
            arrayIds.push(value);// agregar todos los datos encontrados
         }
        return arrayIds;// devuelve arreglo de ids del curso pero estan repetidos;
     }
}
//..........................................................................................computeUsersstats
var computeUsersStats = (users,progress,courses) => {// creara lista usuarios

    let stats={
        percent: 0.8,//% de completitudgeneral --> stats
        excerses:{
            total:15,// # total de ejercicios autocorregidos en cursos
            completed:6,// # de ejercicios completados por usuarios
            percent:0.4 // % de ejercicios autocorregidos completados
        },
        reads:{
            total:15,// # total de lecturas presentes en curso
            completed:6,// # de lecturas completados por usuarios
            percent:0.4 // % de lecturas completados
        },
        quizzes:{
            total:15,// # total de quizzes presentes en curso
            completed:6,// # de quizzes completados por usuarios
            percent:0.4, // % de quizzes completados
            scoreSum:350,// suma de puntuaciones de los quizzes
            scoreAvg:13// promedio de puntuaciones en quizzes
        }
     };
    usersWithStats=[stats.percent,stats.excerses,stats.reads,stats.quizzes]
    return usersWithStats;  
};
function llamarAjax(){
   
	let xhrm=new XMLHttpRequest();
    xhrm.open('GET','mensaje.php',true);
    xhrm.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhrm.onload=_=>{
        if(xhrm.readyState === 4 && xhrm.status === 200){
            console.log("accedio ");
		    document.getElementById("mensajes").innerHTML=xhrm.responseText;
        }        
}
	xhrm.onerror=_=>console.log("hubo un errror");	
	xhrm.send();
}
