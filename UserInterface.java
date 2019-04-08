public class UserInterface {
    public static void main(String[] arg){
        int number_of_processes=5;
        Process p1 = new Process("P1",4,1);
        Process p2 = new Process("P2",1,1);
        Process p3 = new Process("P3",1,1);
        Process p4 = new Process("P4",3,14);
        Process p5 = new Process("P5",2,1);
        MinHeap heap = new MinHeap(number_of_processes);
        Process processes[] = new Process[5];
        processes[0]=p1;
        processes[1]=p2;
        processes[2]=p3;
        processes[3]=p4;
        processes[4]=p5;
        Simulator simulator =new Simulator(heap,processes,20);
        simulator.execute();


    }
}
