
//..........................................................................................computeUsersstats
window.computeUsersStats=(users,progress,courses) => {// creara lista usuarios
    const usersWithStats = users.map(user => { 
        const IdsUser=user.id;// almaceno los ids del cohort usuario
        const arrayCourses = Object.keys(progress[IdsUser]);//Obtengo el array curso -> 'intro'
        const name=user.name;
        const cohort=user.signupCohort;
        /* % de complititud */
        percentComplit =_=> {
            let userPercent=0;// almaceno el nombre y percent
            const percent = arrayCourses.map(cours => {return progress[IdsUser][cours].percent;});
            userPercent = parseInt(userPercent)+parseInt(percent);     
           // console.log(name+'complititud :'+ userPercent +'%');
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
            const solvedExercises=_=>{
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
                   percent = parseInt(solvedExercises()*100/parseInt(totalExercises()));
               }else{
                   percent = 0;
               }
               
               //console.log('% exercises completados :'+percent);
               return percent; // % de ejercicios resueltos

           }
           let objectExercises = {'total':totalExercises(),'completed':solvedExercises(),'percent':percentExercises()}
            return objectExercises;//objectExercises;*/
        }
        readsComplit=_=>{
            const totalReads=_=>{
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
           const solvedReads=_=>{
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
           const percentReads=_=>{
                let percent = 0;
                if(totalReads() != 0){
                    percent = parseInt(solvedReads()*100/parseInt(totalReads()));
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
               // console.log('Total de examen: '+x);  
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
                    percent = parseInt(solvedQuizes()*100/parseInt(totalQuizes()));
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
                            existScore=Object.keys(progress[IdsUser][coursIntro].units[unit].parts[part]);// MEDICIONES
                            if(typeExcercises == 'quiz'|| existScore=='score'){
                               sumScore = progress[IdsUser][coursIntro].units[unit].parts[part].score;
                               sum=sum+parseInt(sumScore);
                              }
                        });

                    });
                   // console.log('Suma de puntuaciones: '+sum);                 
                });
                 
                //console.log(recorrerParts);
                return sum;//Total de read en 'intro'
            }
            const scoreAvg =_=> {
                let avgScore=0;
                if(totalQuizes() != 0){
                    avgScore =Math.round(parseInt(scoreSum()) / parseInt(totalQuizes()),-1);
                    
                }
                //console.log('PROMEDIO :'+avgScore);
                return avgScore;
                
            }          
            let objectQuizz = {'total':totalQuizes(),'completed':solvedQuizes(),'percent':percentQuizes(),'scoreSum':scoreSum(),'scoreAvg':scoreAvg()}
            return objectQuizz;
        }
        var stats={
        
        name: name,
        idUser: IdsUser,
        cohort: cohort,
        percent: percentComplit(),
        excercises:exercisesComplit(),
        reads: readsComplit(),
        quizzes: quizzesComplit(),
       }
       
       return stats; 
    });
    //console.log(usersWithStats);
    return usersWithStats;  // objeto que contiene toda la informacion
};

window.sortUsers=( users , orderBy, orderDirection ) => {// Ordenar la lista de usuario
    return null;// arreglo de usuarios ordenados
}
window.filterUsers=(users, search)=>{
    return null;// arreglo usuarios que cumplan con la condicion filtrado
}
window.processCohortData=(options)=>{
    var option={
        cohort:{},// objeto lista de cohort
        cohortData:{
            users:[],//arreglo de usuarios miembros de cohort
            progress:{}//data de progress de cada usuario
        },
        orderBy: string,//string ordenado
        orderDirection: String, // string direccion
        search: String, // string filtrado
    }
    computeUsersStats(options.cohortData.users,options.cohortData.progress);
    sortUsers(options.users,options.orderBy,options.orderDirection);
    filterUsers(options.users,options.search);
    
}
