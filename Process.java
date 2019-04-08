public class Process {
    private int burstTime;
    private String name;
    private int arriveTime;
    private boolean isAdded;

    public Process(String name,int burstTime,int arriveTime){
        this.name=name;
        this.burstTime=burstTime;
        this.arriveTime=arriveTime;
        this.isAdded=false;
    }

    public String getName(){ return this.name; }

    public int getBurstTime(){
        return this.burstTime;
    }

    public int getArriveTime(){
        return this.arriveTime;
    }

    public void addToTheHeap(){ this.isAdded=true;}

    public boolean isAddedToTheHeap(){
        return isAdded;
    }
}
