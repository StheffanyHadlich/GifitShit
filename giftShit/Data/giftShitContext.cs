using System;
using System.IO;
using giftShit.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace giftShit.Data
{
    public class giftShitContext : DbContext
    {
        public DbSet<Client> Client { get; set; }
        public DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=./Data/database.sqlite");
        }

        public static void InitDb(IServiceProvider serviceProvider)
        {
            const string path = "./Data/database.sqlite";
            if (File.Exists(path))
            {   
                File.Delete(path);
            }
            var serviceScope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var dataContext = serviceScope.ServiceProvider.GetRequiredService<giftShitContext>();
            dataContext.Database.EnsureCreated();

            dataContext.Product.Add(new Product
            {
                Name = "batatinhas"});
            dataContext.SaveChanges();
        }
    }
}