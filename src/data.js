//................................XHR
<<<<<<< HEAD

=======
>>>>>>> 163e464a3f3b94270940f0d7b50bd15d8dd86111
let xhr=new XMLHttpRequest();// instancio el objeto
xhr.open('GET','http://localhost:8080/data/cohorts.json',true);// hago los pedidos a mi servidor GET/POST -> solicitar datos/solicitar y enviar
xhr.onload =_=> {
    // CORS controles de acceso a servidores cruzados para servidores web
<<<<<<< HEAD
    if (xhr.status >= 200 && xhr.status < 400) {// Success!
=======
    if (xhr.readyState===4 && xhr.status === 200) {// Success!
>>>>>>> 163e464a3f3b94270940f0d7b50bd15d8dd86111
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        console.log("SUCCESFULL");
      }    
}
xhr.onerror=_=>console.log("error");

xhr.send();

function llamarAjax(){
<<<<<<< HEAD
	let xhrm=new XMLHttpRequest();
    xhrm.open('GET','...src/mesaje.php',true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhrm.onload=()=>{
		let mns=xhrm.responseText;
		document.getElementById('mensaje').innerHTML=mns;
		console.log("accedio");

	}
	xhrm.onerror=()=>{
		console.log("hubo un errror");

	}
	xhrm.send();
}
// ................................FETCH



































//....................................................................................................funciones
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
/*window.computeUsersStatus(users,progress,coirses);
=======
   
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
// ................................FETCH





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
>>>>>>> 163e464a3f3b94270940f0d7b50bd15d8dd86111
window.SortUsers(users,orderBy,orderDirecction);// retorna un arreglo ordenado
w
window.processCohortData(options);*/
window.computeUsersStats;
window.sortUsers;
window.filterUsers;