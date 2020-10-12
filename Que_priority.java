import java.util.*;

public class Que_priority {
	
	public static void main(String[] args) {
		int num;
		QueueArray_priority q = new QueueArray_priority();
		
		System.out.println("                 우선순위 큐 (Priority Queue) 구현 프로그램");
		System.out.println("------------------------------------------------");
		System.out.print("큐(Queue) 생성은 0번, 삭제는 1번을 눌러주세요 (-1 입력시 종료) : ");
		Scanner sc = new Scanner(System.in);
		do {
			num = sc.nextInt();
			// 큐 생성
			if (num == 0)
			{				
				System.out.println("");
				System.out.print("프로세스를 생성해주세요. (알파벳을 입력해주세요) : ");
				char pro = sc.next().charAt(0);
				q.enqueue(pro);
				System.out.println("");
				q.Queprint();
				System.out.println("");
				System.out.print("큐(Queue) 생성은 0번, 삭제는 1번을 눌러주세요 (-1 입력시 종료) : ");
			}
			// 큐 제거
			else if (num == 1)
			{
				System.out.println("");
				q.dequeue();
				q.Queprint();
				System.out.println("");
				System.out.print("큐(Queue) 생성은 0번, 삭제는 1번을 눌러주세요 (-1 입력시 종료) : ");
			}
			// 프로그램 종료
			else if (num == -1)
			{
				System.out.println("");
				System.out.println("                  프로그램을 종료합니다.");
				System.out.println("------------------------------------------------");
			}
			// 숫자 재입력
			else
			{
				System.out.println("");
				System.out.println("       잘못된 수가 입력되었습니다. 숫자를 다시 입력해주세요.");
				System.out.print("큐(Queue) 생성은 0번, 삭제는 1번을 눌러주세요 (-1 입력시 종료) : ");
			}
		} while (num != -1);
	}
}
