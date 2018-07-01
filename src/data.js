window.computeUsersStats=(users,progress,courses) => {// creara lista usuarios
        const usersWithStats = users.map(user => { 
        const IdsUser = user.id;// almaceno los ids del cohort usuario
        const arrayOfIdUsers = Object.keys(progress[IdsUser]);//Obtengo el id de estudiantes
        percentComplit =_=> {
            let userPercent = 0;
            const percent = arrayOfIdUsers.map(cours => {return progress[IdsUser][cours].percent;});
                if(percent != 0){
                    userPercent = parseInt(userPercent)+parseInt(percent); // Hay % vacios que resultan NAN con esto los convierto a Num
                }else{
                    userPercent=0;
                }   
                return userPercent;           
        }
        
        exercisesComplit =_=> {
            const totalExercises =_=> { 
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let typeExcercises;//propiedad de la lista de propiedades del object parts
                let x = [];
                arrayOfIdUsers.map(coursIntro => {// recorro cada objeto INTRO del IdUSER
                    units = progress[IdsUser][coursIntro].units;// obtento el objeto UNITS del object INTRO
                    propiedadUnits = Object.keys(units);// propiedad de los unit / son tres partes
                    
                    propiedadUnits.map(unit => {// Recorro cada propiedad del obj UNITS
                        parts = progress[IdsUser][coursIntro].units[unit].parts;//y obtengo la propiedad PARTS de la propiedad UNIT
                        recorrerParts = Object.keys(parts);// lista propiedad de parts
                        
                        recorrerParts.map(part => {//recorro cada propiedad del ahora obj PARTS
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;// y obtengo la propiedad type
                            if(typeExcercises == 'practice' || recorrerParts == '06-exercises' ){
                                x++;
                            }
                            
                        });

                    });
                                    
                });
                return x;
            } 
            const solvedExercises =_=>{
                let units;// arrays de object units
                let propiedadUnits//array lista propiedad del object units
                let parts;//array de object parts
                let recorrerParts;// array lista de propiedades de object parts
                let x = 0;
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
                            type = progress[IdsUser][coursIntro].units[unit].parts[part].type; 
                            completed = progress[IdsUser][coursIntro].units[unit].parts[part].completed;
                            if(type == 'practice' || recorrerParts == '06-exercises' ){                               
                                if(completed==1){
                                    x++;
                                }                               
                            }                            
                        });
                    });                   
                   
                });              
               return x; 
            }
            const percentExercises =_=> {
               let percent = 0;
               if(totalExercises() != 0){
                   percent = Math.round(solvedExercises()*100/totalExercises());
               }else{
                   percent = 0;
               }
                return percent;
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
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;
                            if(typeExcercises == 'read'){
                                x++;
                            }                            
                        });
                    });                                    
                });
                return x;
            }
            const solvedReads =_=>{
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let x=0;
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
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
                             
             return x; 
            }
            const percentReads =_=>{
                let percent = 0;
                if(totalReads() != 0){
                    percent = Math.round(solvedReads()*100/totalReads());
                }else{
                    percent = 0;
                }
                
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
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type;
                            if(typeExcercises == 'quiz'){
                                x++;
                            }                            
                        });
                    });                     
                });
                return x;
            }
            const solvedQuizes =_=> {
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let x=0;
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
                            type = progress[IdsUser][coursIntro].units[unit].parts[part].type;
                            completed = progress[IdsUser][coursIntro].units[unit].parts[part].completed;
                            if(type == 'quiz'){                               
                                if(completed==1){
                                    x++;
                                }
                            }
                        });
                    });                   
                
                });          
                return x; 
            }
            const percentQuizes =_=> {
                let percent = 0;
                if(totalQuizes() != 0){
                    percent = Math.round(solvedQuizes()*100/totalQuizes());
                }else{
                    percent = 0;
                }
                 return percent; 
            }  
            const scoreSum =_=> {
                let units;
                let propiedadUnits;
                let parts;
                let recorrerParts;
                let typeExcercises;
                let sum=0;
                arrayOfIdUsers.map(coursIntro => {
                    units = progress[IdsUser][coursIntro].units;
                    propiedadUnits = Object.keys(units);
                    
                    propiedadUnits.map(unit => {
                        parts = progress[IdsUser][coursIntro].units[unit].parts;
                        recorrerParts = Object.keys(parts);
                        
                        recorrerParts.map(part => {
                            typeExcercises = progress[IdsUser][coursIntro].units[unit].parts[part].type; 
                            existScore=progress[IdsUser][coursIntro].units[unit].parts[part].score;
                            
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
                    name: user.name.toUpperCase(),
                    idUser: IdsUser,
                    cohort: user.signupCohort,
                    percent: percentComplit(),
                    excercises:exercisesComplit(),
                    reads: readsComplit(),
                    quizzes: quizzesComplit(),
                }};         
    });
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
    estudiantes = sortUsers(estudiantes,options.orderBy,options.orderDirection);
        if(options.search != ''){
            estudiantes = filterUsers(estudiantes,options.search);
            }else{
                estudiantes = sortUsers(estudiantes,options.orderBy,options.orderDirection);
            }  
    
    return estudiantes;    
}

