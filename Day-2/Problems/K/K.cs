string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long n1 = int.Parse(parts[1]);
long n2 = int.Parse(parts[2]);

long max = Math.Max(Math.Max(n, n1), n2);
long min = Math.Min(Math.Min(n, n1), n2);
Console.Write($"{min} {max}");