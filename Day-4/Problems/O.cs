string input = Console.ReadLine();
        
char op = input.First(c => "+-*/".Contains(c)); 
string[] parts = input.Split(op); 
int A = int.Parse(parts[0]);
int B = int.Parse(parts[1]);

if (op == '+')
{
    Console.WriteLine(A + B);
}
else if (op == '-')
{
    Console.WriteLine(A - B);
}
else if (op == '*')
{
    Console.WriteLine(A * B);
}
else
{
    Console.WriteLine(A / B);
}