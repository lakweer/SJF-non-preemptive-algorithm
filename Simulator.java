public  class Simulator {
    private MinHeap heap;
    private Process processes[];
    int totalTime;

    public Simulator(MinHeap heap, Process process[], int totalTime) {
        this.heap = heap;
        this.processes = process;
        this.totalTime = totalTime;
    }

    public void execute() {
        int time = 1;
        int temp1 = 1;
        int temp2 = 1;
        while (time < totalTime) {
            if (temp1 != time) {
                time = temp1;
                while (time != temp2) {
                    insertToHeap(time);
                    ++time;
                }

            } else {
                insertToHeap(time);
            }
            temp1 = time;
            if (heap.getHeapSize() > 0) {
                    Process p = heap.remove();
                    for (int i = 1; i <= p.getBurstTime(); i++) {
                        System.out.print("|");
                        System.out.print(time);
                        System.out.println("  | " + p.getName() + " |");
                        ++time;
                    }
                    temp2 = time;

            }else{
                System.out.print("|");
                System.out.print(time);
                System.out.println("  | No process |");
                ++time;
                temp2 = time;
            }
        }
    }

    public void insertToHeap(int time) {
        for (Process p : processes) {

            if (p.getArriveTime() == time && !p.isAddedToTheHeap()) {
                heap.insert(p);
                p.addToTheHeap();
            }
        }
    }

}
