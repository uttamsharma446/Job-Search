function handleSearch() {
    var inputData = document.querySelector("#inputData").value.toUpperCase();
    var AllJob = document.getElementById("show-job")
    var jobs = AllJob.getElementsByClassName("job");
    document.querySelector(".job-not-found").classList.add("display-none");

    for (var i = 0; i < jobs.length; i++) {
        var job = jobs[i].querySelector(".job-title").textContent.toUpperCase();
      
        if(job.indexOf(inputData)>-1)
        {
            jobs[i].style.display="";
           
        }
        else  if(job.indexOf(inputData)===-1)
        {
            
            jobs[i].style.display="none";
        }
        
        
    }



}
function handleClick() {
    var inputData = document.querySelector("#inputData").value.toUpperCase();
    var AllJob = document.getElementById("show-job")
    var jobs = AllJob.getElementsByClassName("job");
    for (var i = 0; i < jobs.length; i++) {
        var job = jobs[i].querySelector(".job-title").textContent.toUpperCase();
      
       console.log(job.indexOf(inputData));
       if(job.indexOf(inputData)===-1)
        {
            
          jobs[i].style.display="none";
           document.querySelector(".job-not-found").classList.remove("display-none");
  
        }
        
        
        
    }
}
