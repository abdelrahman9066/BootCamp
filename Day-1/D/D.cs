string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long n2 = int.Parse(parts[1]);
long n3 = int.Parse(parts[2]);
long n4 = int.Parse(parts[3]);  
 
Console.WriteLine("Difference = " + (n * n2 - n3 * n4));