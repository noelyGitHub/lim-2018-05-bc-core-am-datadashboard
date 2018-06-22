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
//...................................................Obtener courses para computeUsersStats()
data =_=> {
    connectJson(url2,(error,jsonProgress) => {
        connectJson(url3,(error,jsonUsers) => {
            connectJson(url1,(error,jsonCohort) => {
                let courses = 'intro';
                return computeUsersStats(jsonUsers,jsonProgress,courses);
            });
        });
    });
}
toCallStats = idCohort => {
    connectJson(url2,(error,jsonProgress) => {
        connectJson(url3,(error,jsonUsers) => {
            connectJson(url1,(error,jsonCohort) => {
            /*let arrayIds=[];
                let courses=[];
                for(var i in jsonCohort){
                    var idCourses=Object.keys(jsonCohort[i].coursesIndex);
                    for(var value in idCourses){
                        let x=idCourses[value];
                        arrayIds.push(x);
                    }  
                    courses=arrayIds.sort().filter((x, i, a) => !i || x != a[i-1]);// 14 idCursos obtenidos
            } */   
                let courses = 'intro';
                let listUser = computeUsersStats(jsonUsers,jsonProgress,courses);// instancio al object
                let cohortSede = document.getElementById("cohortSede");
                let viewList = document.getElementById("listUsersCohort");
                let tableList = document.getElementById('out_list_student_item');
                let num = 0;
                // console.log(listUser);                        
                Object.keys(listUser).map(list=>{                    
                    let information=listUser[list];
                    cohortSede.style.display = 'none';
                    viewList.style.display = "block";
                    if(idCohort.id == listUser[list].cohort){
                        num++;                                
                        tableList.innerHTML += "<tr id='" + listUser[list].idUser + "' onclick='information(this)'><td>" + num +
                            "</td><td class='name-table'>"+ listUser[list].name+
                            "</td><td class='import'>"+ listUser[list].quizzes.scoreAvg+
                            "</td><td>"+ listUser[list].reads.percent+" % "+
                            "</td><td>"+ listUser[list].excercises.percent+" % "+ //noely malena yossie
                            "</td><td>"+ listUser[list].quizzes.percent+" % "+
                            "</td><td class='import'>"+ listUser[list].percent+" % "+
                            "</td></tr>"
                    } 
                    });
                });                         
                                   
        });
    });
}

information = (idUser)=> {
    connectJson(url2,(error,jsonProgress) => {
        connectJson(url3,(error,jsonUsers) => {
            connectJson(url1,(error,jsonCohort) => {
                let courses = 'intro';
                let listUser= computeUsersStats(jsonUsers,jsonProgress,courses);
                
                Object.keys(listUser).map(list=>{ 
                    //console.log(idUser.id+'......'+listUser[list].name);
                    if(idUser.id==listUser[list].idUser){
                        
                        let viewList = document.getElementById("listUsersCohort");
                        viewList.style.display = "none";
                        var html_informacion = '<div class = "box-information">';
                                html_informacion+= '<div class="wrap-box-information">';
                                html_informacion+= '<h4 class="info-individual">Informacion Detallada</h4>'
                                    html_informacion+= '<p class="name-information"><span >'+listUser[list].name+'</span></p>';
                                    html_informacion+= '<select class="select-course"><option>'+courses+'</option></select>'
                                    html_informacion+= '<div class=info-resumen>'
                                        html_informacion+= '<p><span">Porcentaje</span>'+listUser[list].percent+'</p>'
                                        html_informacion+= '<p><span">Puntaje</span>'+listUser[list].quizzes.scoreSum+'</p>'
                                    html_informacion+='</div>'
                                    html_informacion+='<div class="information-courses">';
                                        html_informacion+='<h3>Ejercicios</h3>'
                                        html_informacion+='<table>'
                                            html_informacion+='<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                            html_informacion+='<tr><td>Total de Ejercicios</td><td>'+listUser[list].excercises.total+'</td></tr>'
                                            html_informacion+= '<tr><td>Ejercicios Completados</td><td>'+listUser[list].excercises.completed+'</td></tr>'
                                            html_informacion+= 'tr><td>Avance</td><td>'+listUser[list].excercises.percent+'</td></tr>'
                                        html_informacion+='</table>'
                                    html_informacion+='</div>';
                                    html_informacion+='<div class="information-courses">';
                                        html_informacion+= '<h3>Lecturas</h3>'
                                        html_informacion+= '<table>'
                                            html_informacion+= '<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                            html_informacion+= '<tr><td>Numero de lecturas</td><td>'+listUser[list].reads.total;+'</td></tr>'
                                            html_informacion+= '<tr><td>Ejercicios Completados</td><td>'+listUser[list].reads.completed+'</td></tr>'
                                            html_informacion+= 'tr><td>Avance</td><td>'+listUser[list].reads.percent+'</td></tr>'
                                        html_informacion+= '</table>'
                                    html_informacion+='</div>';
                                    html_informacion+='<div class="information-courses">';
                                        html_informacion+= '<h3>Examen</h3>'
                                        html_informacion+= '<table>'
                                            html_informacion+= '<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                            html_informacion+= '<tr><td>Numero de examenes</td><td>'+listUser[list].quizzes.total;+'</td></tr>'
                                            html_informacion+= '<tr><td>Examenes Completados</td><td>'+listUser[list].quizzes.completed+'</td></tr>'
                                            html_informacion+= '<tr><td>Puntaje</td><td>'+listUser[list].quizzes.scoreSum+'</td></tr>'
                                            html_informacion+= 'tr><td>Promedio</td><td>'+listUser[list].quizzes.scoreAvg+'</td></tr>'
                                            html_informacion+= 'tr><td>Avance</td><td>'+listUser[list].quizzes.percent+'</td></tr>'
                                        html_informacion+= '</table>'
                                    html_informacion+='</div>';
                                html_informacion+='</div>';
                            html_informacion+='</div>';
                        let tableList = document.getElementById('out_list_student_item');
                        tableList.style.display='none';
                        document.getElementById('information').innerHTML=html_informacion;
                    }
               });
                
            });
        });
    });    
}
//document.getElementById().addEventListener('click',toCallStats());
listCohort=_=>{
connectJson(url1,(error,json) => {
    let divList = document.getElementById('cohortOne');
    for(var q in json){
        divList.innerHTML += "<ul><li class='menuList'><span>" + json[q].id + "</span><ul><li id='" + json[q].id + "' onclick='toCallStats(this)'>ESTUDIANTES</li></ul></li></ul>";
        }
 }); 	
}
/*Listar estudiante por cohort */
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
/*BUscar estudiante */
search_home_students =_=> {// ELIMINAR TODOS LOS ELEMENTOS DEL SECTION PARA MOSTRAR LA IMAGEN
connectJson(url3,(error , json) => {
   let user=document.getElementById('search_student');
   let listUser=document.getElementById('out_list_student_item');
   for(var i in json){
        if(json[i].name === user.value){
            cohortSede.style.display='none';
            listUser.innerHTML+="<tr id="+json[i].id+"><td>"+json[i].name+"</td><td>"+json[i].role+"</td><td>"+json[i].signupCohort+"</td></tr>"
        console.log(json[i].name);
        }
   }
});
}