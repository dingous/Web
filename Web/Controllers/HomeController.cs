using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Web.Models;


namespace Web.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{

			var config = new ConfigurationBuilder()
			  .SetBasePath(Directory.GetCurrentDirectory())
			  .AddJsonFile("appsettings.json").Build();

			//var host = HttpContext.Connection.RemoteIpAddress.ToString();
			var host = "localhost";
			host = host.Replace(":", "").Replace("f", "");

			string UrlApi1 = config["UrlApi1"].Replace("[host]", host);
			string UrlApi2 = config["UrlApi2"].Replace("[host]", host);



			ViewBag.UrlApi1 = UrlApi1;
			ViewBag.UrlApi2 = UrlApi2;

			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
