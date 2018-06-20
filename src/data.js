
//..........................................................................................computeUsersstats
window.computeUsersStats=(users,progress,courses) => {// creara lista usuarios
    for(var userUnit in users){//para cada usuario
        let idUsers=Object.keys(process[user.id]);//
        percentComplit=_=>{
            for(var i in idUsers){// recorrer el object id
                let units = idUsers.intro.units
            }
            return xxx;
        }
        exercisesComplit=_=>{
            
            let objectExercises = {'total':total_Exercises,'completed':total_exercises_Complit,'percent':percent}
            return objectExercises;
        }
        readsComplit=_=>{
            let objectReads = {'total':total_Reads,'completed':total_reads_complit,'percent':percent}
            return objectReads;
        }
        quizzesComplit=_=>{
            let objectQuizz = {'total':total_Quizz,'completed':total_quizz_complit,'percent':percent}
            return objectQuizz;
        }
    }
    let stats={
        percent: percentComplit(),
        excercises:exisesComplit(),
        reads: readsComplit(),
        quizzes: quizzesComplit(),
       };
    usersWithStats=[stats.percent,stats.excerses,stats.reads,stats.quizzes]
    return usersWithStats;  
};
