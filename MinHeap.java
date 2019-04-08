public class MinHeap{
    private Process[] heap;
    private int size;
    private int max_size;

    public MinHeap(int max_size){
        this.size=0;
        this.max_size=max_size;
        this.heap=new Process[max_size+1];
    }

    private static final int FRONT=1;

    public int parent(int place){
        return place/2;
    }

    public int rightChild(int place){
        return (place*2+1);
    }

    public int leftChild(int place){
        return (place*2);
    }

    public boolean isLeaf(int place){
        if(place==1)return false;
        if((place>=(size/2)) && (place<=size)){
            return true;
        }
        return false;
    }

    public int getHeapSize(){
        return this.size;
    }

    public void swap(int firstPlace,int secondPlace){
        Process temp=heap[firstPlace];
        heap[firstPlace]=heap[secondPlace];
        heap[secondPlace]=temp;
    }

    public void minHeapify(int place){
        if(!isLeaf(place)){
            if((leftChild(place)<=size&&heap[place].getBurstTime()>heap[leftChild(place)].getBurstTime())||(rightChild(place)<=size&&(heap[place].getBurstTime())>heap[rightChild(place)].getBurstTime())){

                if(heap[leftChild(place)].getBurstTime()<heap[rightChild(place)].getBurstTime()){
                    swap(place,leftChild(place));
                    minHeapify(leftChild(place));
                }
                else{
                    swap(place,rightChild(place));
                    minHeapify(rightChild(place));
                }
            }
        }
    }

    public void insert(Process p) throws NullPointerException {
        heap[++size] = p;
        int current = size;
            while (current >1 && heap[current].getBurstTime() < heap[parent(current)].getBurstTime()) {
                    swap(current, parent(current));
                    current = parent(current);
                }

    }

    public Process remove(){
        Process popped =heap[FRONT];
        heap[FRONT]=heap[size--];
        minHeapify(FRONT);
        return popped;
    }

}