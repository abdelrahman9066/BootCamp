string s = Console.ReadLine();
char c = s[0];

if(c >=48 && c <= 57)
{
    Console.WriteLine("IS DIGIT");
}
else if(c >= 65 && c <= 90)
{
    Console.WriteLine("ALPHA");
    Console.WriteLine("IS CAPITAL");
}
else
{
    Console.WriteLine("ALPHA");
    Console.WriteLine("IS SMALL");
}