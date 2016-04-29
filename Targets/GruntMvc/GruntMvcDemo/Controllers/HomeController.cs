using System.Web.Mvc;

namespace GruntMvcDemo.Controllers
{
    /// <summary>
    /// Default controller.
    /// </summary>
    public class HomeController : Controller
    {
        #region [ Actions ]

        /// <summary>
        /// GET: /Home/
        /// </summary>
        [OutputCacheAttribute(VaryByParam = "*", Duration = 0, NoStore = true)]
        public ActionResult Index()
        {
            return View();
        }

        #endregion
    }
}