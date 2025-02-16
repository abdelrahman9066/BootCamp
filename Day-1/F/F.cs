string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = long.Parse(parts[0]);
long n2 = long.Parse(parts[1]);
 
 
Console.WriteLine(n % 10 + n2 % 10);