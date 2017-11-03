using System;
using System.IO;
using Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace GiftShit.Data
{
    public class GiftShitContext : DbContext
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
            var dataContext = serviceScope.ServiceProvider.GetRequiredService<GiftShitContext>();
            dataContext.Database.EnsureCreated();      
            dataContext.SaveChanges();
        }


    }
}