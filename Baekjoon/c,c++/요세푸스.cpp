#include <stdio.h>
#define STACK_SIZE 5

typedef int element;        // 스택 원소(element)의 자료형을 int로 정의 

element stack[STACK_SIZE];  // 1차원 배열 스택 선언
int top = -1;               // top 초기화

// 스택이 공백 상태인지 확인하는 연산
int isEmpty() {
    if (top == -1) return 1;
    else return 0;
}

// 스택이 포화 상태인지 확인하는 연산
int isFull() {
    if (top == STACK_SIZE - 1) return 1;
    else return 0;
}

// 스택의 top에 원소를 삽입하는 연산
void push(element item) {
    if (isFull()) {				// 스택이 포화 상태인 경우
        printf("\n\n Stack is FULL! \n");
        return;
    }
    else stack[++top] = item;	// top을 증가시킨 후 현재 top에 원소 삽입
}

// 스택의 top에서 원소를 삭제하는 연산
element pop() {
    if (isEmpty()) {			// 스택이 공백 상태인 경우
        printf("\n\n Stack is Empty!!\n");
        return 0;
    }
    else return stack[top--];	// 현재 top의 원소를 삭제한 후 top 감소
}

// 스택의 원소를 출력하는 연산
void printStack()
{
    int i;
    printf("\n");
    printf(" |   |\n");
    for (i = top; i >= 0; i--)
    {
        printf(" | %d |\n", stack[i]);
    }
    printf(" ㅡㅡㅡ");
    printf("\n STACK\n");
}

int main()
{
    int board[5][5] = { {0,0,0,0,0},{0,0,1,0,3},{0,2,5,0,1},{4,2,4,4,2},{3,5,1,3,1} };
    int moves[] = { 1,5,3,5,1,2,1,4 };
    int answer = 0;

    for (int i = 0; i < sizeof(moves) / sizeof(int); i++)
    {
        // 순서대로 스택 넣기
        int move = (moves[i] - 1);
        for (int j = 0; j < sizeof(board[5]) / sizeof(int); j++)
        {
            if (board[j][move] != 0)
            {
                // stack 속 top = bottom이 같은 경우
                if (stack[top] == board[j][move])
                {
                    // 삭제
                    pop();
                    // +2
                    answer += 2;
                    // pop 완료한 2차원 배열 0 초기화
                    board[j][move] = 0;
                    break;
                }
                else
                {
                    // 삽입
                    push(board[j][move]);
                    // push 완료한 2차원 배열 0 초기화
                    board[j][move] = 0;
                    break;
                }
            }
        }
    }

    printStack();
    printf("\n result : %d", answer);
    return 0;
}
