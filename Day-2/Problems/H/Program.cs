string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long n1 = int.Parse(parts[1]);

Console.WriteLine($"floor {n} / {n1} = {Math.Floor((double)n/n1)}");
Console.WriteLine($"ceil {n} / {n1} = {Math.Ceiling((double)n/n1)}");
Console.WriteLine($"round {n} / {n1} = {Math.Round((double)n/n1, MidpointRounding.AwayFromZero)}");