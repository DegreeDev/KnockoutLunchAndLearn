using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace KnockoutLunchAndLearn.Models
{
	public abstract class JsonModel
	{
		[JsonIgnore]
		public string Json
		{
			get
			{
				var jsonSerializerSettings = new JsonSerializerSettings
				{
					ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver()
				};
				return JsonConvert.SerializeObject(this, Formatting.None, jsonSerializerSettings);
			}
		}
	}
}