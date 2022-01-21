

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
//first reverse coding challenge with n=4
const n = 4;
	for(let i=1; i<=n; i++)
	{
        let num = "";
	    for(let j=1; j<=n; j++)
        {
            if(j<i)
	        num+='+';
            else
            num+=j;
	    }
    console.log(num);
}

//second coding challenge
//print 0- 10 in binary
//or change 10 to n
for(let i=0; i <=10; i++)
{   
    console.log(i.toString(2));
}