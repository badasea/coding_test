import java.util.*;

public class QueueArray_priority {
	private static int size = 5;
	private static int front = -1;
	private static int rear = -1; 
	private static char QueArr[] = new char[5];
	
	static Random r = new Random();
	private static int priority = r.nextInt(4);

	public boolean isFull() {
		return (rear == size - 1);
	}
	
	public boolean isEmpty() {
		if (front == rear) {
			front = -1;
			rear = -1;
		}
		return (front == rear);
	}
	
	public void enqueue(char pro) {
		
		if (isFull()) {
			System.out.println("큐가 다 찼습니다.");
		}
		else {
			QueArr[++rear] = pro;			
		}
	}

	public char dequeue() {
		if (isEmpty()) {
			System.out.println("큐에 프로세스가 존재하지 않습니다.");
		}
		else {
			front = (front + 1) % size;
			return QueArr[front];
		}
		return 0;
	}
	
	public void Queprint() {
		for (int i = front + 1; i<=rear; i++) {
					System.out.print("( " + QueArr[i] + " , " + priority + " ) ");
					System.out.print(" -> ");
		}
		System.out.println("");
	}
}
