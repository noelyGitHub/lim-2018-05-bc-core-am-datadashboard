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
toCallStats=_=>{
    connectJson(url2,(error,jsonProgress)=>{
        connectJson(url3,(error,jsonUsers)=>{
            connectJson(url1,(error,jsonCohort)=>{
                let arrayIds=[];
                let courses=[];
                for(var i in jsonCohort){
                    var idCourses=Object.keys(jsonCohort[i].coursesIndex);
                    for(var value in idCourses){
                        let x=idCourses[value];
                        arrayIds.push(x);
                    }  
                    courses=arrayIds.sort().filter((x, i, a) => !i || x != a[i-1]);// 14 idCursos obtenidos
                    //console.log(filter);
                    computeUsersStats(jsonUsers,jsonProgress,courses);
                    console.log(jsonUsers);
                    console.log(jsonProgress);
                    console.log(courses); 
                }     
                
             
            });            
        });
    });
}
prueva=_=>{
    connectJson(url3,(error,jsonUsers)=>{
        connectJson(url2,(error,jsonProgress)=>{
            for(var i in jsonProgress){
                for(var k in jsonUsers){
                    idProgress=Object.keys(jsonProgress[i]);
                    users=jsonUsers.filter(user=>user.id==idProgress);    
                    
            }
           // console.log(users);
            }    
                for(var k in jsonProgress){
                    intro=jsonProgress[k].intro;
                    idProgress=Object.keys(jsonProgress[i]);
                    function percent(){
                        let percent;
                        for(var i in intro){
                            percent=intro.percent;
                           // console.log(percent); 
                        }
                        return percent;
                    } 
                    function exercises(){

                    } 
                   // console.log(k+' % '+percent());   
                }
                       
        });
});
}
prueva();
/* Listar Cohort */
listCohort=_=>{
connectJson(url1,(error,json) => {
    let divList = document.getElementById('cohortOne');
    for(var q in json){
        divList.innerHTML += "<ul><li class='menuList'><span>" + json[q].id + "</span><ul><li id='" + json[q].id + "' onclick='listStudentCohort(this)'>ESTUDIANTES</li><li>CURSOS</li></ul></li></ul>";
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
   listUser.innerHTML="";
   for(var i in json){
        if(json[i].name === user.value){
            cohortSede.style.display='none';
            
            listUser.innerHTML+="<tr id="+json[i].id+"><td>"+json[i].name+"</td><td>"+json[i].role+"</td><td>"+json[i].signupCohort+"</td></tr>"
        console.log(json[i].name);
        }
   }
});
}
  

