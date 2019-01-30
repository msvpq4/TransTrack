using System.Web.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using transtrack.Models;

namespace transtrack.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Portal()
        {
            ViewBag.Message = "You'll replace this later with css.";

            TransTrackEntities entities = new TransTrackEntities();
            return View(from Statement in entities.Statement
                        orderby Statement.Date descending
                        select Statement);
        }

        public ActionResult Statements()
        {
            ViewBag.Message = "Your statements page.";

            TransTrackEntities entities = new TransTrackEntities();
            return View(from Statement in entities.Statement
                        group Statement by new { Statement.Name }
                        into mygroup
                        select mygroup.FirstOrDefault());
        }

        public ActionResult ManageAlerts()
        {
            ViewBag.Message = "Your alerts management page.";

            return View();
        }

        public ActionResult Team()
        {
            ViewBag.Message = "Your team page.";

            TransTrackEntities entities = new TransTrackEntities();
            return View(from Statement in entities.Statement
                        orderby Statement.Date ascending
                        select Statement);
        }

        public ActionResult Individual()
        {
            ViewBag.Message = "Your individual page.";

            TransTrackEntities entities = new TransTrackEntities();
            return View(from Statement in entities.Statement
                        group Statement by new { Statement.Name }
                        into mygroup
                        select mygroup.FirstOrDefault());
        }

        public ActionResult EmployeePortal()
        {
            ViewBag.Message = "Your employee page.";

            TransTrackEntities entities = new TransTrackEntities();
            return View(from Statement in entities.Statement
                        group Statement by new { Statement.Name }
                        into mygroup
                        select mygroup.FirstOrDefault());
        }
        
        public ActionResult EmployeeStatements()
        {
            ViewBag.Message = "Your employee statements.";

            return View();
        }
        
        public ActionResult EmployeeManageAlerts()
        {
            ViewBag.Message = "Your employee alerts page.";

            return View();
        }
    }
}