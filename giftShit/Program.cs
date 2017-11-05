using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace giftShit
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

       public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
<<<<<<< HEAD
                .UseStartup<Startup>().UseUrls("http://*:5050")
=======
                .UseStartup<Startup>()
                .UseUrls("http://*:5050")
>>>>>>> c159655d52eb27d593e490b1bef538cbc42a6776
                .Build();
    }
}
