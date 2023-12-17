function getData (dataId, getNextData){
    //2s
    setTimeout( () => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000 );
}
getData(100, () => {
    getData(500,()=>{
          getData(1000,()=>{
            getData("end");
          })
    });
})

//