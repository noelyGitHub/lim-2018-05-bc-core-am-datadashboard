    let url1='../data/cohorts.json';
    let url2='../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
    let url3='../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const connectJson = (url,callback) => {
    let xmlhttp = new XMLHttpRequest(); 
    let dateJson;
    
    xmlhttp.onload =_=> {
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
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();   
};
getJSON = (urlJSON) => connectJson(urlJSON,(error,json) => {
    if(error){
        return console.error(error);
    }
    return json;        
});
//...................................................obtener cohorts
let cohorts=_=>{
   return getJSON(url1);
}
cohorts();
//...................................................obtener users 
let users=_=>{
    return getJSON(url3);
}
//...................................................Obtener Progress
let progress =_=> {
    return getJSON(url2);
}
// ..................................................obtener lista de cohort
listCohort=_=>{
    connectJson(url1,(error,json) => {
        let divList = document.getElementById('cohortOne');
        for(var q in json){
<<<<<<< HEAD
            // agregar cuando esta con elementos restringir entrada
            divList.innerHTML +=
             "<ul><li class='menuList'><span>" + json[q].id + "</span><ul><li id='" + json[q].id + "' onclick='listStudentCohort(this)'>ESTUADIANTES</li><li>CURSOS</li></ul></li></ul>";
           // "<div id='content-cohort'> <div >'"+json[q].id+"'</div> <div><ul><li id='"+json[q].id+"'>ESTUDIANTES</li> <li>CURSOS</li></ul> </div> </div>"
            }
        console.log(json);
     }); 	
}
//....................................................obtener la lista de estudiantes por cohor
listStudentCohort = (idCohort) => {
    connectJson( url3 , (error , json) => {
        let viewList = document.getElementById('listUsersCohort');
        let cohortSede = document.getElementById('cohortSede');
        for(var q in json){
            if(json[q].signupCohort == idCohort.id){
                viewList.style.display = "block";
                cohortSede.style.display = "none";
                viewList.innerHTML += "<li id = '" + json[q].name + "'>" + json[q].name + "</li>";  
            }else{
            }
        }
        console.log(idCohort);
    });
}
//....................................................buscar estudiante por home
search_home_students =_=> {
    
        connectJson(url3,(error , json) => {
            /*let encontrados=json.filter(function(persona){
                if(persona.name==="Noely"){
                    return true;
                }return false;
            });*/
            //let x=search(json,search_student.value);
           // let send=(x === true) ? console.log("see"): console.log("nooo");
            //console.log(recorrido);
            //document.getElementById('out_list_student_item').innerHTML = encontrados;
            //console.log(encontrados);
            let search_student = document.getElementById('search_student');// capto el valor de la busqueda menu
            let acumulador;
            let yeah;
        for(var n in json){
            //for(var i; i <= search_student.lenght; i++){debugger
                if(search_student.value==json[n].name){
                    acumulador +=search[i];
                    yeah += json[n].name;
                }
           // }
        }
        });
        search = (date,text) => {
            let arreglo = [];
            for(var n in date){
                let people = date[n];
                arreglo.push(people.name);                
            }
            return arreglo.indexOf(text) > -1;// comparacion
        }
        /*Noely, Noemi
            value[0]==jason[n].name[0]->N
            value[1]==json.name[1]->0
            value[2]==json.name[2]->e

=======
            divList.innerHTML += "<ul><li class='menuList'><span>" + json[q].id + "</span><ul><li id='" + json[q].id + "' onclick='listStudentCohort(this)'>ESTUADIANTES</li><li>CURSOS</li></ul></li></ul>";
            // "<div id='content-cohort'> <div >'"+json[q].id+"'</div> <div><ul><li id='"+json[q].id+"'>ESTUDIANTES</li> <li>CURSOS</li></ul> </div> </div>"
       }
     }); 	
}

listStudentCohort=(idCohort)=>{
    connectJson(url3,(error,json)=>{
        let viewList=document.getElementById("listUsersCohort");
        let cohortSede=document.getElementById("cohortSede");
        for(var q in json){
                if(json[q].signupCohort==idCohort.id){
                viewList.style.display="block";
                cohortSede.style.display='none';
                viewList.innerHTML+="<li id='"+json[q].name+"'>"+json[q].name+"</li>";  
            }
        }
    });
}
search_home_students =_=> {// ELIMINAR TODOS LOS ELEMENTOS DEL SECTION PARA MOSTRAR LA IMAGEN
    
    connectJson(url3,(error , json) => {
        let search_student=document.getElementById('search_student').value;
        for(var k in json){
            for(var i=0; i<=search_student.lenght;i++){
                if(search_student[i] == json[k].name[i]){
                    document.getElementById('out_list_student_item').innerHTML="<li id='"+json[k].name+"'>"+json[k].name+"</li>";  
                    console.log();
                }
            }
        }
    });
    search = (date,text) => {
        let arreglo = [];
        for(var n in date){
            let people = date[n];
            arreglo.push(people.name);                
        }
        return arreglo.indexOf(text) > -1;// comparacion
    }
    /*Noely, Noemi
        value[0]==jason[n].name[0]->N
        value[1]==json.name[1]->0
        value[2]==json.name[2]->e
    */   
}
>>>>>>> d21196f72c1421989d78e7c67b905b59878d7542

        */
    
}
//...................................................Obtener courses
let courses = _ => {
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
var computeUsersStats=(users,progress,courses) => {// creara lista usuarios

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
