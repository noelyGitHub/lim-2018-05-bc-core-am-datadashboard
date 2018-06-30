window.computeUsersStats=(users,progress,courses) => {// creara lista usuarios
        const usersWithStats = users.map(user => { 
        const IdsUser=user.id;// almaceno los ids del cohort usuario
        //console.log(progress);
        const arrayCourses = Object.keys(progress[IdsUser]);//Obtengo el id de estudiantes
        const name=user.name;
        const cohort=user.signupCohort;                
        percentComplit =_=> {
            let userPercent=0;// almaceno el nombre y percent
            const percent = arrayCourses.map(cours => {return progress[IdsUser][cours].percent;});
                if(percent != 0){
                    userPercent = parseInt(userPercent)+parseInt(percent); //para que no sea array
                }else{
                    userPercent=0;
                }   
                return userPercent;// retorno un array de objetos del nombre y percent            
        }
        exercisesComplit =_=> {
            const totalExercises =_=> { 
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let typeExcercises;//propiedad de la lista de propiedades del object parts
                let x=[];
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            if(typeExcercises == 'practice' || recorrerParts == '06-exercises' ){
                                x++;
                            }
                            
                        });

                    });
                                    
                });
                // console.log('Total de ejercicio: '+x);  
                //console.log(recorrerParts);
                return x;//Total de ejercicios en 'intro'
            } 
            const solvedExercises =_=>{
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let x = 0;
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            type = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            completed = progress[IdsUser][coursIntro].units[unit].parts[part].completed;
                            if(type == 'practice' || recorrerParts == '06-exercises' ){                               
                                if(completed==1){
                                    x++;
                                }                               
                            }                            
                        });
                    });                   
                   
                });
                //console.log('Total de completado :'+x);               
               return x; // total de ejercicios completados
            }
            const percentExercises =_=> {
               let percent = 0;
               if(totalExercises() != 0){
                   percent = Math.round(solvedExercises()*100/totalExercises());
               }else{
                   percent = 0;
               }
               //console.log('% exercises completados :'+percent);
               return percent; // % de ejercicios resueltos
            }
            let objectExercises = {'total':totalExercises(),'completed':solvedExercises(),'percent':percentExercises()}
            return objectExercises;
        }
        readsComplit=_=>{
            const totalReads =_=>{
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let x=[];
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            if(typeExcercises == 'read'){
                                x++;
                            }                            
                        });
                    });                                    
                });
                //console.log('Total de lecturas: '+x);  
                //console.log(recorrerParts);
                return x;//Total de read en 'intro'
            }
            const solvedReads =_=>{
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let typeExcercises;//propiedad de la lista de propiedades del object parts
                let x=0;
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            type = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            completed = progress[IdsUser][coursIntro].units[unit].parts[part].completed;
                            if(type == 'read'){                               
                                if(completed==1){
                                    x++;
                                }
                                
                            }
                            
                        });

                    });
                    
                
                });
                //console.log('Total de completado :'+x);               
             return x; // total de read completados 
            }
            const percentReads =_=>{
                let percent = 0;
                if(totalReads() != 0){
                    percent = Math.round(solvedReads()*100/totalReads());
                }else{
                    percent = 0;
                }
                //console.log('% lecturas completados :'+percent);
                return percent; // % de ejercicios resueltos
            }
            let objectReads = {'total':totalReads(),'completed':solvedReads(),'percent':percentReads()}
            return objectReads;
        }
        quizzesComplit =_=> {
            const totalQuizes =_=> {
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let x=[];
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            if(typeExcercises == 'quiz'){
                                x++;
                            }                            
                        });
                    });                     
                });
                //console.log(recorrerParts);
                return x;//Total de read en 'intro'
            }
            const solvedQuizes =_=> {
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let typeExcercises;//propiedad de la lista de propiedades del object parts
                let x=0;
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            type = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            completed = progress[IdsUser][coursIntro].units[unit].parts[part].completed;
                            if(type == 'quiz'){                               
                                if(completed==1){
                                    x++;
                                }
                            }
                        });
                    });                   
                
                });
                //console.log('Total de completado :'+x);               
                return x; // total de examen completados 
            }
            const percentQuizes =_=> {
                let percent = 0;
                if(totalQuizes() != 0){
                    percent = Math.round(solvedQuizes()*100/totalQuizes());
                }else{
                    percent = 0;
                }
                
                //console.log('% examen completados :'+percent);
                return percent; // % de ejercicios resueltos
            }  
            const scoreSum =_=> {
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let sum=0;
                arrayCourses.map(coursIntro => {// por cada ids -> recorro intro
                    units = progress[IdsUser][coursIntro].units;//llego al objeto unidades
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// recorro cada propiedada del  units
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//llego a parts// cursos especificos
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedades de parts
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;//obtendo el tipo 
                            existScore=progress[IdsUser][coursIntro].units[unit].parts[part].score;// MEDICIONES
                            
                            if(typeExcercises == 'quiz' && existScore !=undefined){
                                     sumScore = progress[IdsUser][coursIntro].units[unit].parts[part].score;
                                     sum=sum+parseInt(sumScore);
                                }else{
                                    sum=sum;
                                }
                            });

                    });                
                });
                return sum;//Total de read en 'intro'
            }
            const scoreAvg =_=> {
                let avgScore = 0;
                if(solvedQuizes() != 0){
                    avgScore =Math.round(scoreSum() / solvedQuizes());                    
                }
                return avgScore;
                
            }          
            let objectQuizz = {'total':totalQuizes(),'completed':solvedQuizes(),'percent':percentQuizes(),'scoreSum':scoreSum(),'scoreAvg':scoreAvg()}
            return objectQuizz;
        }
        return  {stats:{
                    name: name.toUpperCase(),
                    idUser: IdsUser,
                    cohort: cohort,
                    percent: percentComplit(),
                    excercises:exercisesComplit(),
                    reads: readsComplit(),
                    quizzes: quizzesComplit(),
                }};         
    });
    console.log(usersWithStats);
    return  usersWithStats;
};
window.sortUsers=( users , orderBy, orderDirection ) => {// Ordenar la lista de usuario
    let order;
    if(orderBy == 'name'){
        if(orderDirection === 'ASC'){
            order = users.sort( (a,b)=>{
                if(a.stats.name > b.stats.name){
                    return 1;
                }
                if(a.stats.name < b.stats.name){
                    return -1
                }
                return 0
            });                     
        }
        if(orderDirection === 'DES'){  
            order = users.sort( (a,b) => {
                if(a.stats.name < b.stats.name){
                    return 1;
                }
                if(a.stats.name > b.stats.name){
                    return -1;
                }
                return 0
            }); 
        }
    }
    else{
        if(orderDirection === 'ASC'){
            order = users.sort( (a,b) => {
                switch (orderBy){
                    case 'percent': return a.stats.percent - b.stats.percent; break;
                    case 'percentExercises': return a.stats.excercises.percent - b.stats.excercises.percent; break;
                    case 'percentReads': return a.stats.reads.percent - b.stats.reads.percent; break;
                    case 'percentQuizes': return a.stats.quizzes.percent - b.stats.quizzes.percent; break;
                    case 'promedio': return a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg; break;
                }
                             
            });   
        }
        if(orderDirection === 'DES'){
            order = users.sort((a,b) => {                
                switch (orderBy){
                    case 'percent': return b.stats.percent - a.stats.percent; break;
                    case 'percentExercises': return b.stats.excercises.percent - a.stats.excercises.percent; break;
                    case 'percentReads': return b.stats.reads.percent - a.stats.reads.percent; break;
                    case 'percentQuizes': return b.stats.quizzes.percent - a.stats.quizzes.percent; break;
                    case 'promedio': return b.stats.quizzes.scoreAvg - a.stats.quizzes.scoreAvg; break;
                }
                             
            }); 
        
        }                        
    }
    return order;

}
window.filterUsers=(users, search)=>{
    let student=users.filter(item=>{
             const searchName=item.stats.name;
             return searchName.toLowerCase().indexOf(search.toLowerCase()) > -1;
    }); 
    return student;
}
window.processCohortData=options=>{
    courses='intro';
    let estudiantes = computeUsersStats(options.cohortData.users,options.cohortData.progress,courses);
    //console.log(estudiantes);
    estudiantes = sortUsers(estudiantes,options.orderBy,options.orderDirection);
    if(options.search != ''){
        estudiantes = filterUsers(estudiantes,options.search);
    }else{
        estudiantes = sortUsers(estudiantes,options.orderBy,options.orderDirection);
    }  
    return estudiantes;    
}

