
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MappingPluginLesson.Models
{
	 public class TeamViewModel
	 {
		  public Guid Id { get; set; }
		  public string ProductName { get; set; }
		  public string CurrentReleaseName { get; set; }
		  public List<TeamMemberViewModel> TeamMembers { get; set; }
	 }
}