let ourRequest=new XMLHttpRequest();
ourRequest.open('GET','../data/cohorts.json');
ourRequest.onprogress=function(){
    console.log(ourRequest.statusText);
}
ourRequest.onload = function () {
    console.log(ourRequest.responseText);
    //console.log(XMLHttpRequest.status);
}
ourRequest.send(null);

/*window.computeUsersStatus(users,progress,coirses);
window.SortUsers(users,orderBy,orderDirecction);// retorna un arreglo ordenado
window.filterUsers(users,search);
window.processCohortData(options);*/