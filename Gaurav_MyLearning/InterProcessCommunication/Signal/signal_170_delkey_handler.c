#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

void abc(int signo)
{
	printf("You have pressed the DEL<ctrl + c> key with signo %d\n", signo);
}
void def(int signo))
 {
     printf("You have pressed the DEL<ctrl + c> key with signo %d\n", signo);
   }


int main()
{
	printf("Press DEL<ctrl + c> key\n");
	signal(SIGINT, abc);
   signal(SIGQUIT, def); // key, function
	for(;;);
	return 0;
}
