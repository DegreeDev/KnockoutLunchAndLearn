using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MappingPluginLesson.Controllers
{
	public class OvertimeController : Controller
	{
		// GET: Overtime
		public ActionResult Index()
		{
			return View();
		}
		public ActionResult BindingHandlers()
		{
			return View(); 
		}
		public ActionResult ComputedWrappers()
		{
			return View();
		}
	}
}