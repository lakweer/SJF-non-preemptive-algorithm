class Scheduler {
    constructor(processList) {
        this.processMap = new Object();
        this.processQueue = [];
        this.tempProcess = null;
        this.processList=processList;
        this.tempTime = 0;
        this.graphData = [];
        this.totalTime=5;
        this.x=null;
    }

     execute() {
        var time = 1;
        var temp1 = 1;
        var temp2 = 1;
        while (time < this.totalTime) {
            if (temp1 != time) {
                time = temp1;
                while (time != temp2) {
                    this.insertToQueue(time);
                    ++time;
                }
            } else {
                this.insertToQueue(time);
            }
            temp1 = time;
            if (this.processQueue.length > 0) {
                var p = this.processQueue.shift();
                p.setStartTime(time);
                for (var i = 1; i <= p.getBurstTime(); i++) {
                    ++time;
                }
                temp2 = time;
            }else{
                ++time;
                temp2 = time;
            }
        }
    }

    insertToQueue(time) {
        for (var i=0;i<this.processList.length;i++) {
            this.tempProcess=this.processList[i];
            if (this.tempProcess.getArrivalTime() == time && !this.tempProcess.isAddedToQueue()) {
                this.processQueue.push(this.tempProcess);
                this.tempProcess.addToTheQueue();
                this.totalTime+=this.tempProcess.getBurstTime();
                this.sortProcessQueue();
            }
            this.tempProcess=null;
        }
    }

    sortProcessQueue(){
        if(this.processQueue.length>1){
            this.processQueue.sort(function(a, b){
                return a.getBurstTime()-b.getBurstTime()
            });
        }
    }

    makeGraphData(){
        for(var i=0;i<this.processList.length;i++){
            this.x=this.processList[i];
            const data={
                "category": this.x.getName(),
                "segments": [ {
                    "start": this.x.getStartTime(),
                    "duration": this.x.getBurstTime(),
                    "color": "red",
                    "task": this.x.getName()
                }]
            }
            this.graphData.push(data)
        }
        return this.graphData;
    }

}