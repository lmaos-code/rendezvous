#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;

int main()
{

    srand (time(NULL));

    int Zahl = rand() % 100 + 1;

    int Geraten;



    cout << "Eraten sie eine Zahl! Sie liegt zwischen 1 und 100" << endl;

    while(Geraten != Zahl)
    {
       cin >> Geraten;
        if (Geraten < Zahl)
        {
            cout << "Die Zahl ist groeßer. Versuchen Sie es nochmal!"  << endl;
        }else if(Geraten > Zahl){
        cout << "Die Zahl ist kleiner. Versuchen Sie es nochmal!" << endl;

        }else{
            cout <<"Richtig" << endl;
        }
    }

    return 0;
}
