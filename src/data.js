//................................XHR
let xhr=new XMLHttpRequest();// instancio el objeto
xhr.open('GET','http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json',true);// hago los pedidos a mi servidor GET/POST -> solicitar datos/solicitar y enviar
xhr.onload =_=> {
    // CORS controles de acceso a servidores cruzados para servidores web
    if (xhr.readyState=== 4 && xhr.status === 200) {// Success!
        let data = JSON.parse(xhr.responseText);
       //console.log(data); // data en object
        for(var i in data){
            if(data[i].name=="Noely"){
                console.log(data[i]);
            }
            
           //console.log(Object.getOwnPropertyNames(data[i]));
            //console.log(data.publicAdmission);// me lista las propiedades del object data
        }
       
            
      }   
}
xhr.onerror=_=>console.log("error");// Error!
xhr.send();
/*
// ................................FETCH
fetch('http://localhost:8080/data/cohorts.json').then((response)=>{      
         if(response.status==200){
             console.log(response.status);
             console.log(response.json());
             console.log("SUCCESFULL holaa");
         } 
}).catch((error)=>{
    console.log("Uy! fallaste en algo :(");

});
//................................FETCH
const llamadasAjax=[];
llamadasAjax.push(fetch('http://localhost:8080/data/cohorts.json'));
llamadasAjax.push(fetch('http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json'));
llamadasAjax.push(fetch('http://localhost:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json'));

Promise.all(llamadasAjax).then((responses)=>{
        console.log(responses[0].json());
        console.log(responses[1].json());
        console.log(responses[2].json());
        console.log("provando promises");
   
}).catch((error)=>{
    console.log("errorss")
});
*/
/*.................................................................................................. */
var computeUsersStats=(ArrayUsers,ObjectProgress,ArrayCourses)=>{// creara lista usuarios
    /*users->arreglo de objetos
    progress->objeto de progreso del usuario para cada curso
    courses->arreglo de ids de los cursos del cohort de 'coursesIndex'
    Recorrer el arreglo de usuario y calcular los indcadores
    devolver un nuevo arreglo usuario 

    */
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
            scoreAvg:13,// promedio de puntuaciones en quizzes
        }
     };
     usersWithStats=[stats.percent,stats.excerses,stats.reads,stats.quizzes]
    return usersWithStats;
    
};
var sortUsers=(arrayUsers,orderBy,orderDirecction)=>{
// ordenar la lista
// users: arreglo de obj creado con computeUserStats
// computeUsersStats();
// orderBy: criterio de ordenado nombre,% de completitud,% ejercicios, quizzes,promedio y lecturas
// orderDirecction ACS y DES
//..quiero que mis criterios esten en un array
var criterio=[0,1,2,3,4,5,6];
for(i=0;i<=criterio.lenght;i++){
    if(orderBy==i){
        if(orderDirecction=='ASC'){
            //algoritmo para ordenar utilizando computerUsersStats
        arrayOrdenado=[/*..*/];
        }
    }

}
return arrayOrdenado;
// arreglo de usuario ordenado
};
var filter=(arrayUsers,search)=>{
//users: arreglo computerUsersStats
// string de busqueda

    for(i=0;i<=computeUsersStats.users.lenght;i++){
        //
        var names=computeUsersStats.users[i].name[i];
        if(search==names){
            return computeUsersStats.users[i];// tiene que retornar las alumnas con monbre noe
        }
    }

}

var processCohortData=(options)=>{

}
/*
window.SortUsers(users,orderBy,orderDirecction);// retorna un arreglo ordenado
w
window.processCohortData(options);*/
window.computeUsersStats;
window.sortUsers;
window.filterUsers;

//................................LLAMADA FORMULARIO
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