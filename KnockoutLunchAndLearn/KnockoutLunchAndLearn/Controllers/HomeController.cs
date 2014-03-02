using KnockoutLunchAndLearn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutLunchAndLearn.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult DontUseKnockout(SimpleFormModel model)
        {
            return View();
        }

        public ActionResult DontUseKnockout()
        {
            var model = new SimpleFormModel(){ Id = Guid.NewGuid()};

            return View(model);
        }

        [HttpPost]
        public ActionResult DoUseKnockout(ComplicatedFormModel model)
        {
            return View(model);
        }

        public ActionResult DoUseKnockout()
        {
            var model = new ComplicatedFormModel() { Id = Guid.NewGuid() };
            return View(model);
        }

        public ActionResult Bindings()
        {
            return View();
        }
        public ActionResult Objects()
        {
            return View();
        }
        public ActionResult Structure()
        {
            return View();
        }
        public ActionResult Loading()
        {
            return View();
        }
        public ActionResult BindingHandlers()
        {
            return View();
        }
        public ActionResult Computed()
        {
            return View();
        }
        public ActionResult Observables()
        {
            return View();
        }
        public ActionResult BindingContext()
        {
            return View();
        }
        public ActionResult Require()
        {
            return View();
        }
    }
}
