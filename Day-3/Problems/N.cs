string s = Console.ReadLine();
char c = s[0];


if(c >= 65 && c <= 90)
{
    Console.WriteLine((char)(c+32));
}
else if(c >= 97 && c <= 122)
{
    Console.WriteLine((char)(c-32));
}
