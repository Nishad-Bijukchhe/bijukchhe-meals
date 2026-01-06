var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

// Menu data
List<MenuItem> menu = new()
{
    new MenuItem(1,"momo",120,"Nepali dumplings with meat inside."),
    new MenuItem(2,"chowmein",150,"Nepali noodles with meat on top."),
    new MenuItem(3,"pizza",800,"Italian pizza with mozzerella cheese."),
    new MenuItem(4,"pasta",1000,"Italian pasta with cheese.")
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

// Controller
// Get all menu items
app.MapGet("/menu", () =>
{
    return menu;
})
.WithName("GetMenuItems");

app.Run();

// Model
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

// MenuItem record
record MenuItem(int Id, string Name, decimal Price, string Description);