using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MappingPluginLesson.Models.Serialization
{
	//Simple
	public class SimpleObject
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string MothersName { get; set; }
		public string FathersName { get; set; }
	}
	
	

	//Nested
	public class Person
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public Person Mother { get; set; }
		public Person Father { get; set; }
	}
}