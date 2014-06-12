using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutLunchAndLearn.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace KnockoutLunchAndLearn.Controllers
{
    public class PluginController : Controller
    {
        // GET: Plugin
        public ActionResult Index()
        {
            return View();
        }

		  [HttpPost]
		  public string Save(ItemCollectionModel model)
		  {
				return JsonConvert.SerializeObject(model, new JsonSerializerSettings
				{
					 ContractResolver = new CamelCasePropertyNamesContractResolver()
				});
		  }
		  [HttpGet]
		  public ActionResult Old()
		  {
				return View();
		  }
		  [HttpGet]
		  public string Items()
		  {
				var random = new Random();
				var model = new ItemCollectionModel
				{
					 Items = new List<ItemModel>
					 {
						  new ItemModel { Id = random.Next(), Name = "Sample 1 - " + DateTime.Now.ToShortTimeString() },
						  new ItemModel { Id = random.Next(), Name = "Sample 2 - " + DateTime.Now.ToShortTimeString() },
						  new ItemModel { Id = random.Next(), Name = "Sample 3 - " + DateTime.Now.ToShortTimeString() },
						  new ItemModel { Id = random.Next(), Name = "Sample 4 - " + DateTime.Now.ToShortTimeString() },
						  new ItemModel { Id = random.Next(), Name = "Sample 5 - " + DateTime.Now.ToShortTimeString() },
					 }
				};
				return JsonConvert.SerializeObject(model, new JsonSerializerSettings
				{
					 ContractResolver = new CamelCasePropertyNamesContractResolver()
				});
		  }
    }
}