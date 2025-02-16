string input = Console.ReadLine();
string[] parts = input.Split(' ');
double n = double.Parse(parts[0]);
 
double number = (n * n * Math.PI);
Console.WriteLine(number.ToString("F9"));