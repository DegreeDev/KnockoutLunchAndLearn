using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockoutLunchAndLearn.Models
{
	
	public class GridModel<T> : JsonModel
	{
		private IEnumerable<T> _data;
		public IEnumerable<T> records
		{
			get { return _data.Skip(_skip).Take(_take);}
		}

		private int _skip; 
		private int _take; 
		public int count {
		   get { return _data.Count(); }
		}
		public GridModel(IEnumerable<T> data, int skip = 0, int take = 10)
		{
			_data = data;
			_skip = skip;
			_take = take;
		}
	}
}