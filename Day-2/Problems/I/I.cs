﻿string input = Console.ReadLine();
string[] parts = input.Split(' ');
long n = int.Parse(parts[0]);
long n1 = int.Parse(parts[1]);

Console.WriteLine(n>=n1 ? "Yes" : "No");