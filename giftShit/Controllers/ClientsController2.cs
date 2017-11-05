using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using giftShit.Models;

//Pra usar caso o SQLite não funcione daqui

namespace giftShit.Controllers
{
    [Route("api/[controller]")]
    public class ClientsController2 : Controller
    {
        private List<Client> clientData = new List<Client>();

        public List<Client> get()
        {
            return clientData;
        }

        public Boolean Post(Client value) // CREATE
        {
            if (value != null)
            {
                clientData.Add(value);
                return true;
            }
            else
            {
                return false;
            }

        }

    }
}
