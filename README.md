# Integrate Syncfusion's Blazor Components into Any SPA Framework as Custom Elements

This example demonstrates how to create custom elements from Blazor Razor components and integrate them into JavaScript SPA frameworks such as Angular.

## Prerequisites

* [.NET 7.0 or later](https://dotnet.microsoft.com/en-us/download/dotnet)
* [Visual Studio tool](https://dotnet.microsoft.com/en-us/download/dotnet) with installed "ASP.NET and web development"
* [Angular 15+](https://angular.io/guide/setup-local)

## Run the Blazor Server application

### Using Visual Studio

* Open the BlazorServerApp(.sln or .csproj) file from `BlazorServerApp\` location.
* Run the application (or press `ctrl+ F5`).

### Using command prompt

```
cd BlazorServerApp
dotnet run
```

Leave that Blazor Server app running.

## Run the Angular application

```
cd angular-app
npm install
npm start
```

Now browse to [http://localhost:5003/](http://localhost:5003/), the Angular application dynamically renders the Blazor Server components.

![Custom-Element-Output](https://user-images.githubusercontent.com/36289974/214289911-72d0aed3-deea-442b-b75b-906049cb885b.gif)

## Reference

[https://learn.microsoft.com/en-us/aspnet/core/blazor/components/?view=aspnetcore-7.0#blazor-custom-elements](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/?view=aspnetcore-7.0#blazor-custom-elements)
