#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;

int main()
{

    srand (time(NULL));

    int Number = rand() % 100 + 1;

    int Guessed;

	

	cout << "Guess a number! It is between 1 and 100" << endl;

	while(Guessed != Number)
    {
       cin >> Guessed;
        if (Guessed < Number)
        {
			cout << "The number is bigger. Try again!" << endl;
		}else if(Guessed > Number){
			cout << "The number is smaller. Try again!" << endl;
		}else{
            cout <<"Correct!" << endl;
        }
    }

    return 0;
}
