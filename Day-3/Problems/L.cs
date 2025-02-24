tring input = Console.ReadLine();
string[] parts = input.Split(' ');
string s1 = parts[0];
string s2 = parts[1];
string input1 = Console.ReadLine();
string[] parts1 = input1.Split(' ');
string s3 = parts1[0];
string s4 = parts1[1];

if (s2 == s4)
{
    Console.WriteLine("ARE Brothers");
}
else
{
    Console.WriteLine("NOT");
}
