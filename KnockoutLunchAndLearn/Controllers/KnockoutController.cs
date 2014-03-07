using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using DotNetOpenAuth.AspNet;
using Microsoft.Web.WebPages.OAuth;
using WebMatrix.WebData;
using KnockoutLunchAndLearn.Filters;
using KnockoutLunchAndLearn.Models;

namespace KnockoutLunchAndLearn.Controllers
{
	public class KnockoutController : Controller
	{
		public ActionResult When()
		{
			return View();
		}
		private static List<KeyValuePair<Guid, Guid>> Db = new List<KeyValuePair<Guid, Guid>>();

		public JsonResult GetUsers()
		{
			return Json(new List<SavoUser>{
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" }
			}.Select(x => new { name = x.Id, displayName = x.Name }), JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GetProcesses()
		{
			return Json(new List<Process>{
				new Process{ Id = Guid.NewGuid(), Name = "Process 1" },
				new Process{ Id = Guid.NewGuid(), Name = "The Winning Opportunity" },
				new Process{ Id = Guid.NewGuid(), Name = "A Proccess" },
				new Process{ Id = Guid.NewGuid(), Name = "Another Process" },
				new Process{ Id = Guid.NewGuid(), Name = "And One More Process" },
				new Process{ Id = Guid.NewGuid(), Name = "Angry Process" },
				new Process{ Id = Guid.NewGuid(), Name = "Ardvark Process" }
			}.Select(x => new { name = x.Id, displayName = x.Name }), JsonRequestBehavior.AllowGet);
		}
		[HttpPost]
		public JsonResult AddUserToProcess(Guid processId, Guid userId)
		{
			if (!Db.Any(x => x.Key == processId && x.Value == userId))
			{
				Db.Add(new KeyValuePair<Guid, Guid>(processId, userId));
				return Json(new { message = "User was successfuly added to process", result = true });
			}
			return Json(new { message = "User count not be added to the process", result = false });
		}
	}
	public class SavoUser
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
	}
	public class Process
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
	}

	public class GridController : Controller
	{
		public JsonResult UserData(int skip = 0, int take = 10)
		{
			var list = new List<SavoUser>{
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Matthew" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Johnsky" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Ryan" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Oleg" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Najam" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Elyse" },
				new SavoUser { Id = Guid.NewGuid(), Name = "Devendren" },

			};
			
			var grid = new GridModel<SavoUser>(list, skip, take);

			return Json(grid, JsonRequestBehavior.AllowGet);
		}
		public ActionResult Grid()
		{
			return View();
		}
	}
}
