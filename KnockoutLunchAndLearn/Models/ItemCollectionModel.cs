using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockoutLunchAndLearn.Models
{
	 public class ItemCollectionModel
	 {
		  public List<ItemModel> Items { get; set; }
	 }
	 public class ItemModel
	 {
		  public int Id { get; set; }
		  public string Name { get; set; }
	 }
}