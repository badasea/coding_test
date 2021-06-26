#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#define Q_SIZE 100

typedef int element;		// 큐 원소(element)의 자료형을 char로 정의
typedef struct {
	element queue[Q_SIZE];	// 1차원 배열 큐 선언
	int front, rear;
} QueueType;

// 공백 순차 큐를 생성하는 연산
QueueType* createQueue() {
	QueueType* Q;
	Q = (QueueType*)malloc(sizeof(QueueType));
	Q->front = -1;	// front 초깃값 설정
	Q->rear = -1;	// rear 초깃값 설정
	return Q;
}

// 순차 큐가 공백 상태인지 검사하는 연산
int isEmpty(QueueType* Q) {
	if (Q->front == Q->rear) {
		return 1;
	}
	else return 0;
}

// 순차 큐가 포화 상태인지 검사하는 연산
int isFull(QueueType* Q) {
	if (Q->rear == Q_SIZE - 1) {
		return 1;
	}
	else return 0;
}

// 순차 큐의 rear에 원소를 삽입하는 연산
void enQueue(QueueType* Q, element item) {
	if (isFull(Q)) return;  // 포화 상태이면, 삽입 연산 중단
	else {
		Q->rear++;
		Q->queue[Q->rear] = item;
	}
}

// 순차 큐의 front에서 원소를 삭제하는 연산
element deQueue(QueueType* Q) {
	if (isEmpty(Q)) return 0;  // 공백 상태이면, 삭제 연산 중단
	else {
		Q->front++;
		return Q->queue[Q->front];
	}
}

// 순차 큐의 원소를 출력하는 연산
void printQ(QueueType* Q) {
	int i;
	printf(" Queue : [");
	for (i = Q->front + 1; i <= Q->rear; i++)
		printf("%3d", Q->queue[i]);
	printf(" ]");
}

// 순차 큐의 가장 앞에 있는 원소를 검색하는 연산
element peek(QueueType* Q) {
	if (isEmpty(Q)) exit(1); // 공백 상태이면 연산 중단
	else return Q->queue[Q->front + 1];
}

int main()
{
	// 연산 큐 생성
	QueueType* Q = createQueue();
	// 결과 큐 생성
	QueueType* res = createQueue();
	// 큐 데이터값 저장 변수
	element data;
	int N, K;
	int i;
	int j = 0;
	int temp;
	printf("Queue 길이를 입력해주세요.");
	scanf("%d", &N);
	printf("deQueue Count 입력해주세요.");
	scanf("%d", &K);

	// 큐 데이터 값 추가
	for (i = 1; i <= N; i++)
	{
		enQueue(Q, i);
	}
	// 큐 출력
	printQ(Q);
	printf("\n\n");

	// 큐가 공백이 아닌경우
	while (!isEmpty(Q)) {
		// K번째 큐 위치 데이터 결과 큐로 보내기
		for (i = 1; i < K; i++)
		{
			data = peek(Q);
			deQueue(Q);
			enQueue(Q, data);
		}
		data = peek(Q);
		deQueue(Q);
		enQueue(res, data);
	}

	// 결과 큐 출력
	printQ(res);
	printf("\n\n");

	return 0;
}
