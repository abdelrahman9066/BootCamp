string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long result = n * (n + 1) / 2;

Console.WriteLine(result);