using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MappingPluginLesson.Models;

namespace MappingPluginLesson.Controllers
{
	 public class HomeController : Controller
	 {
		  public ActionResult Index()
		  {
				return View();
		  }

		  //Part 1
		  public ActionResult Simple()
		  {
				return View();
		  }
		  [HttpGet]
		  public JsonResult SimpleData()
		  {
				return Json(new TeamViewModel
				{
					 Id = Guid.NewGuid(),
					 CurrentReleaseName = "Black Sabbath",
					 ProductName = "Sales Process Pro",
					 TeamMembers = new List<TeamMemberViewModel>
					 {
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "Matthew Lee", PreferredLanguages = new List<string> { "JavaScript", "C#" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "John Najam", PreferredLanguages = new List<string> { "C#", "SQL" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "John Narofsky", PreferredLanguages = new List<string> { "C#", "JavaSript" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "Oleg Sobol", PreferredLanguages = new List<string> { "CSS", "Pearl", "ActionScript" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "Devendren Reddy", PreferredLanguages = new List<string> { "C#", "SQL" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "Elyse Dequnia", PreferredLanguages = new List<string> { "CSS" }},
						  new TeamMemberViewModel { Id = Guid.NewGuid(), Name = "Ryan Conrad", PreferredLanguages = new List<string> { "C#", "JavaScript" }}
					 }
				}, JsonRequestBehavior.AllowGet);
		  }
		  [HttpPost]
		  public ActionResult SaveSimpleData(TeamViewModel model)
		  {
				return RedirectToAction("Simple");
		  }

		  //Part 2
		  public ActionResult UsingCreate(){
				return View();
		  }
		  public ActionResult SaveUsingCreate(TeamViewModel model)
		  {
				return RedirectToAction("UsingCreate");
		  }

		  //Part 3
		  public ActionResult MVVM()
		  {
				return View();
		  }

		  //Part 4
		  public ActionResult AppStructure()
		  {
				return View();
		  }

	 }
}