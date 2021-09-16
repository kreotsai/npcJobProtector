// ==UserScript==
// @name         NPC Job Pet Checker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  switches "Apply for this Job" links with a link to set your job pet as active, if they're not already.
// @author       plushies
// @match        https://neopetsclassic.com/faerieland/employ/jobs/*
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @grant        none
// ==/UserScript==

(function() {

    // Put the name of your job pet here, in quotations!
    var jobPet = "PETNAMEHERE";


    //////////////////////////////////////////////
    var activePet = document.querySelector("[href='/quickref/']").innerText;

    if (jobPet != activePet)
    {
        console.log("JOB PET NOT ACTIVE, ABORT MISSION")
        var jobs = document.querySelectorAll("[href^='/faerieland/employ/apply/?id=']");
        console.log(jobs);

        for (var job in jobs)
        {
            jobs[job].href = "https://neopetsclassic.com/setActivePet/?pet_name=" + jobPet;
            jobs[job].innerText = "Set " + jobPet + " as your active pet!";
        }

    }
    else
    {
     console.log("Job pet is active, make that bacon");
    }
})();
