string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long n2 = int.Parse(parts[1]);
 
 
Console.WriteLine(n + " + " + n2 + " = " + (n + n2));
Console.WriteLine(n + " * " + n2 + " = " + (n * n2));
Console.WriteLine(n + " - " + n2 + " = " + (n - n2));