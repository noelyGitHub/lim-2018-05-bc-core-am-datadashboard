//................................XHR

let xhr=new XMLHttpRequest();// instancio el objeto
xhr.open('GET','http://localhost:8080/data/cohorts.json',true);// hago los pedidos a mi servidor GET/POST -> solicitar datos/solicitar y enviar
xhr.onload =_=> {
    // CORS controles de acceso a servidores cruzados para servidores web
    if (xhr.status >= 200 && xhr.status < 400) {// Success!
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        console.log("SUCCESFULL");
      }    
}
xhr.onerror=_=>console.log("error");

xhr.send();

function llamarAjax(){
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
window.SortUsers(users,orderBy,orderDirecction);// retorna un arreglo ordenado
window.filterUsers(users,search);
window.processCohortData(options);*/