using System.Web.Mvc;

namespace GruntMvcDemo.Web.Mvc
{
    /// <summary>
    /// Extensions for the type <see cref="T:System.Web.Mvc.HtmlHelper"/>.
    /// </summary>
    public static class HtmlHelperExtensions
    {
        #region [ Methods : Public ]

        /// <summary>
        /// Gets value indicating whether application is running in debug.
        /// </summary>
        /// <param name="this">Instance of an <see cref="T:System.Web.Mvc.HtmlHelper"/> object.</param>
        /// <returns>Returns true if application is running in debug.</returns>
        public static bool IsDebug(this HtmlHelper @this)
        {
            #if DEBUG
                return true;
            #else
                return false;
            #endif
        }

        #endregion
    }
}