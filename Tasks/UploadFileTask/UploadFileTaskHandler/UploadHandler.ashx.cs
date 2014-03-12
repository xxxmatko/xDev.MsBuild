using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UploadFileTaskHandler
{
    /// <summary>
    /// Summary description for UploadHandler
    /// </summary>
    public class UploadHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            HttpPostedFile file = context.Request.Files[0];
            context.Response.Write(string.Format(@"OK. Uploaded {0} bytes.", file.ContentLength)); 
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}