using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace GruntMvcDemo
{
    /// <summary>
    /// Application class.
    /// </summary>
    public class Global : System.Web.HttpApplication
    {
        /// <summary>
        /// Configures application at its start.
        /// </summary>
        /// <param name="sender">Instance of an <see cref="T:System.Web.HttpApplicationFactory"/> object.</param>
        /// <param name="e">Instance of an <see cref="T:System.EventArgs"/> object.</param>
        protected void Application_Start(object sender, EventArgs e)
        {
            RouteTable.Routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            RouteTable.Routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new
                {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                }
            );
        }
    }
}