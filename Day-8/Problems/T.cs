string[] input = Console.ReadLine().Split();
int x = int.Parse(input[0]);
int y = int.Parse(input[1]);
int z = int.Parse(input[2]);

int[] arr = {x,y,z};
Array.Sort(arr);
foreach (int num in arr)
{
    Console.WriteLine(num);
}
Console.WriteLine();
Console.WriteLine(x);
Console.WriteLine(y);
Console.WriteLine(z);
