using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MappingPluginLesson.Models
{
	 public class TeamMemberViewModel
	 {
		  public Guid Id { get; set; }
		  public string Name { get; set; }
		  public List<string> PreferredLanguages { get; set; }
	 }
}