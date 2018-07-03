let url1='../data/cohorts.json';
let url2='../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
let url3='../data/cohorts/lim-2018-03-pre-core-pw/users.json';

let orderDirectionHTML=document.getElementById('orderDirection');
let search_student=document.getElementById('search_student');
let cohortSedeHTML=document.getElementById("cohortSede");
let listStudentHTML=document.getElementById("listUsersCohort");
let imgSearchHTML=document.getElementById('imgSearch');
let searchHTML=document.getElementById('search');
let informationUserHTML=document.getElementById('information');
/*............................................Inicia controlde eventos */
window.onload=function(){
    document.getElementById('wraperLogo').onclick=home;
    orderDirectionHTML.addEventListener('change',() => {
        cohortSedeHTML.style.display='none';
        listStudentHTML.style.display = "block";
        searchHTML.style.display='block;'
        orderDirectionHTML.style.color="green";
        informationUserHTML.style.display='none';
        const orderBy = document.getElementById('orderBy');
        orderUsers(orderBy.value,orderDirectionHTML.value);
    });
    imgSearchHTML.addEventListener('click',() =>{// muestro en div table search
        
        cohortSedeHTML.style.display = 'none';
        listStudentHTML.style.display = "block";
        informationUserHTML.style.display='none';        
        search_home_students(search_student.value);
    });
    document.getElementById('back-cohort').addEventListener('click',()=>{
        cohortSedeHTML.style.display='block';
        listStudentHTML.style.display = "none";
       
        location.reload();
    });
    document.getElementById('back-list').addEventListener('click',()=>{
        cohortSedeHTML.style.display='none';
        listStudentHTML.style.display = "block";        
        searchHTML.style.display='block';
        informationUserHTML.style.display="none";
    });
   
}
home =_=> {
    cohortSedeHTML.style.display='block';
    informationUserHTML.style.display='none';
    listStudentHTML.style.display='none';
    location.reload();//recarga la pagina
}
/*.........................................................termina control de eventos */
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
let options = {
    cohort:null,
    cohortData:{
        users: null,
        progress: null,
    },
    orderBy: 'name',
    orderDirection: 'ASC',
    search: '',
}
const data =_=> {// Funcion que inicializa las funciones asignando con los datos del json
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
            } 
            */  options.cohortData.users=jsonUsers;
                options.cohortData.progress=jsonProgress;
                processCohortData(options);
            });
        });
    });
}
data();
/*Tabla de informacion div out_list_student_item*/
toCallStats = idCohort => {// Funcion que me permite listar con valores por defecto
                const courses = 'intro';
                cohortSedeHTML.style.display = 'none';
                listStudentHTML.style.display = "block";
                informationUserHTML.style.display='none';
                let num = 0;
                options.cohort=idCohort.id;
                const listUser = processCohortData(options);
                searchHTML.innerHTML='';
                searchHTML.innerHTML += "<tr class='tableTitle'><td>Nro</td><td>Nombre</td><td>Promedio</td><td>Lectura</td><td>Ejercicios</td><td>Quizes</td><td>Total</td></tr>"
                Object.keys(listUser).forEach(list=>{                    
                    let information=listUser[list];//
                    if(idCohort.id == listUser[list].stats.cohort){
                        num++;
                        searchHTML.innerHTML += "<tr id='" + listUser[list].stats.idUser +
                        "' onclick='information(this)' data-name='"+listUser[list].stats.name+
                        "' data-course='"+courses+
                        "'><td>" + num +
                        "</td><td class='name-table'>"+ listUser[list].stats.name+
                        "</td><td class='import'>"+ listUser[list].stats.quizzes.scoreAvg+
                        "</td><td>"+ listUser[list].stats.reads.percent+" % "+
                        "</td><td>"+ listUser[list].stats.excercises.percent+" % "+
                        "</td><td>"+ listUser[list].stats.quizzes.percent+" % "+
                        "</td><td class='import'>"+ listUser[list].stats.percent+" % "+
                        "</td></tr>"
                    }else{
                        searchHTML.innerHTML='<h3>Aún no existen datos en '+(idCohort.id).toUpperCase()+'</h3>'
                    }
                });
                
}
/*Informacion por cada estudiante div information*/
information = (idUser)=> {// Funcion que muestra la informacion detallada por usuario  
                    const listUser = processCohortData(options);  // llamo a mis datos
                    const searchId=listUser.map(list=>{ // Busco al usuario con el id
                        if(idUser.id == list.stats.idUser){
                            return list;// retorna array con un solo objeto valido
                        }
                    });//[undefined,{},undefined]
                    const filterObjectValidate=searchId.filter(x=>{if(x!=undefined){return x;}});// filtro las posiciones undefined
                    filterObjectValidate.forEach(list=>{// recorro solo por unica vez :( por que ya esta filtrado 
                          var html_informacion = '<div class = "box-information">';
                                    html_informacion+= '<div class="wrap-box-information">';
                                     html_informacion+= '<p class="name-information"><span >'+list.stats.name+'</span></p>';// data ser atributo del elemento que evio la informacion
                                        html_informacion+= '<select class="select-course"><option>'+idUser.dataset.course+'</option></select>'
                                        html_informacion+= '<div class=info-resumen>'
                                            html_informacion+= '<p><span>Porcentaje:</span>'+list.stats.percent+' %</p>'
                                            html_informacion+= '<p><span>Puntaje:</span>'+list.stats.quizzes.scoreSum+' pts</p>'
                                        html_informacion+='</div>'
                                        html_informacion+='<div class="information-courses">';
                                            html_informacion+='<h3>Ejercicios</h3>'
                                            html_informacion+='<table>'
                                                html_informacion+='<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                                html_informacion+='<tr><td>Total de Ejercicios</td><td>'+list.stats.excercises.total+'</td></tr>'
                                                html_informacion+= '<tr><td>Ejercicios Completados</td><td>'+list.stats.excercises.completed+'</td></tr>'
                                                html_informacion+= '<tr><td>Avance</td><td>'+list.stats.excercises.percent+' %</td></tr>'
                                            html_informacion+='</table>'
                                        html_informacion+='</div>';
                                        html_informacion+='<div class="information-courses">';
                                            html_informacion+= '<h3>Lecturas</h3>'
                                            html_informacion+= '<table>'
                                                html_informacion+= '<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                                html_informacion+= '<tr><td>Numero de lecturas</td><td>'+list.stats.reads.total;+'</td></tr>'
                                                html_informacion+= '<tr><td>Ejercicios Completados</td><td>'+list.stats.reads.completed+'</td></tr>'
                                                html_informacion+= '<tr><td>Avance</td><td>'+list.stats.reads.percent+'% </td></tr>'
                                            html_informacion+= '</table>'
                                        html_informacion+='</div>';
                                        html_informacion+='<div class="information-courses">';
                                            html_informacion+= '<h3>Examen</h3>'
                                            html_informacion+= '<table>'
                                                html_informacion+= '<tr class="title-fila"><td>Item</td><td>Valor</td></tr>'
                                                html_informacion+= '<tr><td>Numero de examenes</td><td>'+list.stats.quizzes.total;+'</td></tr>'
                                                html_informacion+= '<tr><td>Examenes Completados</td><td>'+list.stats.quizzes.completed+'</td></tr>'
                                                html_informacion+= '<tr><td>Puntaje</td><td>'+list.stats.quizzes.scoreSum+'</td></tr>'
                                                html_informacion+= '<tr><td>Promedio</td><td>'+list.stats.quizzes.scoreAvg+'</td></tr>'
                                                html_informacion+= '<tr><td>Avance</td><td>'+list.stats.quizzes.percent+' %</td></tr>'
                                            html_informacion+= '</table>'
                                        html_informacion+='</div>';
                                    html_informacion+='</div>';
                                html_informacion+='</div>';
                                /*interfaz HTML */
                                cohortSedeHTML.style.display='none';
                                informationUserHTML.style.display='block';
                                listStudentHTML.style.display='none';
                                document.getElementById('informationDetallada').innerHTML=html_informacion;
                        });    
}
/*Ordenar estudiante div search*/
orderUsers = (orderBy, orderDirection)=>{// Funcion que muestra la lista ordenada
        const courses = 'intro';
        let num = 0;
        options.orderBy = orderBy;
        options.orderDirection = orderDirection;
        const order = processCohortData(options);
        const orderListaDeCohort = options.cohort;
        searchHTML.innerHTML = "";
        searchHTML.innerHTML += "<tr class='tableTitle'><td>Nro</td><td>Nombre</td><td>Promedio</td><td>Lectura</td><td>Ejercicios</td><td>Quizes</td><td>Total</td></tr>"
        order.forEach(date => {//forEach recorre el array original y no crea otro como el bendito map
            if(orderListaDeCohort == date.stats.cohort){
                num++;                    
                searchHTML.innerHTML += "<tr id='" + date.stats.idUser +
                    "' onclick='information(this)' data-name='"+date.stats.name+
                        "' data-course='"+courses+
                        "'><td>" + num +
                        " </td><td class='name-table'>"+ date.stats.name+
                        " </td><td class='import'>"+ date.stats.quizzes.scoreAvg+
                        " </td><td>"+ date.stats.reads.percent+" % "+
                        " </td><td>"+ date.stats.excercises.percent+" % "+
                        " </td><td>"+ date.stats.quizzes.percent+" % "+
                        " </td><td class='import'>"+ date.stats.percent+" % "+
                        " </td></tr>"
                    }
                });
}
/*BUscar estudiante div search*/
search_home_students =(string)=> {// La funcion busca la informacion por nombre
                let num = 0; 
                const courses = 'intro';
                options.search=string;
                const listUser = processCohortData(options);
                searchHTML.innerHTML = '';
                searchHTML.innerHTML += "<tr class='tableTitle'><td>Nro</td><td>Nombre</td><td>Promedio</td><td>Lectura</td><td>Ejercicios</td><td>Quizes</td><td>Total</td></tr>";
                for(var list in listUser){
                        num++;
                        searchHTML.innerHTML += "<tr id='" + listUser[list].stats.idUser +
                        "' onclick='information(this)' data-name='"+listUser[list].stats.name+
                        "' data-course='"+courses+
                        "'><td>" + num +
                        "</td><td class='name-table'>"+ listUser[list].stats.name+
                        "</td><td class='import'>"+ listUser[list].stats.quizzes.scoreAvg+
                        "</td><td>"+ listUser[list].stats.reads.percent+" % "+
                        "</td><td>"+ listUser[list].stats.excercises.percent+" % "+
                        "</td><td>"+ listUser[list].stats.quizzes.percent+" % "+
                        "</td><td class='import'>"+ listUser[list].stats.percent+" % "+
                        "</td></tr>"
                
                    }   
            
}
/*Listar cohort por sede */
loadCohortSede = ids =>{// Selecciona lista de cohort
    connectJson(url1, (error,json) => {
        const divList = document.getElementById('cohortOne');
        document.getElementById('view-menu').style.display = 'block'
        divList.innerHTML = '';
        let sede = json.filter(program => {
            const sedeJSON = program.id;
            return sedeJSON.toLowerCase().indexOf(ids.toLowerCase()) > -1;
            });
            for(var q in sede){
                divList.innerHTML += "<ul id='contentCohort'><li class='menuList'><span id='" + sede[q].id + "' onclick='toCallStats(this)'>" + sede[q].id + "</span></li></ul>";
           }
    });
    
}


