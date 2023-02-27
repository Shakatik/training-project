using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Розв'язування квадратного рівняння ax^2 + bx + c = 0");
        Console.WriteLine("Введіть значення a:");
        double a = double.Parse(Console.ReadLine());
        Console.WriteLine("Введіть значення b:");
        double b = double.Parse(Console.ReadLine());
        Console.WriteLine("Введіть значення c:");
        double c = double.Parse(Console.ReadLine());

        double discriminant = Math.Pow(b, 2) - 4 * a * c;
        if (discriminant < 0) {
            Console.WriteLine("Дискримінант менше нуля, рівняння не має дійсних коренів");
        } else if (discriminant == 0) {
            double x = -b / (2 * a);
            Console.WriteLine("Рівняння має один корінь: x = {0}", x);
        } else {
            double x1 = (-b + Math.Sqrt(discriminant)) / (2 * a);
            double x2 = (-b - Math.Sqrt(discriminant)) / (2 * a);
            Console.WriteLine("Рівняння має два корені: x1 = {0}, x2 = {1}", x1, x2);
        }

        Console.ReadLine();
    }
}