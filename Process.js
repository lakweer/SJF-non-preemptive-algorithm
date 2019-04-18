class Process {
    constructor(pid,name, arrivalTime, burstTime) {
        this.pid = pid;
        this.name = name;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.startTime=null;
        this.isAdded=false;
    }


    getArrivalTime(){
        return this.arrivalTime;
    }

    getBurstTime(){
        return this.burstTime;
    }

    isAddedToQueue(){
        return this.isAdded;
    }

    addToTheQueue(){
        this.isAdded=true;
    }


    getStartTime(){
        return this.startTime;
    }

    setStartTime(time){
        this.startTime=time;
    }

    getName(){
        return this.name;
    }

    getId123(){
        return 1;
    }

}