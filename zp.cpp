#include <bits/stdc++.h>
using namespace std;

int main() {
    int t, n;
    long long int b, a;
    for(int i=0 ; i<1000 ; i++){
        a = i ^ (i+1);
        b = (i+1) ^ (i+2);
        if(a == b){
            cout<<i<<endl;
        }
    }
	// your code goes here
	return 0;
}
