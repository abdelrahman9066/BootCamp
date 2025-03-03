int N = int.Parse(Console.ReadLine());

int year = 365;
int month = 30;

int years = N / year;
int remainingDays = N % year;
int months = remainingDays / month;
int days = remainingDays % month;

Console.WriteLine($"{years} years");
Console.WriteLine($"{months} months");
Console.WriteLine($"{days} days");