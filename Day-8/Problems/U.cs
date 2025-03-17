string input = Console.ReadLine();
if (input.Contains("."))
{
    string[] parts = input.Split('.');
    string integerPart = parts[0];
    string decimalPart = parts[1];

    if (decimalPart.TrimEnd('0') == "")
    {
        Console.WriteLine($"int {integerPart}");
    }
    else
    {
        Console.WriteLine($"float {integerPart} 0.{decimalPart}");

    }
}


