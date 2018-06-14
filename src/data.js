<<<<<<< HEAD

let url1='http://localhost:8080/data/cohorts.json';
    let url2='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json';
    let url3='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json';
function flo(url){
    return fetch(url).then((responses)=>{
        let dateJson= responses.json(); 
        let result=[];
        let prueva;
        prueva=Object.getOwnPropertyNames(dateJson);
        for(var i in dateJson){
            result+=dateJson[i];
            
        }
        return prueva;
        //En caso de que sean llamadas a api
    });    
}
console.log(flo(url2));
/*
//................................XHR
let cohortJson='http://localhost:8080/data/cohorts.json';
let progressJson='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json';
let usersJson='http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json';

let xhr=new XMLHttpRequest();// instancio el objeto
xhr.open('GET',progressJson,true);// hago los pedidos a mi servidor GET/POST -> solicitar datos/solicitar y enviar
xhr.onload =_=> {
    // CORS controles de acceso a servidores cruzados para servidores web
    if (xhr.readyState=== 4 && xhr.status === 200) {// Success!
        let data = JSON.parse(xhr.responseText);
       //console.log(data); // data en object
        for(var i in data){
            //console.log(data[i]);
                
            //console.log(Object.getOwnPropertyNames(data[i].coursesIndex));
            //console.log(data.publicAdmission);// me lista las propiedades del object data
        }      
      }   
}

xhr.onerror=_=>console.log("error");// Error!
xhr.send();
function con(url){
   fetch(url).then((response)=>{
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("La llamada a la API falló");
    }
}); 
}
var n=con(cohortJson);
console.log(n);



connectJson=(url)=>{
    var xmlhttp=new XMLHttpRequest(); 
    try{
        let dateJson;
        xmlhttp.open('GET',url);
        xmlhttp.onload=_=>{
            if(xmlhttp.readyState===4 && xmlhttp.status === 200){
                return JSON.parse(xmlhttp.responseText);
            }        
        }    
        xmlhttp.send();
        //return dateJson;
    }catch(e){
        return ("Error: " + e.description);
    }    
}
let cohortJson='http://localhost:8080/data/cohorts.json';

var  viewObject= connectJson(cohortJson);
console.log(viewObject);

/*.................................................................................................. */
let progress=()=>{
    let progress=connectJson(progressJson);
    let users=connectJson(usersJson);
    for(let i in progress){

    }
    return uid,{'javascriitp':'80'}
    //retornar llave para cada usuario (uid) con un objeto que contiene el progreso del usuario para cada curso.
}
let courses=()=>{
    // Arreglo de strings con los ids de los cursos del cohort en cuestión.
    //Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.
}
var computeUsersStats=(users,progress,courses)=>{// creara lista usuarios
       let stats={
=======
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
    //let courses=json.coursesIndex;
    //let idCourses=Object.getOwnPropertyNames(courses);
  
    // json.map(function(){return json.id;}); 
});
getJSON(url1);
//...................................................obtener users 
let users=_=>{
    return getJSON(url3);
}
//...................................................Obtener Progress
let progress=_=>{
    return getJSON(url2);
}
//...................................................Obtener courses
let courses=_=>{
    let cohortDate=getJSON(url1);
    let courses=cohortDate.coursesIndex;    
    for(var i in cohortDate){
       let idCourses=Object.keys(courses);  
    }
}
//..........................................................................................computeUsersstats
var computeUsersStats=(users,progress,courses) => {// creara lista usuarios

    let stats={
>>>>>>> e04cc12c839a97838fa1045e859ddd1d135a22bb
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